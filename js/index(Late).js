var storedGameInfo = JSON.parse(localStorage.getItem("GameInfo"));
const Player1 = localStorage.getItem('Player1');
const Player2 = localStorage.getItem('Player2');

function PlyerName(){
    
}

function StartGame(){
    // localStorage.clear()
    // alert("Toute les valeur de la Game on été remise à 0 !");
    // location.reload();

    var storedGameInfo = JSON.parse(localStorage.getItem("GameInfo"));
    // storedGameInfo[1] = [true,2];
    alert(storedGameInfo)
}

function Teste(){

    var GameInfo = [
        Case1_1 = [false,0],
        Case1_2 = [false,0],
        Case1_3 = [false,0],
        Case2_1 = [false,0],
        Case2_2 = [false,0],
        Case2_3 = [false,0],
        Case3_1 = [false,0],
        Case3_2 = [false,0],
        Case3_3 = [false,0]
    ];
    localStorage.setItem("GameInfo", JSON.stringify(GameInfo));

    // alert(GameInfo)
    //...
    // var storedGameInfo = JSON.parse(localStorage.getItem("GameInfo"));
    // storedGameInfo[1] = [true,2];
    // alert(storedGameInfo)
    //...
    // alert("Done")
    localStorage.setItem('PlayerTurn',1)
    location.reload();
}


window.onload = function restorElement(){
    if(storedGameInfo[0][1] == 1){document.querySelector("#Case1_1").innerHTML = '<img src="../image/icon/cross.png" class="img-fluid" alt="O"></img>';}
    if(storedGameInfo[0][1] == 2){document.querySelector("#Case1_1").innerHTML = '<img src="../image/icon/circle.png" class="img-fluid" alt="X"></img>';}

    if(storedGameInfo[1][1] == 1){document.querySelector("#Case1_2").innerHTML = '<img src="../image/icon/cross.png" class="img-fluid" alt="O"></img>';}
    if(storedGameInfo[1][1] == 2){document.querySelector("#Case1_2").innerHTML = '<img src="../image/icon/circle.png" class="img-fluid" alt="X"></img>';}

    if(storedGameInfo[2][1] == 1){document.querySelector("#Case1_3").innerHTML = '<img src="../image/icon/cross.png" class="img-fluid" alt="O"></img>';}
    if(storedGameInfo[2][1] == 2){document.querySelector("#Case1_3").innerHTML = '<img src="../image/icon/circle.png" class="img-fluid" alt="X"></img>';}

    if(storedGameInfo[3][1] == 1){document.querySelector("#Case2_1").innerHTML = '<img src="../image/icon/cross.png" class="img-fluid" alt="O"></img>';}
    if(storedGameInfo[3][1] == 2){document.querySelector("#Case2_1").innerHTML = '<img src="../image/icon/circle.png" class="img-fluid" alt="X"></img>';}

    if(storedGameInfo[4][1] == 1){document.querySelector("#Case2_2").innerHTML = '<img src="../image/icon/cross.png" class="img-fluid" alt="O"></img>';}
    if(storedGameInfo[4][1] == 2){document.querySelector("#Case2_2").innerHTML = '<img src="../image/icon/circle.png" class="img-fluid" alt="X"></img>';}

    if(storedGameInfo[5][1] == 1){document.querySelector("#Case2_3").innerHTML = '<img src="../image/icon/cross.png" class="img-fluid" alt="O"></img>';}
    if(storedGameInfo[5][1] == 2){document.querySelector("#Case2_3").innerHTML = '<img src="../image/icon/circle.png" class="img-fluid" alt="X"></img>';}

    if(storedGameInfo[6][1] == 1){document.querySelector("#Case3_1").innerHTML = '<img src="../image/icon/cross.png" class="img-fluid" alt="O"></img>';}
    if(storedGameInfo[6][1] == 2){document.querySelector("#Case3_1").innerHTML = '<img src="../image/icon/circle.png" class="img-fluid" alt="X"></img>';}

    if(storedGameInfo[7][1] == 1){document.querySelector("#Case3_2").innerHTML = '<img src="../image/icon/cross.png" class="img-fluid" alt="O"></img>';}
    if(storedGameInfo[7][1] == 2){document.querySelector("#Case3_2").innerHTML = '<img src="../image/icon/circle.png" class="img-fluid" alt="X"></img>';}

    if(storedGameInfo[8][1] == 1){document.querySelector("#Case3_3").innerHTML = '<img src="../image/icon/cross.png" class="img-fluid" alt="O"></img>';}
    if(storedGameInfo[8][1] == 2){document.querySelector("#Case3_3").innerHTML = '<img src="../image/icon/circle.png" class="img-fluid" alt="X"></img>';}
}


