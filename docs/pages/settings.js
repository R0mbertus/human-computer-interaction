var types = ["url", "text", "date", "number", "number"];
var ids = ["pic", "name", "dateofbirth", "height", "weight"];
var labels = ["Profile Pic", "Name", "DoB", "Height", "Weight"];

isElementLoaded("#settings").then((settings) => {
    imageAndGreet();

    isElementLoaded("#settings-form").then((form) => {
        for (var i = 0; i < types.length; i++) {
            var div = document.createElement("div");
            div.id = `${ids[i]}-div`
            
            var label = document.createElement("label")
            label.setAttribute("for", ids[i]);
            label.innerHTML = labels[i];

            var input = document.createElement("input");
            input.type = types[i];
            input.id = ids[i];
            input.required = true;

            div.appendChild(label);
            div.appendChild(input);
            form.appendChild(div);
        }

        isElementLoaded("#pic").then((url_input) => {
            url_input.value = information.pic;
            url_input.removeAttribute("required");
        });

        isElementLoaded("#name").then((name_input) => {
            name_input.value = information.name;
        });
    
        isElementLoaded("#dateofbirth-div").then((date_div) => {
            date_div.firstElementChild.innerHTML = '<abbr title="Date of Birth">DoB</abbr>'

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

            date_div.querySelector("input").value = information.dateofbirth;
        });
    
        isElementLoaded("#height-div").then((height_div) => {
            const height = height_div.querySelector("input");
            height.min = 0;
            height.value = information.height;
            addRadios(height_div, "cm", "inches", "height");
            document.querySelector(`#${information.height_unit}`).checked = true;

        });
        
        isElementLoaded("#weight-div").then((weight_div) => {
            const weight = weight_div.querySelector("input");
            weight.min = 0;
            weight.value = information.weight;
            addRadios(weight_div, "kg", "pounds", "weight");
            document.querySelector(`#${information.weight_unit}`).checked = true;
        });

        const store = document.createElement("button");
        store.id = "save-button";
        store.innerHTML = "Store";
        form.appendChild(store);

        store.addEventListener('click', (e) => {
            if (form.checkValidity()) {
                e.preventDefault();
                saveInfo();
                imageAndGreet();
            }
        });
    });
});

function imageAndGreet() {
    isElementLoaded("#greeting").then((greeting) => {
        greeting.textContent = `Hello, ${information.name}!`;
    });
    
    isElementLoaded("#profile-pic").then((image) => {
        if (information.pic != "") {
            image.src = information.pic;
        }
        else {
            image.src = "images/default-profile.jpeg";
        }
    });
}

function addRadios(div, value1, value2, measurement) {
    var input1 = document.createElement("input");
    input1.type = "radio";
    input1.id = value1;
    input1.name = `${measurement}-unit`;
    input1.value = value1;
    input1.required = true;
    var label1 = document.createElement("label")
    label1.setAttribute("for", `${measurement}-unit`);
    label1.innerHTML = value1;

    var input2 = document.createElement("input");
    input2.type = "radio";
    input2.id = value2
    input2.name = `${measurement}-unit`;
    input2.value = value2
    var label2 = document.createElement("label")
    label2.setAttribute("for", `${measurement}-unit`);
    label2.innerHTML = value2

    div.appendChild(input1);
    div.appendChild(label1);
    div.appendChild(input2);
    div.appendChild(label2);
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
