isElementLoaded("#info").then((info)=> {

})

isElementLoaded("#back-button").then((element) => {
    element.addEventListener('click', loadPage.bind(null, "signup"));
});

isElementLoaded("#info-button").then((element) => {
    element.addEventListener('click', loadPage.bind(null, "goal"));
});
