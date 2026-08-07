const music = document.getElementById("music");
const startButton = document.getElementById("startButton");
const photo = document.getElementById("photo");
const lyric = document.getElementById("lyric");

const scenes = [
    {
        start: 0,
        image: "assets/foto1.jpg",
        lyric: "oh, golden boy you shined a light on your home"
    },
    {
        start: 5,
        image: "assets/foto2.jpg",
        lyric: "and at your best you were magic we were sold"
    },
    {
        start: 9,
        image: "assets/foto3.jpg",
        lyric: "but dont tell 'em what you told me don't even tell 'em that you know me"
    },
    {
        start: 14,
        image: "assets/foto4.jpg",
        lyric: "i would rather burn forever"
    },
    {
        start: 18,
        image: "assets/foto5.jpg",
        lyric: "but you should know that i died slow"
    },
    {
        start: 22,
        image: "assets/foto6.jpg",
        lyric: "running through the halls of your haunted home"
    },
    {
        start: 26,
        image: "assets/foto7.jpg",
        lyric: "and the toughest part is that we both know"
    },
    {
        start: 30,
        image: "assets/foto8.jpg",
        lyric: "what happened to you why you're out on your own"
    },
    {
        start: 36,
        image: "assets/foto9.jpg",
        lyric: "merry christmas, please don't call"
    }
];

let currentScene = -1;

startButton.addEventListener("click", async () => {
    try {
        await music.play();
        startButton.style.display = "none";
    } catch (error) {
        console.error("Audio gagal diputar:", error);
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

        photo.classList.remove("slide");

    void photo.offsetWidth;

    photo.src = scenes[sceneIndex].image;

    photo.classList.add("slide");

    lyric.classList.remove("show");

    void lyric.offsetWidth;

    lyric.textContent = scenes[sceneIndex].lyric;

    lyric.classList.add("show");
    }
});
