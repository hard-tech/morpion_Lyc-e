// Déclaration des const (Name)
function SaveNamePlayer() {
  if (document.getElementById('p1').value != "") {
    localStorage['Player1'] = document.getElementById('p1').value
    localStorage['NameSaved1'] = true;
  }
  if (document.getElementById('p2').value != "") {
    localStorage['Player2'] = document.getElementById('p2').value
    localStorage['NameSaved2'] = true;
  }
}

function ResetName() {
  // Reset Nomber of Game Played //

  if (confirm("Êtes-vous sur de vouloir supprimer toutes les données enregistrer sur le site ?") == true) {
    localStorage['GamePlayed'] = 0;
    // Reset Nomber of Game Played //

    localStorage.clear('Player1', 'Player2', 'History', 'NameSaved1', 'NameSaved2', 'GamePlayed', 'PlayerPrefert');

    location.reload()
  }
}

// 1. Demmander Si on veux mettre un nom aux joueur (Vérif si nom != null)
// 2.   si oui Récupérer et mettre les noms aux jouers (Si 1 des deux vide mettre Player X par défaux).
// 3.   Réponse = false mettre Player 1 & Player 2 par défaux
// 4. Supprimer les var lolcalstokaged ;)


var Player1 = localStorage.Player1;
var Player2 = localStorage.Player2;

// alert(localStorage.DefaultName)
if (!localStorage.NameSaved1 && !localStorage.NameSaved2 && !localStorage.DefaultName) {

  var SetName = confirm("Les noms des joueur sont vide voulez-vous en mettre par défaux, vous pourez les changer après ?")
  if (SetName) {
    Player1 = prompt("Quelle nom voulez vous mettre pour le Joueur 1 ? ");
    if (Player1 == "" || Player1 == null) {
      Player1 = "Player 1"
    }
    Player2 = prompt("Quelle nom voulez vous mettre pour le Joueur 2 ? ");
    if (Player2 == "" || Player2 == null) {
      Player2 = "Player 2"
    }

    localStorage['Player1'] = Player1
    localStorage['Player2'] = Player2

    alert(`Les noms par défaux des joueurs serra, ${Player1} et ${Player2}`)

    localStorage['DefaultName'] = false;
  }
}


if (document.getElementById('p1').value == "" && !localStorage.NameSaved1 && !SetName && !localStorage.DefaultName) {
  // var NewName1 = prompt("Le Joueur 1 n'a pas de nom Voulez-vous en mettre un ? (si oui entrée le sinon laisser vide) ")
  Player1 = "Player 1";
}

if (document.getElementById('p2').value == "" && !localStorage.NameSaved2 && !SetName && !localStorage.DefaultName) {
  // var NewName2 = prompt("Le Joueur 2 n'a pas de nom Voulez-vous en mettre un ? (si oui entrée le sinon laisser vide) ")
  Player2 = "Player 2";
}


var finish = false;
var finishSaveData = false;

// Script pour animée des animation {by 'anime.ccs'} ! //
const animateCSS = (element, animation, prefix = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.getElementById(element);

    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd, {
      once: true
    });
  });

window.onload = function Init() {
  const element = document.querySelector('#Restart');
  element.style.setProperty('--animate-duration', '0.4s');
  animateCSS('#Restart', 'pulse');

  PlayerTurn = ['1', '2'];
  Winig = [winig1 = false, winig2 = false, winig3 = false, winig4 = false, winig5 = false, winig6 = false, winig7 = false, winig8 = false]
  TesteTable = [
    TableClassW1 = 0,
    TableClassW2 = 0,
    TableClassW3 = 0,
    TableClassW4 = 0,
    TableClassW5 = 0,
    TableClassW6 = 0,
    TableClassW7 = 0,
    TableClassW8 = 0
  ];
  IndexArry = 0 ;

  if (localStorage.PlayerPrefert == "1") {
    Turn = [PlayerTurn[0]];
    document.getElementById('turn').innerText = Player1;
  }
  if (localStorage.PlayerPrefert == "2") {
    Turn = [PlayerTurn[1]];
    document.getElementById('turn').innerText = Player2;
  } else {
    Turn = [PlayerTurn[0]];
    document.getElementById('turn').innerText = Player1;
  }

  document.getElementById('Restart').classList.add('disabled');
  WhoStart();
}