// Fonction case 1 //
function Case1_1(){
    var PlayerTurn = localStorage.getItem('PlayerTurn');
    var Played = JSON.parse(localStorage.getItem("GameInfo"));

    if(Played[0][0] == false) {

        if (Played == true) {
            alert("Cette case est déjà jouer ! essayer une autre ;)")
        }

        if (PlayerTurn == 1){
            // Le première argument sert à saavoir si la case est prise puis le deusième qui l'a prise !
            var storedGameInfo = JSON.parse(localStorage.getItem("GameInfo"));
            storedGameInfo[0] = [true,1];
            localStorage.setItem("GameInfo", JSON.stringify(storedGameInfo));

            // alert("Player 1 à jouer");
            // document.querySelector("#Case1_1").innerHTML = '<img src="../image/icon/cross.png" class="img-fluid" alt="X"></img>';
            if(storedGameInfo[0][0] == 1){document.querySelector("#Case1_1").innerHTML = '<img src="../image/icon/cross.png" class="img-fluid" alt="O"></img>';}
        }
        
        if(PlayerTurn == 2){
            // Le première argument sert à saavoir si la case est prise puis le deusième qui l'a prise !
            var storedGameInfo = JSON.parse(localStorage.getItem("GameInfo"));
            storedGameInfo[0] = [true,2];
            localStorage.setItem("GameInfo", JSON.stringify(storedGameInfo));
            
            // alert("Player 2 à jouer");
            // document.querySelector("#Case1_1").innerHTML = '<img src="../image/icon/circle.png" class="img-fluid" alt="O"></img>';
            if(storedGameInfo[0][1] == 2){document.querySelector("#Case1_1").innerHTML = '<img src="../image/icon/circle.png" class="img-fluid" alt="X"></img>';}
        }
        
        
        // Inverseur de tour (P1 / P2)
        if (PlayerTurn == 1){
            var PlayerTurn = localStorage.setItem('PlayerTurn', 2);
        }else{
            var PlayerTurn = localStorage.setItem('PlayerTurn', 1);
        }
        
    }
    
    if(Played[0][0] == true){
        var storedGameInfo = JSON.parse(localStorage.getItem("GameInfo"));
        alert("Player " + PlayerTurn + " rejouer (sur une case vide car Player "+ storedGameInfo[0][1] +" à déja prit cette case !)");
    }
TesteWin()}

