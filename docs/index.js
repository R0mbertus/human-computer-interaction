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

    const script = document.createElement("script");
    script.src = `pages/${pageName}.js`;
    element.appendChild(script);
}

// this function keeps checking if an element exists and returns that element
// if it does exist
async function isElementLoaded(element) {
    while (document.querySelector(element) === null) {
        await new Promise(resolve => requestAnimationFrame(resolve));
    }
    return document.querySelector(element);
};

// function to load in navbar if not present
function loadNavbar() {
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
}

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

var tasks = [{
    description: "Complete the sign-up",
    time: "",
    completion: "finish-button"
}, {
    description: "Update your settings",
    time: "",
    completion: "save-button"
}]

const randomPercentage = [
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100)
]

var exercises = [{
    muscleType: "abdominals",
    ID: "3oeimlA6s68",
    description: `No equipment needed for this 20 minute at home abs workout. These movements are all different each performed for 50 seconds, 10 seconds brief rest. This is a slow paced routine to really encourage that extra focus on lower back flat on mat and core braced throughout.`,
    comments: [ 
        { username: "user1", timestamp: "2023-03-10T08:00:00Z", text: "Great workout!" },
        { username: "user2", timestamp: "2023-03-11T09:30:00Z", text: "This was too easy for me." }
    ],
    difficulty: "",
    calories: ""
}, {
    muscleType: "biceps",
    ID: "KzZILhT_YvY",
    description: `This no repeat bicep blow up includes wide curls, cross body curls, palms up curls and my favourite; hammer curls. Along with variations of curls, there is tempo & range of motion variations and isometrics to really require a lot of work on the biceps.`,
    comments: [ 
        { username: "user1", timestamp: "2023-03-10T08:00:00Z", text: "Great workout!" },
        { username: "user2", timestamp: "2023-03-11T09:30:00Z", text: "This was too easy for me." }
    ],
    difficulty: "",
    calories: ""
}, {
    muscleType: "glutes",
    ID: "Q5VSWvZibpQ",
    description: `Here are Top 5 Glute Exercises that have helped transform and grow glutes. There is an explanation on how to perform each exercise in detail and what area it targets the most.`,
    comments: [ 
        { username: "user1", timestamp: "2023-03-10T08:00:00Z", text: "Great workout!" },
        { username: "user2", timestamp: "2023-03-11T09:30:00Z", text: "This was too easy for me." }
    ],
    difficulty: "",
    calories: ""
}, {
    muscleType: "hamstrings",
    ID: "N9_11gKQGqM",
    description: `Hamstrings, glutes, lower back and adductors all targeted in this 15 minute Romanian deadlift focused session! For this workout you will need a pair of dumbbells or one heavier dumbbell/barbell/kettlebell. The dumbbells used for reference are 15 kg each.`,
    comments: [ 
        { username: "user1", timestamp: "2023-03-10T08:00:00Z", text: "Great workout!" },
        { username: "user2", timestamp: "2023-03-11T09:30:00Z", text: "This was too easy for me." }
    ],
    difficulty: "",
    calories: ""
}, {
    muscleType: "biceps",
    ID: "gThC40XCHd4",
    description: `This biceps, triceps & shoulders workout is an upper body strength session that will have you feeling fierce. A little shorter, slower paced workout but the goal is to increase those weights and challenge yourself with heavier dumbbells.`,
    comments: [ 
        { username: "user1", timestamp: "2023-03-10T08:00:00Z", text: "Great workout!" },
        { username: "user2", timestamp: "2023-03-11T09:30:00Z", text: "This was too easy for me." }
    ],
    difficulty: "",
    calories: ""
}, {
    muscleType: "hamstrings",
    ID: "9N3kVU_tj7s",
    description: `This workout is just perfect as part of your at home training to tighten and strengthen your legs. Quality over quantity here is best and try to think about the hamstring muscles contracting or lengthening during them movements.`,
    comments: [ 
        { username: "user1", timestamp: "2023-03-10T08:00:00Z", text: "Great workout!" },
        { username: "user2", timestamp: "2023-03-11T09:30:00Z", text: "This was too easy for me." }
    ],
    difficulty: "",
    calories: ""
}, {
    muscleType: "abdominals",
    ID: "r57BaAtFPKc",
    description: `Target and activate your deep core muscles with this 10 minute home workout. Make sure to take a deep breathe in and tighten all your abdominal and core muscles. Keep that tension while doing these exercises. That's what makes it hard and effective!`,
    comments: [ 
        { username: "user1", timestamp: "2023-03-10T08:00:00Z", text: "Great workout!" },
        { username: "user2", timestamp: "2023-03-11T09:30:00Z", text: "This was too easy for me." }
    ],
    difficulty: "",
    calories: ""
}]

