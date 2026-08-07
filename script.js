const music = document.getElementById("music");
const startButton = document.getElementById("startButton");

startButton.addEventListener("click", () => {
    music.play();
    startButton.style.display = "none";
});