// Fonction case 2 //
function Case1_2(){
    var PlayerTurn = localStorage.getItem('PlayerTurn');
    var Played = JSON.parse(localStorage.getItem("GameInfo"));

    if(Played[1][0] == false) {

        if (Played == true) {
            alert("Cette case est déjà jouer ! essayer une autre ;)")
        }

        if (PlayerTurn == 1){
            // Le première argument sert à saavoir si la case est prise puis le deusième qui l'a prise !
            var storedGameInfo = JSON.parse(localStorage.getItem("GameInfo"));
            storedGameInfo[1] = [true,1];
            localStorage.setItem("GameInfo", JSON.stringify(storedGameInfo));

            // alert("Player 1 à jouer");
            if(storedGameInfo[1][0] == 1){document.querySelector("#Case1_2").innerHTML = '<img src="../image/icon/cross.png" class="img-fluid" alt="O"></img>';}
        }
        
        if(PlayerTurn == 2){
            // Le première argument sert à saavoir si la case est prise puis le deusième qui l'a prise !
            var storedGameInfo = JSON.parse(localStorage.getItem("GameInfo"));
            storedGameInfo[1] = [true,2];
            localStorage.setItem("GameInfo", JSON.stringify(storedGameInfo));
            
            // alert("Player 2 à jouer");
            if(storedGameInfo[1][1] == 2){document.querySelector("#Case1_2").innerHTML = '<img src="../image/icon/circle.png" class="img-fluid" alt="X"></img>';}
        }
        
        
        // Inverseur de tour (P1 / P2)
        if (PlayerTurn == 1){
            var PlayerTurn = localStorage.setItem('PlayerTurn', 2);
        }else{
            var PlayerTurn = localStorage.setItem('PlayerTurn', 1);
        }
        
    }

    if(Played[1][0] == true){
        var storedGameInfo = JSON.parse(localStorage.getItem("GameInfo"));
        alert("Player " + PlayerTurn + " rejouer (sur une case vide car Player "+ storedGameInfo[1][1] +" à déja prit cette case !)");
    }
TesteWin()}

// Fonction case 3 //
function Case1_3(){
    var PlayerTurn = localStorage.getItem('PlayerTurn');
    var Played = JSON.parse(localStorage.getItem("GameInfo"));

    if(Played[2][0] == false) {

        if (Played == true) {
            alert("Cette case est déjà jouer ! essayer une autre ;)")
        }

        if (PlayerTurn == 1){
            // Le première argument sert à saavoir si la case est prise puis le deusième qui l'a prise !
            var storedGameInfo = JSON.parse(localStorage.getItem("GameInfo"));
            storedGameInfo[2] = [true,1];
            localStorage.setItem("GameInfo", JSON.stringify(storedGameInfo));

            // alert("Player 1 à jouer");
            if(storedGameInfo[2][0] == 1){document.querySelector("#Case1_3").innerHTML = '<img src="../image/icon/cross.png" class="img-fluid" alt="O"></img>';}
        }
        
        if(PlayerTurn == 2){
            // Le première argument sert à saavoir si la case est prise puis le deusième qui l'a prise !
            var storedGameInfo = JSON.parse(localStorage.getItem("GameInfo"));
            storedGameInfo[2] = [true,2];
            localStorage.setItem("GameInfo", JSON.stringify(storedGameInfo));
            
            // alert("Player 2 à jouer");
            if(storedGameInfo[2][1] == 2){document.querySelector("#Case1_3").innerHTML = '<img src="../image/icon/circle.png" class="img-fluid" alt="X"></img>';}
        }
        
        
        // Inverseur de tour (P1 / P2)
        if (PlayerTurn == 1){
            var PlayerTurn = localStorage.setItem('PlayerTurn', 2);
        }else{
            var PlayerTurn = localStorage.setItem('PlayerTurn', 1);
        }
        
    }

    if(Played[2][0] == true){
        var storedGameInfo = JSON.parse(localStorage.getItem("GameInfo"));
        storedGameInfo[2][1]
        alert("Player " + PlayerTurn + " rejouer (sur une case vide car Player "+ storedGameInfo[2][1] +" à déja prit cette case !)");
    }
TesteWin()}

