const form = document.querySelector("form");
const email = document.getElementById("email");
const emailError = document.querySelector("#email + span.error");

const country = document.getElementById("country");
const countryError = document.querySelector("#country + span.error");

const zip = document.getElementById("zip");
const zipError = document.querySelector("#zip + span.error");

const password = document.getElementById("password");
const passwordError = document.querySelector("#password + span.error");

const confirmPassword = document.getElementById("confirmPassword");
const confirmPasswordError = document.querySelector("#confirmPassword + span.error");

//Validate Email
email.addEventListener("input", (event) => {
    if (email.validity.valid) {
        emailError.textContent = "";
        emailError.className = "error";
    } else {
        showError(email);
    };
});

//Validate Country
country.addEventListener("input", (event) => {
    if (country.validity.valid) {
        countryError.textContent = "";
        countryError.className = "error";
    } else {
        showError(country);
    };
});

//Validate ZipCode
zip.addEventListener("input", (event) => {
    if (zip.validity.valid) {
        zipError.textContent = "";
        zipError.className = "error";
    } else {
        showError(zip);
    };
});

//Validate Password
password.addEventListener("input", (event) => {
    if (password.validity.valid) {
        passwordError.textContent = "";
        passwordError.className = "error";
    } else {
        showError(password);
    };
});

//Validate Confirm Password
confirmPassword.addEventListener("input", (event) => {
    if (confirmPassword.value !== password.value) {
        confirmPassword.setCustomValidity("This should match your password exactly.");
        showError(confirmPassword);
    } else {
        confirmPassword.setCustomValidity("");
    };

    if (confirmPassword.validity.valid) {
        confirmPasswordError.textContent = "";
        confirmPasswordError.className = "error";
    } else {
        showError(confirmPassword);
    };
});

//Define Error Messages
function showError(input) {
    if (input === email) {
        if (email.validity.valueMissing) {
            emailError.textContent = "You need to provide an email address.";
        } else if (email.validity.typeMismatch) {
            emailError.textContent = "Entered value needs to be a valid email address.";
        };
        emailError.className = "error active";
    };

    if (input === country) {
        if (country.validity.valueMissing) {
            countryError.textContent = "You need to provide a country.";
        } else if (country.validity.patternMismatch) {
            countryError.textContent = "Your county name should have no numbers or symbols. Spaces are ok.";
        };
        countryError.className = "error active";
    };

    if (input === zip) {
        if (zip.validity.valueMissing) {
            zipError.textContent = "You need to provide your five digit zip code.";
        } else if (zip.validity.tooShort) {
            zipError.textContent = "Zip code needs at least 5 digits.";
        } else if (zip.validity.tooLong) {
            zipError.textContent = "Zip code can only have 5 digits";
        } else if (zip.validity.patternMismatch) {
            zipError.textContent = "Zip code can only have digits (no letters or symbols).";
        };
        zipError.className = "error active";
    };

    if (input === password) {
        if (password.validity.valueMissing) {
            passwordError.textContent = "You need to provide a password.";
        } else if (password.validity.tooShort) {
            passwordError.textContent = "Your password needs to be eight characters or more.";
        };
        passwordError.className = "error active";
    };

    if (input === confirmPassword) {
        if (confirmPassword.validity.valueMissing) {
            confirmPasswordError.textContent = "You need to confirm your password.";
        } else {
            confirmPasswordError.textContent = "Your passwords need to match.";
        };
        confirmPasswordError.className = "error active";  
    };
}
//Check for validity before sending
form.addEventListener("submit", (event) => {
    if (!email.validity.valid || !country.validity.valid || !zip.validity.valid || !password.validity.valid || !confirmPassword.validity.valid) {
        event.preventDefault();
    };
});