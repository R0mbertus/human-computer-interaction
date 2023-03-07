document.addEventListener('DOMContentLoaded', (event) => {
    // change this index to the index of your page to get yours to load first
    loadPage(0);
});

// all the different pages in our app (add yours here)
const pages = [
    "pages/hello",
    "pages/world"
]

// a function to load insert a html page into the #content-container and load
// the javascript file for that html page
function loadPage(index) {
    const element = document.querySelector("#content-container");
    fetch(`${pages[index]}.html`)
        .then(response => response.text())
        .then(data => {
            element.innerHTML = data;
        });
    
    const script = document.createElement("script");
    script.src = `${pages[index]}.js`;
    document.head.appendChild(script);
}

// this function keeps checking if an element exists and returns that element
// if it does exist
async function isElementLoaded(element) {
    while (document.querySelector(element) === null) {
        await new Promise(resolve => requestAnimationFrame(resolve));
    }
    return document.querySelector(element); 
};