// Fonction case 5 //
function Case2_1(){
    var PlayerTurn = localStorage.getItem('PlayerTurn');
    var Played = JSON.parse(localStorage.getItem("GameInfo"));

    if(Played[3][0] == false) {

        if (Played == true) {
            alert("Cette case est déjà jouer ! essayer une autre ;)")
        }

        if (PlayerTurn == 1){
            // Le première argument sert à saavoir si la case est prise puis le deusième qui l'a prise !
            var storedGameInfo = JSON.parse(localStorage.getItem("GameInfo"));
            storedGameInfo[3] = [true,1];
            localStorage.setItem("GameInfo", JSON.stringify(storedGameInfo));

            // alert("Player 1 à jouer");
            if(storedGameInfo[3][0] == 1){document.querySelector("#Case2_1").innerHTML = '<img src="../image/icon/cross.png" class="img-fluid" alt="O"></img>';}
        }
        
        if(PlayerTurn == 2){
            // Le première argument sert à saavoir si la case est prise puis le deusième qui l'a prise !
            var storedGameInfo = JSON.parse(localStorage.getItem("GameInfo"));
            storedGameInfo[3] = [true,2];
            localStorage.setItem("GameInfo", JSON.stringify(storedGameInfo));
            
            // alert("Player 2 à jouer");
            if(storedGameInfo[3][1] == 2){document.querySelector("#Case2_1").innerHTML = '<img src="../image/icon/circle.png" class="img-fluid" alt="X"></img>';}
        }
        
        
        // Inverseur de tour (P1 / P2)
        if (PlayerTurn == 1){
            var PlayerTurn = localStorage.setItem('PlayerTurn', 2);
        }else{
            var PlayerTurn = localStorage.setItem('PlayerTurn', 1);
        }
        
    }

    if(Played[3][0] == true){
        var storedGameInfo = JSON.parse(localStorage.getItem("GameInfo"));
        storedGameInfo[3][1]
        alert("Player " + PlayerTurn + " rejouer (sur une case vide car Player "+ storedGameInfo[3][1] +" à déja prit cette case !)");
    }
TesteWin()}

// Fonction case 5 //
function Case2_2(){
    var PlayerTurn = localStorage.getItem('PlayerTurn');
    var Played = JSON.parse(localStorage.getItem("GameInfo"));

    if(Played[4][0] == false) {

        if (Played == true) {
            alert("Cette case est déjà jouer ! essayer une autre ;)")
        }

        if (PlayerTurn == 1){
            // Le première argument sert à saavoir si la case est prise puis le deusième qui l'a prise !
            var storedGameInfo = JSON.parse(localStorage.getItem("GameInfo"));
            storedGameInfo[4] = [true,1];
            localStorage.setItem("GameInfo", JSON.stringify(storedGameInfo));

            // alert("Player 1 à jouer");
            if(storedGameInfo[4][0] == 1){document.querySelector("#Case2_2").innerHTML = '<img src="../image/icon/cross.png" class="img-fluid" alt="O"></img>';}
        }
        
        if(PlayerTurn == 2){
            // Le première argument sert à saavoir si la case est prise puis le deusième qui l'a prise !
            var storedGameInfo = JSON.parse(localStorage.getItem("GameInfo"));
            storedGameInfo[4] = [true,2];
            localStorage.setItem("GameInfo", JSON.stringify(storedGameInfo));
            
            // alert("Player 2 à jouer");
            if(storedGameInfo[4][1] == 2){document.querySelector("#Case2_2").innerHTML = '<img src="../image/icon/circle.png" class="img-fluid" alt="X"></img>';}
        }
        
        
        // Inverseur de tour (P1 / P2)
        if (PlayerTurn == 1){
            var PlayerTurn = localStorage.setItem('PlayerTurn', 2);
        }else{
            var PlayerTurn = localStorage.setItem('PlayerTurn', 1);
        }
        
    }

    if(Played[4][0] == true){
        var storedGameInfo = JSON.parse(localStorage.getItem("GameInfo"));
        storedGameInfo[4][1]
        alert("Player " + PlayerTurn + " rejouer (sur une case vide car Player "+ storedGameInfo[4][1] +" à déja prit cette case !)");
    }
TesteWin()}

