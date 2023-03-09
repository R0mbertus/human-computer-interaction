const select = document.getElementById('muscles');
const videos = document.querySelectorAll('.video');

select.addEventListener('change', function() {
    const selectedValue = this.value;
    videos.forEach(function(video) {
        video.style.display = 'none';
    });

    if (selectedValue === 'abdominals') {
        document.getElementById('abdominals').style.display = 'flex';
    } else if (selectedValue === 'biceps') {
        document.getElementById('biceps').style.display = 'flex';
        document.getElementById('biceps2').style.display = 'flex';
    } else if (selectedValue === 'glutes') {
        document.getElementById('glutes').style.display = 'flex';
    } else if (selectedValue === 'hamstrings') {
        document.getElementById('hamstrings').style.display = 'flex';
    } else if (selectedValue === '') {
        videos.forEach(function(video) {
            video.style.display = 'flex';
        });
    }
});
