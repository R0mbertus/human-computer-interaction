isElementLoaded("#goal-button").then((element) => {
    element.addEventListener('click', loadPage.bind(null, "stats"));
});