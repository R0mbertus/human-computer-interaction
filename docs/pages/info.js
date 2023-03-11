isElementLoaded("#info").then((info) => {

    let back_button = document.createElement("button");
    back_button.classList.add("box-style");
    back_button.classList.add("back-button");
    back_button.innerHTML = "<";

    back_button.addEventListener('click', (e) => {
        saveInfo();
        loadPage("signup");
    })

    let title = document.createElement("h2");
    title.innerHTML = "Please enter the following details"

    let info_form = getInfoForm();
    info_form.classList.add("box-style");

    let next_button = document.createElement("button");
    next_button.id = "next-button";
    next_button.innerHTML = "Next";

    info_form.appendChild(next_button);

    next_button.addEventListener('click', (e) => {
        if (info_form.checkValidity()) {
            e.preventDefault();
            saveInfo();
            loadPage("goal");
        }
    });

    info.appendChild(back_button);
    info.appendChild(title);
    info.appendChild(info_form);

})
