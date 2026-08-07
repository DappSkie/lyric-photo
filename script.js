// Array Lirik + Timestamp (detik) + Foto
const syncData = [
  { time: 0, lyric: "🎵 (Intro Musik)", image: "assets/photo1.jpg" },
  { time: 5, lyric: "Di suatu malam yang sunyi...", image: "assets/photo1.jpg" },
  { time: 10, lyric: "Kutatap bintang di angkasa", image: "assets/photo2.jpg" },
  { time: 16, lyric: "Mengingat senyummu yang indah", image: "assets/photo3.jpg" },
  { time: 22, lyric: "Yang tak pernah pudar...", image: "assets/photo1.jpg" }
];

const audio = document.getElementById("audio-player");
const lyricText = document.getElementById("lyric-text");
const bgPhoto = document.getElementById("bg-photo");

let currentIndex = -1;

// EventListener yang berjalan setiap detik audio berputar
audio.addEventListener("timeupdate", () => {
  const currentTime = audio.currentTime;

  // Cari lirik mana yang cocok dengan detik sekarang
  let activeIndex = -1;
  for (let i = 0; i < syncData.length; i++) {
    if (currentTime >= syncData[i].time) {
      activeIndex = i;
    } else {
      break;
    }
  }

  // Jika waktu masuk ke baris lirik baru
  if (activeIndex !== -1 && activeIndex !== currentIndex) {
    currentIndex = activeIndex;
    updateDisplay(syncData[currentIndex]);
  }
});

function updateDisplay(data) {
  // Transisi Teks Lirik
  lyricText.classList.add("lyric-fade");
  
  setTimeout(() => {
    lyricText.textContent = data.lyric;
    lyricText.classList.remove("lyric-fade");
  }, 200);

  // Transisi Foto Background
  bgPhoto.style.backgroundImage = `url('${data.image}')`;
  
  // Reset animasi zoom lembut khas video editing
  bgPhoto.classList.remove("zoom");
  void bgPhoto.offsetWidth; // Force reflow JS
  bgPhoto.classList.add("zoom");
}
