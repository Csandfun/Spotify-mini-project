<script src="https://kit.fontawesome.com/d1cb4e802e.js" crossorigin="anonymous"></script>
console.log("welcome to spotify");
//Initiallize the variable
let songIndex=0;
let audioElement=new Audio("C:\Users\lenovo\Downloads\images\01 - Aabaad Barbaad.mp3");
let masterPlay=document.getElementById("masterPlay");
let myProgressBar=document.getElementById("myProgressBar");
let gif =document.getElementById("gif");
let  songs = [
    {songname:"abaad_barbaad",filepath:"C:\Users\lenovo\Downloads\images\01 - Kesariya (128 Kbps).mp3",coverpath:"C:\Users\lenovo\Downloads\images\cover1.jpg"},
    {songname:"abaad_barbaad",filepath: "C:\Users\lenovo\Downloads\images\01 - Aabaad Barbaad.mp3",coverpath:"C:\Users\lensovo\Downloads\images\cover1.jpg"},
    {songname:"abaad_barbaad",filepath:"C:\Users\lenovo\Downloads\images\01 - Aabaad Barbaad.mp3",coverpath:"C:\Users\lenovo\Downloads\images\cover1.jpg"},
    {songname:"abaad_barbaad",filepath:"C:\Users\lenovo\Downloads\images\01 - Aabaad Barbaad.mp3",coverpath:"C:\Users\lenovo\Downloads\images\cover1.jpg"},
    {songname:"abaad_barbaad",filepath:"C:\Users\lenovo\Downloads\images\01 - Aabaad Barbaad.mp3",coverpath:"C:\Users\lenovo\Downloads\images\cover1.jpg"},
    {songname:"abaad_barbaad",filepath:"C:\Users\lenovo\Downloads\images\01 - Aabaad Barbaad.mp3",coverpath:"C:\Users\lenovo\Downloads\images\cover1.jpg"},
]
//audioElement.play();
//handle play/pause click
masterPlay.addEventListener<'click'>('click',function(){
    if(audioElement.paused || currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
});
//listen to events
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    //update Seekbar
})