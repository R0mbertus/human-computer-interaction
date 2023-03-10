isElementLoaded("#navbar").then(() => {
    const buttons = ["stats", "exercises", "food", "settings"];

    for (const button of buttons) {
        isElementLoaded(`#navbar-${button}`).then((element) => {
            element.addEventListener('click', navbarClicked.bind(null, button, buttons));
        });

        if (document.getElementById(button) !== null) {
            console.log(button);
            document.querySelector(`#navbar-${button}`).className = "selected";
        }
    }
});

function navbarClicked(pageName, buttons) {
    if (document.querySelector(`#${pageName}`) === null) {
        const selected = document.querySelector(`#navbar-${pageName}`);
        for (const button of buttons) {
            const element = document.querySelector(`#navbar-${button}`);
            element.className = "";
        }
        selected.className = "selected";
        loadPage(pageName)
    }
}
