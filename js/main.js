console.log("JavaScript fileis linked");

//Variables
const theIcons = document.querySelectorAll("#music-container img");
const dropBoard = document.querySelector(".drop-board");
const dropZone = document.querySelectorAll(".drop-zone");
const iconHolder = document.querySelector("#music-container");
let draggedIcon;

//Functions
function handeStartDrag() {
    console.log(`started dragging ${this}`);
    draggedPiece = this;
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
        this.appendChild(draggedPiece);
    }
}

//Event Listeners
theIcons.forEach(icon => icon.addEventListener("dragstart", handeStartDrag));
dropZone.forEach(zone => zone.addEventListener("dragover", handleOver));
dropZone.forEach(zone => zone.addEventListener("drop", handleDrop));
