isElementLoaded("#settings").then((settings) => {
    loadNavbar();

    let image = document.createElement("img");
    image.id = "profile-pic";
    image.alt = "profile pic"

    let greeting = document.createElement("p");
    greeting.id = "greeting";
    
    let settings_form = getInfoForm();

    const store = document.createElement("button");
    store.id = "save-button";
    store.innerHTML = "Store";
    settings_form.appendChild(store);
    store.addEventListener('click', (e) => {
        if (settings_form.checkValidity()) {
            e.preventDefault();
            saveInfo();
            updateContent();
        }
    });

    updateContent();
    settings.appendChild(image);
    settings.appendChild(greeting);
    settings.appendChild(settings_form)
    settings_form.classList.add("box-style")

    function updateContent() {
        greeting.innerHTML = `Hello, ${information.name}!`;
        if (information.pic != "") {
            image.src = information.pic;
        }
        else {
            image.src = "images/default-profile.jpeg";
        }
    }
});