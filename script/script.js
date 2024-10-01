let currentIndex = 0;
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    function showNextSlide() {
        currentIndex++;
        if (currentIndex === totalSlides) {
            currentIndex = 0;
        }
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    setInterval(showNextSlide, 5000);

     // JavaScript to Handle Video Playback
     const videoPlayer = document.getElementById("videoPlayer");
     const videoSources = [
         "videos/v1.mp4", // Replace with your first video URL/path
         "videos/v3.mp4", // Replace with your second video URL/path
         "videos/v2.mp4",  // Replace with your third video URL/path
         "videos/v1.mp4",  // Replace with your third video URL/path
         "videos/v3.mp4",  // Replace with your third video URL/path
         "videos/v2.mp4"  // Replace with your third video URL/path
     ];
     
     let currentVideoIndex = 0;
 
     // Event Listener for 'ended' Event
     videoPlayer.addEventListener("ended", () => {
         currentVideoIndex++;
         if (currentVideoIndex < videoSources.length) {
             videoPlayer.src = videoSources[currentVideoIndex];
             videoPlayer.play();
         }
     });
 
     // Optional: Playlist Click Functionality
     document.querySelectorAll("#videoList li").forEach((item, index) => {
         item.addEventListener("click", () => {
             currentVideoIndex = index;
             videoPlayer.src = videoSources[currentVideoIndex];
             videoPlayer.play();
         });
     });