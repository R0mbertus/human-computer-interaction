isElementLoaded("#logo-button").then((element) => {
    element.addEventListener('click', loadPage.bind(null, "info"));
});