var foodList = [
    { name: "Apple", calories: 52, quantity: 0 },
    { name: "Banana", calories: 89, quantity: 0 },
    { name: "Orange", calories: 62, quantity: 0 },
    { name: "Grapes", calories: 69, quantity: 0 },
    { name: "Strawberry", calories: 33, quantity: 0 },
    { name: "Blueberry", calories: 57, quantity: 0 },
    { name: "Raspberry", calories: 52, quantity: 0 },
    { name: "Pineapple", calories: 82, quantity: 0 },
    { name: "Mango", calories: 99, quantity: 0 },
    { name: "Papaya", calories: 119, quantity: 0 },
    { name: "Watermelon", calories: 30, quantity: 0 },
    { name: "Kiwi", calories: 61, quantity: 0 },
    { name: "Peach", calories: 59, quantity: 0 },
    { name: "Plum", calories: 46, quantity: 0 },
    { name: "Cherry", calories: 50, quantity: 0 },];

let totalCalories = parseInt(0);

//Reusable code for info and settings
function getInfoForm() {
    const types = ["url", "text", "date", "number", "number"]
    const ids = ["pic", "name", "dateofbirth", "height", "weight"]
    const labels = ["Profile Pic", "Name", "DoB", "Height", "Weight"]

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
        (addRadios("cm", "inches", "height")).forEach((e) => height_div.appendChild(e));
    })

    isElementLoaded("#weight-div").then((weight_div) => {
        weight_div.querySelector("input").min = 0;
        (addRadios("kg", "pounds", "weight")).forEach((e) => weight_div.appendChild(e));
    })
    return info_form;

    function addRadios(value1, value2, measurement) {
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
        return [input1, label1, input2, label2];
    }
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

// Task List Code
isElementLoaded("#instructions").then((instructions) => {
    let p = document.createElement("p");
    p.innerHTML = `There are ${tasks.length} total tasks. Each task will have it's own timer and start button. Please press the start button and then complete the task. After it's complete, the next one will appear and so on. Once all of them are complete, a finish button will appear which will copy your times and  make the google form visible.`

    instructions.appendChild(p);

    for (let i = 0; i < tasks.length; i++) {
        let div = document.createElement("div");
        div.id = `task-${i}`;
        div.classList.add("hidden");
        let desc = document.createElement("p");
        desc.innerHTML = `${i + 1}. ${tasks[i].description}`;
        let button = document.createElement("button");
        button.innerHTML = "Start";
        let stopwatch = document.createElement("p")
        stopwatch.classList.add("timers");
        stopwatch.id = `task-${i}-timer`;
        stopwatch.innerHTML = "00:00:00";
        stopwatch.classList.add("hidden");
        button.addEventListener("click", () => {
            const startTime = new Date();
            button.remove();
            stopwatch.classList.remove("hidden");

            const intervalId = setInterval(function () {
                const endTime = new Date();
                updateStopwatch(stopwatch.id, startTime, endTime);
            }, 1000);

            isElementLoaded(`#${tasks[i].completion}`).then((completion) => {
                completion.addEventListener("click", () => {
                    clearInterval(intervalId);
                    tasks[i].time = stopwatch.innerHTML;
                    div.classList.add("completed");
                    if (i != tasks.length - 1) {
                        document.getElementById(`task-${i + 1}`).classList.remove("hidden");
                    } else {
                        let tasks_done = document.createElement("button");
                        tasks_done.innerHTML = "Finish";
                        tasks_done.addEventListener("click", () => {
                            tasks_done.remove();
                            let times = document.createElement("textarea");
                            instructions.appendChild(times);
                            times.value = tasks.map(object => object.time);
                            times.select();
                            document.execCommand("copy");
                            document.getElementById("gform").id = "";
                        });
                        instructions.appendChild(tasks_done);
                    }
                });
            });
        });
        div.appendChild(desc);
        div.appendChild(button);
        div.appendChild(stopwatch);
        instructions.appendChild(div)
    }

    document.getElementById(`task-0`).classList.remove("hidden");

    function updateStopwatch(id, startTime, endTime) {
        const diff = new Date(endTime - startTime);
        const hours = diff.getUTCHours().toString().padStart(2, '0');
        const minutes = diff.getUTCMinutes().toString().padStart(2, '0');
        const seconds = diff.getUTCSeconds().toString().padStart(2, '0');
        document.getElementById(id).textContent = `${hours}:${minutes}:${seconds}`;
    }
}) 
