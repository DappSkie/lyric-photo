const music = document.getElementById("music");
const startButton = document.getElementById("startButton");
const photo = document.getElementById("photo");
const lyric = document.getElementById("lyric");

const scenes = [
    {
        start: 0,
        image: "assets/01.jpg",
        lyric: "oh, golden boy you shined a light on your home"
    },
    {
        start: 5,
        image: "assets/02.jpg",
        lyric: "and at your best you were magic we were sold"
    },
    {
        start: 9,
        image: "assets/03.jpg",
        lyric: "but dont tell 'em what you told me don't even tell 'em that you know me"
    },
    {
        start: 14,
        image: "assets/04.jpg",
        lyric: "i would rather burn forever"
    },
    {
        start: 18,
        image: "assets/05.jpg",
        lyric: "but you should know that i died slow"
    },
    {
        start: 22,
        image: "assets/06.jpg",
        lyric: "running through the halls of your haunted home"
    },
    {
        start: 26,
        image: "assets/07.jpg",
        lyric: "and the toughest part is that we both know"
    },
    {
        start: 30,
        image: "assets/08.jpg",
        lyric: "what happened to you why you're out on your own"
    },
    {
        start: 36,
        image: "assets/09.jpg",
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

        photo.src = scenes[sceneIndex].image;
        lyric.textContent = scenes[sceneIndex].lyric;
    }
});
