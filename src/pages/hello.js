isElementLoaded("#hello").then(() => {
    const button = document.getElementById('myButton');
    button.addEventListener('click', loadPage.bind(null, 1));
});