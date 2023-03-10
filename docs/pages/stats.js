isElementLoaded("#stats").then((stats) => {
    loadNavbar();

    document.getElementById("steps").innerHTML = `${goals.steps}`;
    document.getElementById("calories").innerHTML = `${goals.calories}`;
    document.getElementById("minutes").innerHTML = `${goals.minutes}`;
    document.getElementById("weight").innerHTML = `${information.weight} ${information.weight_unit}`;
    document.getElementById("weight-goal").innerHTML = `${goals.weight} ${information.weight_unit}`;

    document.getElementById("steps-progress").addEventListener("click", function() {
        loadPage("stats-subpages/steps");
    });
    document.getElementById("calories-progress").addEventListener("click", function() {
        loadPage("stats-subpages/calories");
    });
    document.getElementById("activity-progress").addEventListener("click", function() {
        loadPage("stats-subpages/activity");
    });
    document.getElementById("sleep-progress").addEventListener("click", function() {
        loadPage("stats-subpages/sleep");
    });
});


 
 