// Fonction case 6 //
function Case2_3(){
    var PlayerTurn = localStorage.getItem('PlayerTurn');
    var Played = JSON.parse(localStorage.getItem("GameInfo"));

    if(Played[5][0] == false) {

        if (Played == true) {
            alert("Cette case est déjà jouer ! essayer une autre ;)")
        }

        if (PlayerTurn == 1){
            // Le première argument sert à saavoir si la case est prise puis le deusième qui l'a prise !
            var storedGameInfo = JSON.parse(localStorage.getItem("GameInfo"));
            storedGameInfo[5] = [true,1];
            localStorage.setItem("GameInfo", JSON.stringify(storedGameInfo));

            // alert("Player 1 à jouer");
            if(storedGameInfo[5][0] == 1){document.querySelector("#Case2_3").innerHTML = '<img src="../image/icon/cross.png" class="img-fluid" alt="O"></img>';}
        }
        
        if(PlayerTurn == 2){
            // Le première argument sert à saavoir si la case est prise puis le deusième qui l'a prise !
            var storedGameInfo = JSON.parse(localStorage.getItem("GameInfo"));
            storedGameInfo[5] = [true,2];
            localStorage.setItem("GameInfo", JSON.stringify(storedGameInfo));
            
            // alert("Player 2 à jouer");
            if(storedGameInfo[5][1] == 2){document.querySelector("#Case2_3").innerHTML = '<img src="../image/icon/circle.png" class="img-fluid" alt="X"></img>';}
        }
        
        
        // Inverseur de tour (P1 / P2)
        if (PlayerTurn == 1){
            var PlayerTurn = localStorage.setItem('PlayerTurn', 2);
        }else{
            var PlayerTurn = localStorage.setItem('PlayerTurn', 1);
        }
        
    }

    if(Played[5][0] == true){
        var storedGameInfo = JSON.parse(localStorage.getItem("GameInfo"));
        storedGameInfo[5][1]
        alert("Player " + PlayerTurn + " rejouer (sur une case vide car Player "+ storedGameInfo[5][1] +" à déja prit cette case !)");
    }
TesteWin()}

// Fonction case 7 //
function Case3_1(){
    var PlayerTurn = localStorage.getItem('PlayerTurn');
    var Played = JSON.parse(localStorage.getItem("GameInfo"));

    if(Played[6][0] == false) {

        if (Played == true) {
            alert("Cette case est déjà jouer ! essayer une autre ;)")
        }

        if (PlayerTurn == 1){
            // Le première argument sert à saavoir si la case est prise puis le deusième qui l'a prise !
            var storedGameInfo = JSON.parse(localStorage.getItem("GameInfo"));
            storedGameInfo[6] = [true,1];
            localStorage.setItem("GameInfo", JSON.stringify(storedGameInfo));

            // alert("Player 1 à jouer");
            if(storedGameInfo[6][0] == 1){document.querySelector("#Case3_1").innerHTML = '<img src="../image/icon/cross.png" class="img-fluid" alt="O"></img>';}
        }
        
        if(PlayerTurn == 2){
            // Le première argument sert à saavoir si la case est prise puis le deusième qui l'a prise !
            var storedGameInfo = JSON.parse(localStorage.getItem("GameInfo"));
            storedGameInfo[6] = [true,2];
            localStorage.setItem("GameInfo", JSON.stringify(storedGameInfo));
            
            // alert("Player 2 à jouer");
            if(storedGameInfo[6][1] == 2){document.querySelector("#Case3_1").innerHTML = '<img src="../image/icon/circle.png" class="img-fluid" alt="X"></img>';}
        }
        
        
        // Inverseur de tour (P1 / P2)
        if (PlayerTurn == 1){
            var PlayerTurn = localStorage.setItem('PlayerTurn', 2);
        }else{
            var PlayerTurn = localStorage.setItem('PlayerTurn', 1);
        }
        
    }

    if(Played[6][0] == true){
        var storedGameInfo = JSON.parse(localStorage.getItem("GameInfo"));
        storedGameInfo[6][1]
        alert("Player " + PlayerTurn + " rejouer (sur une case vide car Player "+ storedGameInfo[6][1] +" à déja prit cette case !)");
    }
TesteWin()}