function EnableRestart() {
  document.getElementById('Restart').classList.remove('disabled');
  document.getElementById('Restart').classList.add('btn-success');
}

function WhoStart(Starter) {
  if (Starter == Player1) {
    Turn = [PlayerTurn[0]];
    // alert(Turn)
    document.getElementById('turn').innerText = Player1;
    localStorage["PlayerPrefert"] = "1";
  }

  if (Starter == Player2) {
    Turn = [PlayerTurn[1]];
    // alert(Turn)
    document.getElementById('turn').innerText = Player2;
    localStorage["PlayerPrefert"] = "2";
  }
}

function Game(Case) {

  if (Turn == PlayerTurn[0] && !finish) {

    // var Played = document.getElementById(Case).classList
    // alert(Played)
    var Played = document.getElementById(Case).className.search('used')

    if (document.getElementById(Case).classList[1] == "free") {
      Turn = [PlayerTurn[1]];
      document.getElementById('turn').innerText = Player2;
    }

    if (Played >= 0) {
      alert("Vous ne pouvez pas utiliser cette case (elle est déjà prise) !")
    } else {
      // alert("Cahge info")
      // alert("Libre !");
      document.getElementById(Case).innerHTML = '<img class="img-fluid" src="./image/icon/cross.png" alt="X">';
      document.getElementById(Case).classList.remove('free');
      document.getElementById(Case).classList.add('used');
      document.getElementById(Case).classList.add(`Belong${Turn}`);

      animateCSS(Case, 'rubberBand');
    }
    // alert(document.getElementById(Case).classList)

    // if(document.getElementById(Case).classList[1] == "free"){
    //     Turn = [PlayerTurn[1]];
    // }  

  } else if (Turn == PlayerTurn[1] && !finish) {

    // var Played = document.getElementById(Case).classList
    // alert(Played)
    var Played = document.getElementById(Case).className.search('used')

    if (document.getElementById(Case).classList[1] == "free") {
      Turn = [PlayerTurn[0]];
      document.getElementById('turn').innerText = Player1;
    }

    if (Played >= 0) {
      alert("Vous ne pouver pas utiliser cette case (elle est déjà prise) !")
    } else {
      // alert("Cahge info")
      document.getElementById(Case).innerHTML = '<img class="img-fluid" src="./image/icon/circle.png" alt="O">';
      document.getElementById(Case).classList.remove('free');
      document.getElementById(Case).classList.add('used');
      document.getElementById(Case).classList.add(`Belong${Turn}`);

      const element = document.getElementById(Case);
      element.style.setProperty('--animate-duration', '0.4s');
      animateCSS(Case, 'zoomIn');
    }
    // alert(document.getElementById(Case).classList)

    // if(document.getElementById(Case).classList[1] == "free"){
    //   Turn = [PlayerTurn[0]];
    // }  


  } else {
    alert("C'est fini ! Vous ne pouvez pas continuer, mais vous pouvez rejouer !")
  }
  WinigTest();
}

