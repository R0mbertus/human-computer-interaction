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

document.getElementById("steps").innerHTML = `${goals.steps}`;
document.getElementById("calories").innerHTML = `${goals.calories}`;
document.getElementById("minutes").innerHTML = `${goals.minutes}`;
document.getElementById("weight").innerHTML = `${information.weight} ${information.weight_unit}`;
document.getElementById("weight-goal").innerHTML = `${goals.weight} ${information.weight_unit}`;

document.getElementById("steps-progress").addEventListener("click", function() {
    loadPage("steps.html");
});
document.getElementById("calories-progress").addEventListener("click", function() {
    loadPage("calories");
});
document.getElementById("activity-progress").addEventListener("click", function() {
    loadPage("activity");
});
document.getElementById("sleep-progress").addEventListener("click", function() {
    loadPage("sleep");
});
 
 