// Fonction case 8 //
function Case3_2(){
    var PlayerTurn = localStorage.getItem('PlayerTurn');
    var Played = JSON.parse(localStorage.getItem("GameInfo"));

    if(Played[7][0] == false) {

        if (Played == true) {
            alert("Cette case est déjà jouer ! essayer une autre ;)")
        }

        if (PlayerTurn == 1){
            // Le première argument sert à saavoir si la case est prise puis le deusième qui l'a prise !
            var storedGameInfo = JSON.parse(localStorage.getItem("GameInfo"));
            storedGameInfo[7] = [true,1];
            localStorage.setItem("GameInfo", JSON.stringify(storedGameInfo));

            // alert("Player 1 à jouer");
            if(storedGameInfo[7][0] == 1){document.querySelector("#Case3_2").innerHTML = '<img src="../image/icon/cross.png" class="img-fluid" alt="O"></img>';}
        }
        
        if(PlayerTurn == 2){
            // Le première argument sert à saavoir si la case est prise puis le deusième qui l'a prise !
            var storedGameInfo = JSON.parse(localStorage.getItem("GameInfo"));
            storedGameInfo[7] = [true,2];
            localStorage.setItem("GameInfo", JSON.stringify(storedGameInfo));
            
            // alert("Player 2 à jouer");
            if(storedGameInfo[7][1] == 2){document.querySelector("#Case3_2").innerHTML = '<img src="../image/icon/circle.png" class="img-fluid" alt="X"></img>';}
        }
        
        
        // Inverseur de tour (P1 / P2)
        if (PlayerTurn == 1){
            var PlayerTurn = localStorage.setItem('PlayerTurn', 2);
        }else{
            var PlayerTurn = localStorage.setItem('PlayerTurn', 1);
        }
        
    }

    if(Played[7][0] == true){
        var storedGameInfo = JSON.parse(localStorage.getItem("GameInfo"));
        storedGameInfo[7][1]
        alert("Player " + PlayerTurn + " rejouer (sur une case vide car Player "+ storedGameInfo[7][1] +" à déja prit cette case !)");
    }
TesteWin()}

// Fonction case 9 //
function Case3_3(){
    var PlayerTurn = localStorage.getItem('PlayerTurn');
    var Played = JSON.parse(localStorage.getItem("GameInfo"));

    if(Played[8][0] == false) {

        if (Played == true) {
            alert("Cette case est déjà jouer ! essayer une autre ;)")
        }

        if (PlayerTurn == 1){
            // Le première argument sert à saavoir si la case est prise puis le deusième qui l'a prise !
            var storedGameInfo = JSON.parse(localStorage.getItem("GameInfo"));
            storedGameInfo[8] = [true,1];
            localStorage.setItem("GameInfo", JSON.stringify(storedGameInfo));

            // alert("Player 1 à jouer");
            if(storedGameInfo[8][0] == 1){document.querySelector("#Case3_3").innerHTML = '<img src="../image/icon/cross.png" class="img-fluid" alt="O"></img>';}
        }
        
        if(PlayerTurn == 2){
            // Le première argument sert à saavoir si la case est prise puis le deusième qui l'a prise !
            var storedGameInfo = JSON.parse(localStorage.getItem("GameInfo"));
            storedGameInfo[8] = [true,2];
            localStorage.setItem("GameInfo", JSON.stringify(storedGameInfo));
            
            // alert("Player 2 à jouer");
            if(storedGameInfo[8][1] == 2){document.querySelector("#Case3_3").innerHTML = '<img src="../image/icon/circle.png" class="img-fluid" alt="X"></img>';}
        }
        
        
        // Inverseur de tour (P1 / P2)
        if (PlayerTurn == 1){
            var PlayerTurn = localStorage.setItem('PlayerTurn', 2);
        }else{
            var PlayerTurn = localStorage.setItem('PlayerTurn', 1);
        }
        
    }

    if(Played[8][0] == true){
        var storedGameInfo = JSON.parse(localStorage.getItem("GameInfo"));
        storedGameInfo[8][1]
        alert("Player " + PlayerTurn + " rejouer (sur une case vide car Player "+ storedGameInfo[8][1] +" à déja prit cette case !)");
    }
TesteWin()}