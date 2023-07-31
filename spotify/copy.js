console.log("capacity of 1")
//initialize the variables 
let songIndex=0;
let masterPlay=document.getElementById("masterPlay");
let myprogresbar=document.getElementById("myprogresbar");
let prevplay=document.querySelector("#prev");
let nextplay=document.querySelector("#next");
let songItems=document.querySelector("songItem")
let songs =[
    {songName: "desi kalkakar", filePath: "./song/Teri Meri.mp3", coverPath:"img2c.jpg"},
    {songName: "desi kalkakar", filePath: "song/Teri Meri.mp3", coverPath:"img2c.jpg"},
    {songName: "desi kalkakar", filePath: "song/Teri Meri.mp3", coverPath:"img2c.jpg"},
    {songName: "desi kalkakar", filePath: "song/Teri Meri.mp3", coverPath:"img2c.jpg"},
    {songName: "desi kalkakar", filePath: "song/Teri Meri.mp3", coverPath:"img2c.jpg"},
    {songName: "desi kalkakar", filePath: "song/Teri Meri.mp3", coverPath:"img2c.jpg"}

]

//for each use to return the funcation so we are using this function ...
songItems.array.forEach((element) => {
   element.getElementByTagName("img")[0].src=songs[i].filePath;
});
let songSize=songs.length;
let currentSong=0
let audioElement=new Audio(songs[currentSong].filePath);
//audioElement play----
//handle paly pause click---
//here,musterplay is a id...so we can call the musterpaly query

masterPlay.addEventListener("click",()=>{
    if(audioElement.paused || audioElement.currentTime>=0){
        audioElement.play();
    }
    else{
        audioElement.pause()
    }
})
prevplay.addEventListener("click",()=>{currentSong=(currentSong-1)%songSize
    audioElement.pause()
    console.log(currentSong)
    audioElement=new Audio(songs[currentSong].filePath);
    audioElement.play();
})
nextplay.addEventListener("click",()=>{
    if (currentSong<0){
        currentSong=songSize-1
    }
    else{
        currentSong=currentSong-1
    }
    audioElement=Audio(songs[currentSong].filePath);
    })





//listen evenets 
myprogresbar.addEventListener("timeupdate",()=>{
    console.log("time update..")

})