let sound = new Audio("boom.wav");
let play = 1;
let points = 0;
let livelloScelto = "easy";
let livelli = {
    "easy": 20,
    "medium": 40,
    "hard": 60
}


const levelSelector = document.getElementById("level");
levelSelector.onchange = () => {
    livelloScelto = levelSelector.value;
    clearGrid();
    createBombs();
}

function createGrid() {
    const box = document.getElementById("mainDiv");
    for (i = 0; i < 100; i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.setAttribute("onclick", "step(this)");
        box.appendChild(square);
    }
    createBombs();
}

function createBombs() {
    let squares = document.querySelectorAll('.square');
    squares.forEach(element => {
        element.classList.remove('bomb')
    });
    for (i=0; i<= livelli[livelloScelto]; i++) {
        let casual = Math.floor(Math.random() * 100);
        squares[casual].classList.add("bomb");
    }
}

function step(e) {
    if (!e.classList.contains("bomb") && play == 1) {
        e.classList.add("good");
        points++
        document.getElementById("points").innerText = points;
    } else if (e.classList.contains("bomb") && play == 1) {
        e.classList.add("exploded");
        sound.play();
        play = 0;
        document.getElementById("gameover").style.opacity = "1";
    }
}

function clearGrid() {
    const box = document.getElementById("mainDiv").innerHTML = '';
    play = 1;
    points = 0;
    document.getElementById("points").innerText = '';
    document.getElementById("gameover").style.opacity = "0";
    createGrid();
}


createGrid()
