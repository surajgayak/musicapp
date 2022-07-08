const ok = document.querySelector("#play");
const audios = document.querySelector("audio");
const rotate = document.querySelector(".anime");
const nigga = document.querySelector("#images");
const title = document.querySelector("#title");
const artist = document.querySelector("#artist");
const img = document.querySelector("img");
const ford = document.getElementById("#forward");
const back = document.getElementById("#backward");
const progress = document.querySelector(".progressess");
const ctime = document.getElementById("current-time");
const pbar = document.querySelector(".progressbar");
const ttime = document.getElementById("total-time");
//array of objects
const songs = [
  {
    name: "risauneyvaya",
    title: "RISAUNEY VAYA",
    artist: "Suraj Gayak",
  },
  {
    name: "katakatachau",
    title: "KATA KATA CHAU",
    artist: "Suraj Gayak",
  },
  {
    name: "mangomaya",
    title: "MAHANGO MAYA",
    artist: "Suraj Gayak",
  },
  {
    name: "janadeumaya",
    title: "Maya",
    artist: "Suraj Gayak",
  },
  {
    name: "galapukka",
    title: "GALAPUKKA",
    artist: "Sujan Chapagain",
  },
  {
    name: "maya",
    title: "MAYALU",
    artist: "Bikki Gurung",
  },
  {
    name: "djsnake",
    title: "WORKOUT MUSIC",
    artist: "mixed",
  },
  {
    name: "lakhau",
    title: "LAKHAU",
    artist: "Yabesh Thapa",
  },
  {
    name: "marijau",
    title: "MARI JAU",
    artist: "Bikki Gurung",
  },
];
var playIng = false;
// for changing the middle button to play and pause
const playMusic = () => {
  playIng = true;
  audios.play();
  ok.classList.replace("fa-play", "fa-pause");
  nigga.classList.add("anime");
};
const pauseMusic = () => {
  playIng = false;
  audios.pause();
  ok.classList.replace("fa-pause", "fa-play");
  nigga.classList.remove("anime");
};
ok.addEventListener("click", () => {
  if (playIng) {
    pauseMusic();
  } else {
    playMusic();
  }
});
// to change the title,artist music and images
const songLoad = (songs) => {
  title.textContent = songs.title;
  artist.textContent = songs.artist;
  audios.src = `${songs.name}.mp3`;
  img.src = `${songs.name}.jpg`;
};
// for forward and backward
songIndex = 0;
function forward() {
  songIndex = (songIndex + 1) % songs.length;
  songLoad(songs[songIndex]);
  playMusic();
}

function prev() {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  songLoad(songs[songIndex]);
  playMusic();
}
// for time event and progress bar
audios.addEventListener("timeupdate", (event) => {
  const { currentTime, duration } = event.target; //OBJECT DESTUCTURING
  const changeBar = (currentTime / duration) * 100;
  progress.style.width = `${changeBar}%`;

  let min_duration = Math.floor(duration / 60);
  let tot_duration = Math.floor(duration % 60);
  let total_duration = `${min_duration}:${tot_duration}`;
  if (duration) {
    ttime.textContent = `${total_duration}`;
  }
  let min_currentTime = Math.floor(currentTime / 60);
  let tot_currentTime = Math.floor(currentTime % 60);

  if (tot_currentTime < 10) {
    tot_currentTime = `0${tot_currentTime}`;
  }
  let total_currentTime = `${min_currentTime}:${tot_currentTime}`;
  ctime.textContent = `${total_currentTime}`;
});
//clicking the  bar it starts from there
pbar.addEventListener("click", (event) => {
  const { duration } = audios; //object destucturing.
  let movbar = (event.offsetX / event.target.clientWidth) * duration;
  audios.currentTime = movbar;
});

newFunction();

function newFunction() {
  audios.addEventListener("ended", forward);
}
