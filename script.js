document.addEventListener("DOMContentLoaded", function() {
    var iframe = document.getElementById('vimeo-video');
    var player = new Vimeo.Player(iframe);

    player.on('ended', function() {
        // Pause the video when it ends
        player.pause().then(function() {
            console.log('Video paused after one loop.');
        }).catch(function(error) {
            console.error('Error pausing the video:', error);
        });
    });

    // Optionally log when the video starts playing
    player.on('play', function() {
        console.log('Video is playing');
    });
});
