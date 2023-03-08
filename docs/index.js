document.addEventListener('DOMContentLoaded', (event) => {
    // change this index to the index of your page to get yours to load first
    loadPage("signup");
});

// a function to load insert a html page into the #content-container and load
// the javascript file for that html page
function loadPage(pageName) {
    const element = document.querySelector("#page-container");
    fetch(`pages/${pageName}.html`)
        .then(response => response.text())
        .then(data => {
            element.innerHTML = data;
        });

    //first remove the old pages script
    let oldScript;
    if ((oldScript = document.querySelector("#page-script"))) {
        document.head.removeChild(oldScript);
    }

    const script = document.createElement("script");
    script.src = `pages/${pageName}.js`;
    script.id = "page-script";
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

// Global variables
var account = {
    email: "",
    password: ""
}

var information = {
    pic: "",
    name: "",
    dateofbirth: "",
    height: "",
    height_unit: "cm",
    weight: "",
    weight_unit: "kg",
}

var goals = {
    checked: [false, false, false, false],
    steps: "",
    minutes: "",
    calories: "",
    weight: ""
}


//Reusable code for info and settings
function getInfoForm() {
    let types = ["url", "text", "date", "number", "number"]
    let ids = ["pic", "name", "dateofbirth", "height", "weight"]
    let labels = ["Profile Pic", "Name", "DoB", "Height", "Weight"]

    let info_form = document.createElement("form");

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

        // Get today's date
        const today = new Date();

        // Calculate a date that is 100 years ago
        const minDate = new Date(today.getFullYear() - 100, today.getMonth(), today.getDate());
        const maxDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());

        // Format the date as yyyy-mm-dd
        const formattedMinDate = minDate.toISOString().split('T')[0];
        const formattedMaxDate = maxDate.toISOString().split('T')[0];

        // Set the min and max attributes of the date input to the formatted dates
        document.getElementById('dateofbirth').setAttribute('min', formattedMinDate);
        document.getElementById('dateofbirth').setAttribute('max', formattedMaxDate);
    })

    isElementLoaded("#height-div").then((height_div) => {
        height_div.querySelector("input").min = 0;
        addRadios(height_div, "cm", "inches", "height")
    })

    isElementLoaded("#weight-div").then((weight_div) => {
        weight_div.querySelector("input").min = 0;
        addRadios(weight_div, "kg", "pounds", "weight")
    })
    return info_form;
}

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

    let name = `${measurement}-unit`;

    input1.type = "radio";
    input1.id = value1;
    input1.name = name;
    input1.value = value1;
    input1.required = true;

    let label1 = document.createElement("label")
    label1.setAttribute("for", name);
    label1.innerHTML = value1;

    let input2 = document.createElement("input");
    input2.type = "radio";
    input2.id = value2
    input2.name = name;
    input2.value = value2

    let label2 = document.createElement("label")
    label2.setAttribute("for", name);
    label2.innerHTML = value2

    if (information[`${measurement}_unit`] == value1) {
        input1.checked = true;
    } else {
        input2.checked = true;
    }
    div.appendChild(input1);
    div.appendChild(label1);
    div.appendChild(input2);
    div.appendChild(label2);
}