function WinigTest() {
  // Attribusin des valeur donner en class (free / used) //
  Case1_1 = [document.getElementById('Case1_1').classList[1], document.getElementById('Case1_1').classList[2]];
  Case1_2 = [document.getElementById('Case1_2').classList[1], document.getElementById('Case1_2').classList[2]];
  Case1_3 = [document.getElementById('Case1_3').classList[1], document.getElementById('Case1_3').classList[2]];
  Case2_1 = [document.getElementById('Case2_1').classList[1], document.getElementById('Case2_1').classList[2]];
  Case2_2 = [document.getElementById('Case2_2').classList[1], document.getElementById('Case2_2').classList[2]];
  Case2_3 = [document.getElementById('Case2_3').classList[1], document.getElementById('Case2_3').classList[2]];
  Case3_1 = [document.getElementById('Case3_1').classList[1], document.getElementById('Case3_1').classList[2]];
  Case3_2 = [document.getElementById('Case3_2').classList[1], document.getElementById('Case3_2').classList[2]];
  Case3_3 = [document.getElementById('Case3_3').classList[1], document.getElementById('Case3_3').classList[2]];

  if (
    Case1_1[0, 1] == Case1_2[0, 1] && Case1_1[0, 1] == Case1_3[0, 1] && Case1_1[0] != 'free' ||
    Case2_1[0, 1] == Case2_2[0, 1] && Case2_1[0, 1] == Case2_3[0, 1] && Case2_1[0] != 'free' ||
    Case3_1[0, 1] == Case3_2[0, 1] && Case3_1[0, 1] == Case3_3[0, 1] && Case3_1[0] != 'free' ||
    Case1_1[0, 1] == Case2_1[0, 1] && Case1_1[0, 1] == Case3_1[0, 1] && Case1_1[0] != 'free' ||
    Case1_2[0, 1] == Case2_2[0, 1] && Case1_2[0, 1] == Case3_2[0, 1] && Case1_2[0] != 'free' ||
    Case1_3[0, 1] == Case2_3[0, 1] && Case1_3[0, 1] == Case3_3[0, 1] && Case1_3[0] != 'free' ||
    Case3_1[0, 1] == Case2_2[0, 1] && Case3_1[0, 1] == Case1_3[0, 1] && Case3_1[0] != 'free' ||
    Case1_1[0, 1] == Case2_2[0, 1] && Case1_1[0, 1] == Case3_3[0, 1] && Case1_1[0] != 'free'
  ) {

    if (Turn == Number(PlayerTurn[0])) {
      // alert("Win !");
      document.getElementById('info').innerHTML = `<b> Bravo <span class="Winer">${Player2}</span>, tu a gagner !</b>`;
      winer = Player2;
      losser = Player1;
      SaveDate();
      finish = true;
      // const element = document.getElementById('info');
      // element.style.setProperty('--animate-duration', '0.4s');
      animateCSS('info', 'flip');
    } else if (Turn == Number(PlayerTurn[1])) {
      // alert("Win !");
      document.getElementById('info').innerHTML = `<b> Bravo <span class="Winer">${Player1}</span>, tu a gagner !</b>`;
      winer = Player1;
      losser = Player2;
      SaveDate();
      finish = true;
      // const element = document.getElementById('info');
      // element.style.setProperty('--animate-duration', '0.4s');
      animateCSS('info', 'flip');
    }
    EnableRestart();
    animateCSS('finished', 'flipInY');


    if (finish && !finishSaveData) {
      CountGamePlayed();
    }
  }
  if (
    Case1_1[0] != 'free' && Case1_2[0] != 'free' && Case1_3[0] != 'free' &&
    Case2_1[0] != 'free' && Case2_2[0] != 'free' && Case2_3[0] != 'free' &&
    Case3_1[0] != 'free' && Case3_2[0] != 'free' && Case3_3[0] != 'free' && !finish
  ) {
    document.getElementById('info').innerHTML = `<b> Bien jouer ${Player1} et ${Player2}, vous avez fait match-null !</b>`;
    winer = "Personne";
    losser = "Personne";
    SaveDate();
    finish = true;

    animateCSS('info', 'zoomIn')

    EnableRestart();
    animateCSS('finished', 'flipInY');


    // GamePlayed

    if (finish && !finishSaveData) {
      CountGamePlayed();
    }
  }

  if (Case1_1[0, 1] == Case1_2[0, 1] && Case1_1[0, 1] == Case1_3[0, 1] && Case1_1[0] != 'free') {
    winig1 = true;
    TableClassW1 = ['1', '2', '3']
  }
  if (Case2_1[0, 1] == Case2_2[0, 1] && Case2_1[0, 1] == Case2_3[0, 1] && Case2_1[0] != 'free') {
    winig2 = true;
    TableClassW2 = ['4', '5', '6']
  }
  if (Case3_1[0, 1] == Case3_2[0, 1] && Case3_1[0, 1] == Case3_3[0, 1] && Case3_1[0] != 'free') {
    winig3 = true;
    TableClassW3 = ['7', '8', '9']
  }
  if (Case1_1[0, 1] == Case2_1[0, 1] && Case1_1[0, 1] == Case3_1[0, 1] && Case1_1[0] != 'free') {
    winig4 = true;
    TableClassW4 = ['1', '4', '7']
  }
  if (Case1_2[0, 1] == Case2_2[0, 1] && Case1_2[0, 1] == Case3_2[0, 1] && Case1_2[0] != 'free') {
    winig5 = true;
    TableClassW5 = ['2', '5', '8']
  }
  if (Case1_3[0, 1] == Case2_3[0, 1] && Case1_3[0, 1] == Case3_3[0, 1] && Case1_3[0] != 'free') {
    winig6 = true;
    TableClassW6 = ['3', '6', '9']
  }GamePlayed
  if (Case3_1[0, 1] == Case2_2[0, 1] && Case3_1[0, 1] == Case1_3[0, 1] && Case3_1[0] != 'free') {
    winig7 = true;
    TableClassW7 = ['7', '5', '3']
  }
  if (Case1_1[0, 1] == Case2_2[0, 1] && Case1_1[0, 1] == Case3_3[0, 1] && Case1_1[0] != 'free') {
    winig8 = true;
    TableClassW8 = ['1', '5', '9']
  }

  Winig = [winig1, winig2, winig3, winig4, winig5, winig6, winig7, winig8]

  TesteTable = [
    TableClassW1,
    TableClassW2,
    TableClassW3,
    TableClassW4,
    TableClassW5,
    TableClassW6,
    TableClassW7,
    TableClassW8
  ]

  // ### Pour chaque possibiliter de win teste SI ... ### //
  Winig.forEach(WinerN => {
    var IndexWin = WinerN

  // ### SI IndexWin == true, donc si c'est la bonne posibiliter de win qui à été faite ### //
    if (IndexWin) {

  // ### Pour chaque Id de TesteTable[IndexArry/8] ### //
      TesteTable[IndexArry].forEach(elementAnime => {

        animateCSS(elementAnime, 'flip');
        document.getElementById(elementAnime).classList.add('animate__infinite');
      });


    } else {
      IndexArry = IndexArry + 1;
    }

  });

}


