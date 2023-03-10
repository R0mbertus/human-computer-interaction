isElementLoaded("#video-container").then((videoContainer) => {
    loadNavbar();

    for (let i = 0; i < exercises.length; i++) {
        const videoDiv = document.createElement("div");
        videoDiv.classList.add("video", exercises[i].muscleType);
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
        back_button.id = "info-back";
        back_button.innerHTML = "<";

        back_button.addEventListener('click', (e) => {
            loadPage("exercises");
        });
        
        let video = document.createElement("iframe");
        video.src = `https://www.youtube.com/embed/${exercise.ID}`
        video.id = exercise.ID;

        page.appendChild(back_button);
        page.appendChild(video);

    }
});
