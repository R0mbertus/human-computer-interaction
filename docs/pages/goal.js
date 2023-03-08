isElementLoaded("#goal").then((goal) => {

    let step_size = ["1000", "5", "50", "1"]
    let ids = ["steps", "minutes", "calories", "weight"]
    let labels = ["Steps/day", "Active Minutes/day", "Calorie Intake/day", "Ideal Weight"]

    let back_button = document.createElement("button");
    back_button.id = "info-back";
    back_button.innerHTML = "<";

    back_button.addEventListener('click', (e) => {
        saveInfo();
        loadPage("info");
    })

    let title = document.createElement("h2");
    title.innerHTML = "Please choose your Goals"

    let goal_form = document.createElement("form");

    for (let i = 0; i < ids.length; i++) {
        let div = document.createElement("div");
        div.id = `${ids[i]}-div`

        let label = document.createElement("label")
        label.setAttribute("for", ids[i]);
        label.innerHTML = labels[i];

        let input = document.createElement("input");
        input.type = "number";
        input.id = ids[i];
        input.step = step_size[i];
        input.min = "0";
        input.required = true;
        input.value = goals[ids[i]];

        let check = document.createElement("input");
        check.type = "checkbox";
        check.setAttribute("for", ids[i]);
        check.checked = goals.checked[i];
        input.disabled = !check.checked;
        check.addEventListener("change", () => {
            if (check.checked == true) {
                input.disabled = false;
            } else {
                input.disabled = true;
            }
        })
        let div2 = document.createElement("div");
        div2.appendChild(check);
        div2.appendChild(label);
        div.appendChild(div2);
        div.appendChild(input);
        goal_form.appendChild(div);
    }

    isElementLoaded("#weight-div").then((weight_div) => {
        let weight_input = weight_div.querySelector("#weight")
        if (weight_input.value == "" || weight_input.value != goals.weight) {
            weight_input.value = information.weight;
        }
        let p = document.createElement("p");
        p.innerHTML = information.weight_unit;
        let div = document.createElement("div");
        div.appendChild(weight_input);
        div.appendChild(p);
        weight_div.appendChild(div);
    })


    let finish_button = document.createElement("button");
    finish_button.id = "finish-button";
    finish_button.innerHTML = "Finish";

    goal_form.appendChild(finish_button);

    finish_button.addEventListener('click', (e) => {
        if (goal_form.checkValidity()) {
            e.preventDefault();
            saveInfo();
            loadPage("stats");
        }
    });

    goal.appendChild(back_button);
    goal.appendChild(title);
    goal.appendChild(goal_form);


    function saveInfo() {
        let checked = [false, false, false, false]
        let checkboxes = document.querySelectorAll(`input[type="checkbox"]`)
        for (let i = 0; i < checked.length; i++) {
            checked[i] = checkboxes[i].checked
        }
        goals = {
            checked: checked,
            steps: document.querySelector("#steps").value,
            minutes: document.querySelector("#minutes").value,
            calories: document.querySelector("#calories").value,
            weight: document.querySelector("#weight").value
        }
    }
})