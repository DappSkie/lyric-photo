const music = document.getElementById("music");
const startButton = document.getElementById("startButton");
const photo = document.getElementById("photo");
const lyric = document.getElementById("lyric");

const scenes = [
    { start: 0,  image: "assets/01.jpg", lyric: "LIRIK 1" },
    { start: 5,  image: "assets/02.jpg", lyric: "LIRIK 2" },
    { start: 9,  image: "assets/03.jpg", lyric: "LIRIK 3" },
    { start: 14, image: "assets/04.jpg", lyric: "LIRIK 4" },
    { start: 18, image: "assets/05.jpg", lyric: "LIRIK 5" },
    { start: 22, image: "assets/06.jpg", lyric: "LIRIK 6" },
    { start: 26, image: "assets/07.jpg", lyric: "LIRIK 7" },
    { start: 30, image: "assets/08.jpg", lyric: "LIRIK 8" },
    { start: 36, image: "assets/09.jpg", lyric: "LIRIK 9" }
];

let currentScene = -1;

startButton.addEventListener("click", async () => {
    try {
        await music.play();
        startButton.style.display = "none";
    } catch (error) {
        console.error("Audio gagal:", error);
    }
});

music.addEventListener("timeupdate", () => {
    const currentTime = music.currentTime;

    let sceneIndex = -1;

    for (let i = 0; i < scenes.length; i++) {
        if (currentTime >= scenes[i].start) {
            sceneIndex = i;
        }
    }

    if (sceneIndex !== currentScene && sceneIndex !== -1) {
        currentScene = sceneIndex;

        photo.src = scenes[sceneIndex].image;
        lyric.textContent = scenes[sceneIndex].lyric;
    }
});
