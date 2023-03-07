document.addEventListener('DOMContentLoaded', (event) => {
    loadPage(0);
});

const pages = [
    "pages/hello",
    "pages/world"
]

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
