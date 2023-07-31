console.log("capacity of 1");
//initialize the variables
let songIndex = 0;
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myprogresbar");
let prevplay = document.querySelector("#prev");
let nextplay = document.querySelector("#next");
let gif = document.querySelector("#gif");
let songItems=Array.from(document.querySelector(".songItem"));
let songs = [
  {
    songName: "maan meri jan",
    filePath: "./song/Maan Meri Jaan(PagalWorld.com.se).mp3",
    coverPath: "./cover_img/king_cover.jpg",
  },
  {
    songName: "kahani suno",
    filePath: "./song/Kahani Suno(PagalWorld.com.se).mp3",
    coverPath: "./cover_img/khani_cover.jpg",
  },
  {
    songName: "char botel",
    filePath: "song/Teri Meri.mp3",
    coverPath: "img2c.jpg",
  },
  {
    songName: "desi kalkakar",
    filePath: "song/Teri Meri.mp3",
    coverPath: "img2c.jpg",
  },
  {
    songName: "company",
    filePath: "song/Teri Meri.mp3",
    coverPath: "img2c.jpg",
  },
  {
    songName: "Borbadia",
    filePath: "song/Teri Meri.mp3",
    coverPath: "img2c.jpg",
  },
];

//for each use to return the funcation so we are using this function ...
songItems.forEach((element, i)=>{ 
  element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
// let songSize=songs.length;
// let currentSong=0
let currentSong = 0;
let audioElement = new Audio(songs[currentSong].filePath);
//audioElement play----
//handle paly pause click---
//here,musterplay is a id...so we can call the musterpaly query

masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime >= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});

//listen evenets
audioElement.addEventListener("timeupdate", () => {
  
  //update sickbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  
  myProgressBar.value = progress;
});
myProgressBar.addEventListener('change',()=>{
audioElement.currentTime=myProgressBar.value * audioElement.duration/100;
});

Array.from(Document.getElementsByClassName('songItemPlay')).forEach

document.getElementById("next").addEventListener("click",()=>{
  if(songIndex<=0)

})