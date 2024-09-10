document.addEventListener("click", function () {
  const video = document.getElementById("myVideo");
  video.style.display = "block"; // Make the video visible
  video.style.width = "100%"; // Set width to 100%
  video.style.height = "100%"; // Set height to 100%
  video.muted = true;
  video
    .play()
    .then(() => {
      video.muted = false; // Unmute the video after starting
    })
    .catch((error) => {
      // Handle autoplay restriction error
      console.log("Autoplay was prevented:", error);
    });
});
