isElementLoaded("#video-container").then((videoContainer) => {
    loadNavbar();

    for (let i = 0; i < exercises.length; i++) {
        const videoDiv = document.createElement("div");
        videoDiv.classList.add("video", exercises[i].muscleType, "box-style");
        videoDiv.innerHTML = `
            <image src="https://img.youtube.com/vi/${exercises[i].ID}/hqdefault.jpg" alt="Video Thumbnail"</image>
            <p>${exercises[i].description}</p>
        `;
        videoDiv.addEventListener("click", () => { createPage(exercises[i]) });
        videoContainer.appendChild(videoDiv);
    }

    const filter = document.getElementById('muscles');
    const videos = document.querySelectorAll('.video');

    filter.addEventListener('change', function () {
        if (this.value != '') {
            videos.forEach((video) => {
                video.style.display = 'none';
            });

            const selectedVideos = document.querySelectorAll(`.${this.value}`);
            selectedVideos.forEach((video) => {
                video.style.display = "flex";
            })
        }
        else {
            videos.forEach(function (video) {
                video.style.display = 'flex';
            });
        }
    });

    function createPage(exercise) {
        let page = document.getElementById("exercises");
        page.innerHTML = "";
        let back_button = document.createElement("button");
        back_button.classList.add("box-style");
        back_button.classList.add("back-button");
        back_button.innerHTML = "<";

        back_button.addEventListener('click', (e) => {
            loadPage("exercises");
        });

        let video = document.createElement("iframe");
        video.src = `https://www.youtube.com/embed/${exercise.ID}?&mute=1`
        video.id = exercise.ID;

        let difficulty = document.createElement("p");
        difficulty.innerHTML = `Difficulty: ${exercise.difficulty}`;

        let calories = document.createElement("p");
        calories.innerHTML = `Calories Burned: ${exercise.calories}`;

        let description = document.createElement("p");
        description.innerHTML = exercise.description;
        description.setAttribute("id", "description");

        let comment_header = document.createElement("h3");
        comment_header.innerHTML = "Comments";

        let comments_container = document.createElement("div");
        comments_container.classList.add("comments-container");
        comments_container.classList.add("box-style");
        comments_container.appendChild(comment_header);

        for (let comment of exercise.comments) {
            let comment_div = document.createElement("div");
            comment_div.classList.add("comment");

            let username = document.createElement("p");
            username.innerHTML = comment.username;
            username.classList.add("username");

            let timestamp = document.createElement("p");
            timestamp.innerHTML = new Date(comment.timestamp).toLocaleString();
            timestamp.classList.add("timestamp");

            let text = document.createElement("p");
            text.innerHTML = comment.text;
            text.classList.add("comment-text");

            comment_div.appendChild(username);
            comment_div.appendChild(timestamp);
            comment_div.appendChild(text);
            comments_container.appendChild(comment_div);
        }

        page.appendChild(back_button);
        page.appendChild(video);
        page.appendChild(difficulty);
        page.appendChild(calories);
        page.appendChild(description);
        page.appendChild(comments_container);

        if (tasks[2].completion == false && exercise.ID == "Q5VSWvZibpQ") {
            let task_3 = document.getElementById(`task-3`);
            let button = document.createElement("button");
            button.innerHTML = "Click me to complete!";
            page.insertBefore(button, page.children[4])
            button.addEventListener("click", () => {
                button.remove();
                clearInterval([tasks[2].intervalId]);
                tasks[2].time = task_3.querySelector('#task-3-timer').innerHTML;
                task_3.classList.add("completed");
                document.getElementById(`task-4`).classList.remove("hidden");
                addBlocker();
                tasks[2].completion = true;
                tasks[3].completion = false;
            })
        }

    }
});
