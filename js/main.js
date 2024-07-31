console.log("JavaScript file is linked");

//Variables
const theIcons = document.querySelectorAll("#music-container img");
const dropBoard = document.querySelector(".drop-board");
const dropZone = document.querySelectorAll(".drop-zone");
const iconHolder = document.querySelectorAll("#music-container");
const audioElement = document.querySelector("#audioElement");
const playButton = document.querySelector(".playButton");
const rewindButton = document.querySelector(".rewindButton");
const pauseButton = document.querySelector(".pauseButton");
const volumeSlider = document.querySelector("#volumeControl");
let draggedIcon;


// Functions for drag & drop
function handeStartDrag() {
    console.log(`started dragging ${this}`);
    draggedIcon = this;
}

function handleOver(e) {
    e.preventDefault();
    console.log("dragged over");
}

function handleDrop() {
    if (this.children.length >=1){
        return;
    }
    else {
        this.appendChild(draggedIcon);
        loadAudioPlaySound(draggedIcon, this);
    }
}

// Functions for loading & playing audio
function loadAudioPlaySound(icon, dropZone) {
    let audioElement = document.createElement('audio');
    let currentSrc = `audio/${icon.dataset.trackref}.mp3`;
    audioElement.src = currentSrc;
    audioElement.load();
    audioElement.play();
    dropZone.appendChild(audioElement);
}

// Functions for audio controls
function playAudios() { 
    const audioElements = document.querySelectorAll(".drop-zone audio");
    audioElements.forEach(audio => audio.play()); 
}

function restartAudios() { 
    const audioElements = document.querySelectorAll(".drop-zone audio");
    audioElements.forEach(audio => {
        audio.currentTime = 0;
        audio.play();
    })
}

function pauseAudios() { 
    const audioElements = document.querySelectorAll(".drop-zone audio");
    audioElements.forEach(audio => audio.pause());
}

function changeVolume() {
    let volume = this.value/100;
    const audioElements = document.querySelectorAll(".drop-zone audio");
    audioElements.forEach(audio => audio.volume = volume);
}

// Event Listeners
theIcons.forEach(icon => icon.addEventListener("dragstart", handeStartDrag));
dropZone.forEach(zone => zone.addEventListener("dragover", handleOver));
dropZone.forEach(zone => zone.addEventListener("drop", handleDrop));
 
playButton.addEventListener("click", playAudios);
rewindButton.addEventListener("click", restartAudios);
pauseButton.addEventListener("click", pauseAudios);
volumeSlider.addEventListener("change", changeVolume);
