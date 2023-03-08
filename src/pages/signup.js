isElementLoaded("#signup").then((signup) => {
    isElementLoaded("#logo-button").then((element) => {
    });

    let img = document.createElement("img");
    img.src = "images/logo.png"
    img.alt = "App logo"

    let signup_form = document.createElement("form");

    let email_input = document.createElement("input");
    email_input.type = "email";
    email_input.id = "email";
    email_input.placeholder = "Email";
    email_input.required = true;

    let password_input = document.createElement("input")
    password_input.type = "password";
    password_input.id = "password";
    password_input.placeholder = "Password"
    password_input.minLength = 8;
    password_input.required = true;

    let signup_button = document.createElement("button");
    signup_button.id = "signup-button";
    signup_button.innerHTML = "Sign up!"

    signup_form.appendChild(email_input);
    signup_form.appendChild(password_input);
    signup_form.appendChild(signup_button);

    signup_button.addEventListener('click', (e) => {
        if (signup_form.checkValidity()) {
            e.preventDefault();
            account.email = email_input.value;
            account.password = password_input.value;
            loadPage("info");
        }
    });

    signup.appendChild(img);
    signup.appendChild(signup_form);
})

let account = {
    email: "",
    password: ""
}