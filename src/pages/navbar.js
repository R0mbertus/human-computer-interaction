const buttons = ["stats", "exercises", "food", "settings"];

isElementLoaded("#navbar").then(() => {
    for (const button of buttons) {
        isElementLoaded(`#navbar-${button}`).then((element) => {
            element.addEventListener('click', navbarClicked.bind(null, button));
        });
    }
    const stats = document.querySelector("#navbar-stats");
    stats.className = "selected";
});

function navbarClicked(pageName) {
    const selected = document.querySelector(`#navbar-${pageName}`);
    for (const button of buttons) {
        const element = document.querySelector(`#navbar-${button}`);
        element.className = "";
    }
    selected.className = "selected";
    loadPage(pageName)
}
