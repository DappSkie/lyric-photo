const music = document.getElementById("music");
const startButton = document.getElementById("startButton");

startButton.addEventListener("click", async () => {
    try {
        await music.play();
        startButton.style.display = "none";
    } catch (error) {
        console.error("Audio gagal diputar:", error);
        alert("Musik gagal diputar. Cek file audio dan path-nya.");
    }
});
