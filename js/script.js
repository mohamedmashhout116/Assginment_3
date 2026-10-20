
/* Registration Form */

const form = document.getElementById("registrationForm");

if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        const age = document.getElementById("age").value;

        document.getElementById("nameError").textContent = "";
        document.getElementById("emailError").textContent = "";
        document.getElementById("passwordError").textContent = "";
        document.getElementById("confirmPasswordError").textContent = "";
        document.getElementById("ageError").textContent = "";
        document.getElementById("message").textContent = "";

        let valid = true;

        if (name === "") {
            document.getElementById("nameError").textContent = "Name is required.";
            valid = false;
        }

        if (email === "" || !email.includes("@") || !email.includes(".")) {
            document.getElementById("emailError").textContent = "Enter a valid email.";
            valid = false;
        }

        if (password.length < 8) {
            document.getElementById("passwordError").textContent =
                "Password must be at least 8 characters.";
            valid = false;
        }

        if (confirmPassword === "" || confirmPassword !== password) {
            document.getElementById("confirmPasswordError").textContent =
                "Passwords do not match.";
            valid = false;
        }

        if (age === "" || Number(age) <= 0) {
            document.getElementById("ageError").textContent =
                "Enter a valid age.";
            valid = false;
        }

        if (valid) {
            document.getElementById("message").textContent =
                "Registration successful!";
            form.reset();
        }
    });
}


/* People Data */

const people = [
    { name: "Ahmed", age: 20, city: "Cairo" },
    { name: "Mona", age: 22, city: "Giza" },
    { name: "Ali", age: 19, city: "Alexandria" },
    { name: "Sara", age: 25, city: "Cairo" },
    { name: "Omar", age: 21, city: "Giza" }
];

const tableBody = document.getElementById("tableBody");
const searchInput = document.getElementById("searchInput");
const sortNameButton = document.getElementById("sortNameButton");
const sortAgeButton = document.getElementById("sortAgeButton");
const resultCount = document.getElementById("resultCount");

let displayedPeople = people;

function showData(data) {
    if (!tableBody) {
        return;
    }

    tableBody.innerHTML = "";

    for (let i = 0; i < data.length; i++) {
        const row = document.createElement("tr");

        row.innerHTML =
            "<td>" + data[i].name + "</td>" +
            "<td>" + data[i].age + "</td>" +
            "<td>" + data[i].city + "</td>";

        tableBody.appendChild(row);
    }

    if (resultCount) {
        resultCount.textContent = "Results: " + data.length;
    }
}

if (tableBody) {
    showData(people);
}

if (searchInput) {
    searchInput.addEventListener("input", function() {
        const searchText = searchInput.value.toLowerCase();
        displayedPeople = [];

        for (let i = 0; i < people.length; i++) {
            const name = people[i].name.toLowerCase();
            const city = people[i].city.toLowerCase();

            if (name.includes(searchText) || city.includes(searchText)) {
                displayedPeople.push(people[i]);
            }
        }

        showData(displayedPeople);
    });
}

if (sortNameButton) {
    sortNameButton.addEventListener("click", function() {
        displayedPeople.sort(function(a, b) {
            return a.name.localeCompare(b.name);
        });

        showData(displayedPeople);
    });
}

if (sortAgeButton) {
    sortAgeButton.addEventListener("click", function() {
        displayedPeople.sort(function(a, b) {
            return a.age - b.age;
        });

        showData(displayedPeople);
    });
}
