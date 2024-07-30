console.log("JavaScript file is linked");

//Variables
const theIcons = document.querySelectorAll("#music-container img");
const dropBoard = document.querySelector(".drop-board");
const dropZone = document.querySelectorAll(".drop-zone");
const iconHolder = document.querySelector("#music-container");
const audioElement = document.querySelector("#audioElement");
let draggedIcon;

function loadAudio(icon) {
    let currentSrc = `audio/${icon.dataset.trackref}.mp3`;
    audioElement.src = currentSrc;
    audioElement.load();
}

function playSound() {
    audioElement.play();
}

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
        loadAudio(draggedIcon)
        playSound();
    }
}

// Functions for audio


// Event Listeners
theIcons.forEach(icon => icon.addEventListener("dragstart", handeStartDrag));
dropZone.forEach(zone => zone.addEventListener("dragover", handleOver));
dropZone.forEach(zone => zone.addEventListener("drop", handleDrop));


