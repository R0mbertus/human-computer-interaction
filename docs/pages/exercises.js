isElementLoaded("#video-container").then((videoContainer) => {
    var muscleTypes = ["abdominals", "biceps", "glutes", "hamstrings", "biceps",];
    var videoIDs = ["3oeimlA6s68", "KzZILhT_YvY", "Q5VSWvZibpQ", "N9_11gKQGqM", "gThC40XCHd4",];
    var videoDescriptions = [
        `No equipment needed for this 20 minute at home abs workout.
        These movements are all different each performed for 50 seconds, 10 seconds brief rest. This is a slow paced
        routine to really encourage that extra focus on lower back flat on mat and core braced throughout.`,
        `This no repeat bicep blow up includes wide curls, cross body curls, palms up curls and my favourite; hammer
        curls. Along with variations of curls, there is tempo & range of motion variations and isometrics to really
        require a lot of work on the biceps.`,
        `Here are Top 5 Glute Exercises that have helped transform and grow glutes. There is an explanation on how to
        perform each exercise in detail and what area it targets the most.`,
        `Hamstrings, glutes, lower back and adductors all targeted in this 15 minute Romanian deadlift focused session!
        For this workout you will need a pair of dumbbells or one heavier dumbbell/barbell/kettlebell. The dumbbells used
        for reference are 15 kg each.`,
        `This biceps, triceps & shoulders workout is an upper body strength session that will have you feeling fierce. A
        little shorter, slower paced workout but the goal is to increase those weights and challenge yourself with
        heavier
        dumbbells.`,
    ];

    for (const index in muscleTypes) {
        const videoDiv = document.createElement("div");
        videoDiv.classList.add("video", muscleTypes[index]);
        videoDiv.innerHTML = `
            <image src="https://img.youtube.com/vi/${videoIDs[index]}/hqdefault.jpg" alt="Video Thumbnail"</image>
            <p>${videoDescriptions[index]}</p>
        `;
        videoContainer.appendChild(videoDiv);
    }

    const filter = document.getElementById('muscles');
    const videos = document.querySelectorAll('.video');

    filter.addEventListener('change', function() {
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
            videos.forEach(function(video) {
                video.style.display = 'flex';
            });
        }        
    });
});
