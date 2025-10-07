
// ############# VAR ##############
let player = document.getElementById("player");
let stat = document.getElementById("status");
let turn = 'x'; 
let cells =[];
let winnerFound = false;

// ########### third Fun ########
function endGame(num1,num2,num3){
    stat.innerHTML= `${cells[num1]} is winner`;
      document.getElementById("cell"+num1).style.background='linear-gradient(145deg, #00d4ff, #ff4b91)';
      document.getElementById("cell"+num2).style.background='linear-gradient(145deg, #00d4ff, #ff4b91)';
      document.getElementById("cell"+num3).style.background='linear-gradient(145deg, #00d4ff, #ff4b91)';
    setInterval(function(){stat.innerHTML+=`.`} ,1000 );
    setTimeout(function(){location.reload()},4000);
    }

// ############# SECOND FUN   ##############
function winner(){
    for ( let i = 1 ; i <10 ; i++  )
    {cells[i] =  document.getElementById('cell' + i ).innerHTML;
    console.log(cells)
    }
    if ( cells[1] == cells[2] && cells[2] == cells[3] && cells[1] != ''  ){endGame(1,2,3);}
    if ( cells[4] == cells[5] && cells[5] == cells[6] && cells[6] != ''  ) {endGame(4,5,6);}
    if ( cells[7] == cells[8] && cells[8] == cells[9] && cells[9] != ''  ){endGame(7,8,9);}
    if ( cells[1] == cells[4] && cells[4] == cells[7] && cells[1] != ''  ){endGame(1,4,7);}
    if ( cells[2] == cells[5] && cells[5] == cells[8] && cells[8] != ''  ){endGame(2,5,8);}
    if ( cells[3] == cells[6] && cells[6] == cells[9] && cells[9] != ''  ){endGame(3,6,9);}
    if ( cells[1] == cells[5] && cells[5] == cells[9] && cells[1] != ''  ){endGame(1,5,9);}
    if ( cells[3] == cells[5] && cells[5] == cells[7] && cells[7] != ''  ){endGame(3,5,7);}
    if (winnerFound === false) {
        let full = true;
        for (let i = 1; i < 10; i++) {
            if (cells[i] === "") {
                full = false;
                break;}}
        if (full === true) {
            stat.innerHTML = `It is a draw 😐`;
            setTimeout(() => { location.reload(); }, 2000);}}}

// ########### First Fun ########
function game(id){
let element = document.getElementById(id);
if (turn === "x" && element.innerHTML == ""  ){
    element.innerHTML='x';
    turn = 'o'
    player.innerHTML="o";
}
if (turn === "o" && element.innerHTML == ""  ){
    element.innerHTML='o';
    turn = 'x';
    player.innerHTML="x";
}
winner();
}
