isElementLoaded("#content-container").then((element) => {
    if (document.querySelector("#navbar") === null) {
        fetch(`pages/navbar.html`)
            .then(response => response.text())
            .then(data => {
                element.innerHTML = element.innerHTML + data;
            });

        const script = document.createElement("script");
        script.src = `pages/navbar.js`;
        document.head.appendChild(script);
    }
});