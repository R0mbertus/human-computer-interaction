isElementLoaded("#signup").then((signup) => {
    let img = document.createElement("img");
    img.src = "images/logo.png"
    img.alt = "App logo"

    let signup_form = document.createElement("form");
    signup_form.classList.add("box-style");

    let email_input = document.createElement("input");
    email_input.type = "email";
    email_input.id = "email";
    email_input.placeholder = "Email";
    email_input.required = true;
    email_input.value = account.email;

    let password_input = document.createElement("input")
    password_input.type = "password";
    password_input.id = "password";
    password_input.placeholder = "Password"
    password_input.minLength = 8;
    password_input.required = true;
    password_input.value = account.password;

    let signup_button = document.createElement("button");
    signup_button.id = "signup-button";
    signup_button.innerHTML = "Sign up!"

    signup_form.appendChild(email_input);
    signup_form.appendChild(password_input);
    signup_form.appendChild(signup_button);

    signup_button.addEventListener('click', (e) => {
        if (signup_form.checkValidity()) {
            e.preventDefault();
            account = {
                email: email_input.value,
                password: password_input.value
            }
            loadPage("info");
        }
    });
    signup.appendChild(img);
    signup.appendChild(signup_form);
})