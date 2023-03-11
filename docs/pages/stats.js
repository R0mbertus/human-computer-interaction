isElementLoaded("#stats-container").then((stats) => {
    loadNavbar();

    const statIDs = ["steps", "calories", "activity", "sleep"];

    for (let i = 0; i < statistics.length; i++) {
        let statDiv = document.createElement("div");
        statDiv.id = `${statistics[i].stat}-stat`
        statDiv.classList.add("box-style");
        statDiv.innerHTML =
            `<p>${statistics[i].desc}:</p>
            <div id="${statistics[i].stat}-progress" class="progress-bar">
                <div class="progress" style="width: ${statistics[i].percentage}%">${statistics[i].percentage}%</div>
            </div>`
        stats.appendChild(statDiv);
        statDiv.addEventListener("click", () => { createPage(statistics[i]) })
    }

    let days = ["Sat", "Sun", "Mon", "Tues", "Wed", "Thur", "Fri"]

    function createPage(statistic) {
        let page = document.getElementById("stats");
        page.innerHTML = "";
        let back_button = document.createElement("button");
        back_button.id = "stats-back";
        back_button.innerHTML = "<";

        back_button.addEventListener('click', (e) => {
            loadPage("stats");
        });

        let heading = document.createElement("h3");
        heading.innerHTML = `${statistic.desc} this Week`

        let history = statistic.history
        //largest value for relative bar chart height
        const largestValue = history.reduce((max, obj) => obj.value > max ? obj.value : max, -Infinity);

        let chart = document.createElement("div");
        chart.classList.add("chart");

        let chart_labels = document.createElement("div");
        chart_labels.classList.add("chart-labels");

        let table = document.createElement("table");

        for (let i = 0; i < history.length; i++) {
            chart.innerHTML +=
                `<div class="bar" style="height: ${(20 * history[i].value) / largestValue}vh;"><span>${history[i].value}</span></div>`;
            chart_labels.innerHTML +=
                `<span>${days[i]}</span>`;

            let tr = document.createElement("tr");
            tr.innerHTML =
                `<td>${history[i].date}</td><td>${history[i].value}</td>`
            table.prepend(tr);
        }

        page.appendChild(back_button);
        page.appendChild(heading);
        page.appendChild(chart);
        page.appendChild(chart_labels);
        page.appendChild(table);
    }




});

