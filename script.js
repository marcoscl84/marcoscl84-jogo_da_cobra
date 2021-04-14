let canvas = document.getElementById("Snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];

snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "right";

function criarBG(){
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16*box);
}

function criarCobra(){
    for(i=0; i<snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snaek[i].y, box, box);
    }
}

function iniciarJogo(){
    criarBG();
    criarCobra();
}

let jogo = setInterval(iniciarJogo, 100);

