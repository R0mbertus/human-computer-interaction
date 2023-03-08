isElementLoaded("#info-button").then((element) => {
    element.addEventListener('click', loadPage.bind(null, "goal"));
});