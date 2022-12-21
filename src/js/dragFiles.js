const dragContainer = document.querySelector(".drag-container");
const result = document.querySelector(".result");
const input = document.querySelector(".input-files");

dragContainer.addEventListener("drop", drop);
dragContainer.addEventListener("dragover", dragover);
dragContainer.addEventListener("dragleave", dragleave);
input.addEventListener("change", change)


function dragover(e) {
    this.style.backgroundColor = "white";
    e.preventDefault();
}

function drop(e) {
    e.preventDefault();
    let data = e.dataTransfer;
    let files = data.files;
    this.style.backgroundColor = "#D9D9D9";
    let img = document.createElement('img');
    img.src = '../../../images/draggedFile.svg';
    result.appendChild(img);
}

function dragleave(e){
    this.style.backgroundColor = "#D9D9D9";
    e.preventDefault();
}

function change(e) {
    let img = document.createElement('img');
    img.src = '../../../images/draggedFile.svg';
    result.appendChild(img);
}