function SaveDate() {

  function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }

  function formatDate(date) {
    return [
      padTo2Digits(date.getDate()),
      padTo2Digits(date.getMonth() + 1),
      date.getFullYear(),
    ].join('/');
  }

  DateSave = formatDate(new Date());
  var now = new Date();


  if (now.getMinutes() < 10) {
    hours = now.getHours() + "h0" + now.getMinutes();
  } else {
    hours = now.getHours() + "h" + now.getMinutes();
  }
}

function Restart() {
  location.reload()
}

function CountGamePlayed() {
  GamePlayed = Number(localStorage.GamePlayed)
  if (localStorage.GamePlayed == undefined) {
    GamePlayed = localStorage['GamePlayed'] = 0;
  }
  GamePlayed = Number(localStorage.GamePlayed) + 1;
  localStorage['GamePlayed'] = GamePlayed;

  HistoryScore();
}

function HistoryScore() {
  Players = [Player1, Player2]

  document.getElementById('HistoryScore').innerHTML = `
  <b>
    il y a actuellement ${GamePlayed} partie qui ont été jouer : <br><br>
    <ul>  
    <ul>
      <div id="HistoryGame"></div>
    </ul>
    </ul>
  </b>
  `;

  function InfoGame() {
    this.GamePlayed = GamePlayed,
      this.Players = Players,
      this.winer = winer,
      this.losser = losser,
      this.DateSave = DateSave,
      this.hours = hours
  }
  // alert([GamePlayed,Players,winer, DateSave])

  if (localStorage.History == undefined) {
    History = [];
    localStorage['History'] = JSON.stringify(History);
  }

  History = JSON.parse([localStorage.History])

  History.push(new InfoGame(GamePlayed, Players, winer, losser, DateSave, hours));
  localStorage['History'] = JSON.stringify(History);
  let HistoryList = []

  for (var i = 0; i < History.length; i++) {
    HistoryList.push(History[i]);
  }
  console.log(HistoryList)

  // 1. Crée une liste de "Var" qui contien [GamePlayed,Players,winer,DateSave]
  // 2. Push "pour chaqua element de la liste" push à HistoryList donc HistoryList = [InfoGame(GamePlayed,Players,winer,DateSave), InfoGame(GamePlayed,Players,winer,DateSave) ...]
  // 3. Executer le code !

  let listOfHistory = '';

  HistoryList.forEach(historyed =>
    listOfHistory += `
      <li class="History-list">${historyed.winer} a gagné contre ${historyed.losser} le ${historyed.DateSave} à ${historyed.hours} </li>
      `
  )
  document.getElementById('HistoryGame').innerHTML = listOfHistory;
  finishSaveData = true;
}
