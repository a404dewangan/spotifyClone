const songs = [
  { title: "Teri Jhalak asharfi", duration: "06:09", file: "songs/6.mp3" },
  { title: "Saami Saami", duration: "04:31", file: "songs/7.mp3" },
  { title: "Pal(arijit singh)", duration: "04:46", file: "songs/8.mp3" },
  { title: "Ajab Si", duration: "04:06", file: "songs/9.mp3" },
  { title: "Satranga", duration: "04:06", file: "songs/1.mp3" },
  { title: "Chal Tere Ishq Mein", duration: "04:06", file: "songs/2.mp3" },
  { title: "Hua Main", duration: "04:06", file: "songs/3.mp3" },
  { title: "Udd Jaa Kaale Kaava", duration: "04:06", file: "songs/5.mp3" },
];

const playlist = document.getElementById("playlist");
const audioPlayer = document.getElementById("audioPlayer");

songs.forEach(song => {
  const li = document.createElement("li");
  li.className = "song";
  li.innerHTML = `
    <span class="song-title">${song.title}</span>
    <span class="song-duration">${song.duration}</span>
  `;
  li.addEventListener("click", () => {
    audioPlayer.src = song.file;
    audioPlayer.play();
  });
  playlist.appendChild(li);
});