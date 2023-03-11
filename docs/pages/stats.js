isElementLoaded("#stats-container").then((stats) => {
    loadNavbar();

    const statIDs = ["steps", "calories", "activity", "sleep"];

    for (const index in statIDs) {
        stats.innerHTML = stats.innerHTML += 
        `<div id="${statIDs[index]}-stat" class="box-style">
            <p>Daily ${statIDs[index]} goal: ${goals[statIDs[index]]}</p>
            <div id="${statIDs[index]}-progress" class="progress-bar">
                <div class="progress" style="width: ${randomPercentage[index]}%">${randomPercentage[index]}%</div>
            </div>
        </div>`
    }

    document.addEventListener('click', function(event) {
        for (const statID of statIDs) {
            const statElem = document.querySelector(`#${statID}-stat`);
            if (statElem && statElem.contains(event.target)) {
                loadPage(`stats-subpages/${statID}`);
            }
        }
        
        // if (event.target.matches('#steps-stat, #calories-stat, #activity-stat, #sleep-stat')) {
        //     const statID = event.target.id.split('-')[0];
            
        // }
    });
});
