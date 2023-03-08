isElementLoaded("#info").then((info) => {

    let types = ["url", "text", "date", "number", "number"]
    let ids = ["pic", "name", "dateofbirth", "height", "weight"]
    let labels = ["Profile Pic", "Name", "DoB", "Height", "Weight"]

    let back_button = document.createElement("button");
    back_button.id = "info-back";
    back_button.innerHTML = "<";

    back_button.addEventListener('click', (e) => {
        saveInfo();
        loadPage("signup");
    })

    let title = document.createElement("h2");
    title.innerHTML = "Please enter the following details"

    let info_form = document.createElement("form");

    // let profile_pic = document.createElement("input");
    // profile_pic.type = "url";
    // info_form.appendChild(profile_pic);

    for (let i = 0; i < ids.length; i++) {
        let div = document.createElement("div");
        div.id = `${ids[i]}-div`

        let label = document.createElement("label")
        label.setAttribute("for", ids[i]);
        label.innerHTML = labels[i];
        
        let input = document.createElement("input");
        input.type = types[i];
        input.id = ids[i];
        input.required = true;
       
        input.value = information[ids[i]]

        div.appendChild(label);
        div.appendChild(input);
        info_form.appendChild(div);
    }

    isElementLoaded("#pic-div").then((pic_div) => {
        pic_input = pic_div.querySelector("input");
        pic_input.placeholder = "Optional";
        pic_input.required = false;
    })

    isElementLoaded("#dateofbirth-div").then((date_div) => {
        date_div.firstElementChild.innerHTML = '<abbr title="Date of Birth">DoB</abbr>'
    })

    isElementLoaded("#height-div").then((height_div) => {
        height_div.querySelector("input").min = 0;
        addRadios(height_div, "cm", "inches", "height")
    })
    
    isElementLoaded("#weight-div").then((weight_div) => {
        weight_div.querySelector("input").min = 0;
        addRadios(weight_div, "kg", "pounds", "weight")
    })

    let next_button = document.createElement("button");
    next_button.id = "next-button";
    next_button.innerHTML = "Next";

    info_form.appendChild(next_button);

    next_button.addEventListener('click', (e) => {
        if (info_form.checkValidity()) {
            e.preventDefault();
            saveInfo();
            loadPage("goal");
        }
    });

    info.appendChild(back_button);
    info.appendChild(title);
    info.appendChild(info_form);

    function saveInfo() {
        information.pic = document.querySelector("#pic").value;
        information.name = document.querySelector("#name").value;
        information.dateofbirth = document.querySelector("#dateofbirth").value;
        information.height = document.querySelector("#height").value;
        information.height_unit = document.querySelector(`input[name="height-unit"]:checked`).value;
        information.weight = document.querySelector("#weight").value;
        information.weight_unit = document.querySelector(`input[name="weight-unit"]:checked`).value;
    }

    function addRadios(div, value1, value2, measurement) {
        let input1 = document.createElement("input");
        input1.type = "radio";
        input1.id = value1;
        input1.name = `${measurement}-unit`;
        input1.value = value1;
        input1.required = true;
        input1.checked = true;

        let label1 = document.createElement("label")
        label1.setAttribute("for", `${measurement}-unit`);
        label1.innerHTML = value1;
        let input2 = document.createElement("input");
        input2.type = "radio";
        input2.id = value2
        input2.name = `${measurement}-unit`;
        input2.value = value2
        let label2 = document.createElement("label")
        label2.setAttribute("for", `${measurement}-unit`);
        label2.innerHTML = value2
        div.appendChild(input1);
        div.appendChild(label1);
        div.appendChild(input2);
        div.appendChild(label2);
    }
})
