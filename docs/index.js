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
    height_unit: "",
    weight: "",
    weight_unit: "",
}

var goals = {
    checked: [false, false, false, false],
    steps: "",
    minutes: "",
    calories: "",
    weight: ""
}