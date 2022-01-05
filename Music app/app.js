const music = document.querySelector("audio");
const img = document.querySelector('img');
const play = document.getElementById('play');
const artist = document.getElementById('artist');
const title = document.getElementById('title');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let progress = document.getElementById("progress");
let tot_duration = document.getElementById('duration');
let current_time = document.getElementById('current_time');
const progress_div = document.getElementById("progress_div");

const songs = [
    {
        name:'bg2',
        title:'Matargasti',
        artist:'Mohit Chauhan',
    },
    {
        name:'bg1',
        title:'Lip to Lip',
        artist: 'Dev Negi',
    },
    {
        name:'bg3',
        title:'Ok Janu',
        artist:'A.R. Rahman'
    },
    {
        name:'bg4',
        title:'Khamosiyan',
        artist:'Arijit Singh'
    },
    {
        name:'bg5',
        title:'Kabhi Kabhi Aditi ki Zindagi',
        artist:'A.R. Rahman'
    },
    {
        name:'bg6',
        title:'Hey Ya!',
        artist:'Clinton Cerejo'
    },
    {
        name:'bg7',
        title:'Socha hai',
        artist:'Farhan Aktar'
    },
    {
        name:'bg8',
        title:'The Humma Song',
        artist:'Badshah, Jubin Nautiyal'
    },
    {
        name:'bg9',
        title:'Aunty Ji',
        artist:'Ash King'
    },
    {
        name:'bg10',
        title:'Nachde Ne Sare',
        artist:'Jasleen Royal'
    },
    {
        name:'bg11',
        title:'Hosanna',
        artist:'K.K.'
    },
    {
        name:'bg12',
        title:'Kya Karu o Ladies',
        artist:'Benny Dayal'
    },
    {
        name:'bg13',
        title:'Manali Trance',
        artist:'Yo Yo Honey Singh'
    },
    {
        name:'bg14',
        title:'Meharbani',
        artist:'Jubin Nautiyal'
    },
    {
        name:'bg15',
        title:'Sooraj Ki Baahon Mein',
        artist:'Clinton Cerejo'
    },
    
];

let isPlaying = false;

const playMusic =() =>{
    isPlaying = true; 
    music.play();
    play.classList.replace('fa-play',"fa-pause");
    img.classList.add("anime");
};
const pauseMusic =() =>{
    isPlaying = false; 
    music.pause();
    play.classList.replace("fa-pause","fa-play");
    img.classList.remove("anime");
};
play.addEventListener("click", () =>{
    if(isPlaying) {
        pauseMusic();
    }
    else{
        playMusic();
    }
});

const loadSong = (songs)=>{
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = " " + songs.name + ".mp3";
    img.src = "" + songs.name + ".jpg";


};

songIndex = 0;
const nextSong = () => {
    songIndex = (songIndex + 1)%songs.length;
    loadSong(songs[songIndex]);
    playMusic();
    

};
const prevSong = () => {
    songIndex = (songIndex - 1 + songs.length)%songs.length;
    loadSong(songs[songIndex]);
    playMusic();
    

};

music.addEventListener("timeupdate", (event)=> {
    //console.log(event);
    const {currentTime, duration} = event.srcElement;
    let progress_time = (currentTime / duration)*100;
    progress.style.width = `${progress_time}%`;
    console.log(duration);
    let min_duration = Math.floor(duration/60);
    let sec_duration = Math.floor(duration%60);
    let total_duration = `${min_duration}:${sec_duration}`;
    if(duration){
        tot_duration.textContent = `${total_duration}` ;

    }

    let min_currentTime = Math.floor(currentTime/60);
    let sec_currentTime = Math.floor(currentTime%60);
   
    if(sec_currentTime < 10){
        sec_currentTime = `0${sec_currentTime}`;
    }
    let total_currentTime = `${min_currentTime}:${sec_currentTime}`;  
    current_time.textContent = `${total_currentTime}` ;
    music.addEventListener("ended", nextSong);
    

});
progress_div.addEventListener("click", (event) =>{
    console.log(event);
    const {duration} = music;
    let move_progress = 
      (event.offsetX / event.srcElement.clientWidth)*duration;
     // console.log(duration);
     // console.log(move_progress);
    music.currentTime = move_progress;
    
    
});
next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);