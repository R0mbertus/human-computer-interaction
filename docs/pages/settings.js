isElementLoaded("#settings").then((settings) => {
    loadNavbar();

    let image = document.createElement("img");
    image.id = "profile-pic";
    image.alt = "profile pic"

    let greeting = document.createElement("p");
    greeting.id = "greeting";

    let settings_form = getInfoForm();

    const store = document.createElement("button");
    store.id = "save-button";
    store.innerHTML = "Store";
    settings_form.appendChild(store);
    store.addEventListener('click', (e) => {
        if (settings_form.checkValidity()) {
            e.preventDefault();
            console.log(`${document.getElementById("name").value}, ${information.name}`);
            console.log(tasks[4].completion);
            if (tasks[4].completion == false && (document.getElementById("name").value != information.name)) {
                let task_5 = document.getElementById(`task-5`);
                clearInterval(tasks[4].intervalId);
                tasks[4].time = task_5.querySelector('#task-5-timer').innerHTML;
                task_5.classList.add("completed");
                tasks[4].completion = true;

                let instructions = document.getElementById("instructions");
                let tasks_done = document.createElement("button");
                tasks_done.innerHTML = "Finish";
                tasks_done.id = "finish-button";
                tasks_done.addEventListener("click", () => {
                    tasks_done.remove();
                    let times = document.createElement("textarea");
                    instructions.appendChild(times);
                    times.value = tasks.map(object => object.time);
                    times.select();
                    document.execCommand("copy");
                    document.getElementById("gform").classList.remove("hidden");
                });
                instructions.appendChild(tasks_done);
            }

            saveInfo();
            updateContent();
        }
    });

    updateContent();
    settings.appendChild(image);
    settings.appendChild(greeting);
    settings.appendChild(settings_form)
    settings_form.classList.add("box-style")

    function updateContent() {
        greeting.innerHTML = `Hello, ${information.name}!`;
        if (information.pic != "") {
            image.src = information.pic;
        }
        else {
            image.src = "images/default-profile.jpeg";
        }
    }
});