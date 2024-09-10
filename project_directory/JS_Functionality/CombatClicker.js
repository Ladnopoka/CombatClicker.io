import "./Player.js";
import "./Checks.js";

let player1 = new Player();
let checks = new Checks();
var flipper = true;

const action = {    //this action account for how many attacks and defends you did. Depending on the number, it choses wether to attack or to defend
    
    flipflop: 0,
    do: (bodypart) => {
        (action.flipflop < 2? action.attack : action.defend)[bodypart]();
        //action.flipflop++;
        console.log(action.flipflop);
    },
    attack: {
        head: () => {player1.attack('head'); action.flipflop++},
        body: () => {player1.attack('body'); action.flipflop++},
        waist: () => {player1.attack('waist'); action.flipflop++},
        legs: () => {player1.attack('legs'); action.flipflop++},
        arms: () => {player1.attack('arms'); action.flipflop++}
    },
    defend: {
        head: () => {player1.defend('head'); if(action.flipflop==2) action.flipflop++; else (action.flipflop=0)},
        body: () => {player1.defend('body'); if(action.flipflop==2) action.flipflop++; else (action.flipflop=0)},
        waist: () => {player1.defend('waist'); if(action.flipflop==2) action.flipflop++; else (action.flipflop=0)},
        legs: () => {player1.defend('legs'); if(action.flipflop==2) action.flipflop++; else (action.flipflop=0)},
        arms: () => {player1.defend('arms'); if(action.flipflop==2) action.flipflop++; else (action.flipflop=0)},
    }
}

document.getElementById('check1').onclick = () => checks.myCheck1();
document.getElementById('check2').onclick = () => checks.myCheck2();
document.getElementById('check3').onclick = () => checks.myCheck3();
document.getElementById('check4').onclick = () => checks.myCheck4();
document.getElementById('check5').onclick = () => checks.myCheck5();

var ttm1 = null;
var ttm2 = null;

document.getElementById('attack').onclick = () =>
{
    var audioAttack = new Audio("./attackSound.mp3");
    audioAttack.play();

    if(checks.headCheck == true)
        action.do('head');
    if(checks.bodyCheck == true)
        action.do('body');
    if(checks.waistCheck == true)
        action.do('waist');
    if(checks.legsCheck == true)
        action.do('legs');
    if(checks.armsCheck == true)
        action.do('arms');
    
    if (flipper == true)
    {
        clearTimeout(ttm1);
        document.getElementById("attack").innerHTML = "Defend";
        document.getElementById("attack").style.background = "#85B0BE";
        document.getElementById("scoreboardid").style.border = "1px solid #85B0BE";
        document.getElementById("playerBorder").style.borderBottom = "1px solid #85B0BE";
        document.getElementById("scoreboardidComputer").style.border = "1px solid #B21807";
        document.getElementById("computerBorder").style.borderBottom = "1px solid #B21807";
        document.getElementById("checkboxes").style.color = "#85B0BE";

        document.getElementById("check1").style.bottom = "285px";
        document.getElementById("check1").style.left = "680px";
        document.getElementById("check2").style.bottom = "195px";
        document.getElementById("check2").style.left = "670px";
        document.getElementById("check3").style.bottom = "125px";
        document.getElementById("check3").style.left = "650px";
        document.getElementById("check4").style.bottom = "85px";
        document.getElementById("check4").style.left = "700px";
        document.getElementById("check5").style.bottom = "155px";
        document.getElementById("check5").style.left = "725px";

        document.getElementById("check1").style.bottom = "355px";
        document.getElementById("check1").style.left = "140px";
        document.getElementById("check2").style.bottom = "285px";
        document.getElementById("check2").style.left = "145px";
        document.getElementById("check3").style.bottom = "215px";
        document.getElementById("check3").style.left = "140px";
        document.getElementById("check4").style.bottom = "115px";
        document.getElementById("check4").style.left = "100px";
        document.getElementById("check5").style.bottom = "275px";
        document.getElementById("check5").style.left = "76px";

        document.getElementById("computerBang").style.display = "block";
        document.getElementById("computerBangNumber").style.display = "block";
        document.getElementById("playerBang").style.display = "none";
        document.getElementById("playerBangNumber").style.display = "none";
        document.getElementById("computerBang").style.animationIterationCount = "1";
        document.getElementById("computerBangNumber").style.animationIterationCount = "1";

        document.getElementById("textCheck1").innerHTML = "Defending Head!";
        document.getElementById("textCheck2").innerHTML = "Defending Body!";
        document.getElementById("textCheck3").innerHTML = "Defending Waist!";
        document.getElementById("textCheck4").innerHTML = "Defending Legs!";
        document.getElementById("textCheck5").innerHTML = "Defending Arms!";

        //make bang not appear
        ttm2 = setTimeout(tm2, 5800);

        flipper = false;
    }
    else
    {
        clearTimeout(ttm2);
        document.getElementById("attack").innerHTML = "Attack";
        document.getElementById("attack").style.background = "#B21807";
        document.getElementById("scoreboardid").style.border = "1px solid #B21807";
        document.getElementById("playerBorder").style.borderBottom = "1px solid #B21807";
        document.getElementById("scoreboardidComputer").style.border = "1px solid #85B0BE";
        document.getElementById("computerBorder").style.borderBottom = "1px solid #85B0BE";
        document.getElementById("checkboxes").style.color = "#B21807";

        document.getElementById("check1").style.bottom = "285px";
        document.getElementById("check1").style.left = "750px";
        document.getElementById("check2").style.bottom = "195px";
        document.getElementById("check2").style.left = "740px";
        document.getElementById("check3").style.bottom = "125px";
        document.getElementById("check3").style.left = "720px";
        document.getElementById("check4").style.bottom = "85px";
        document.getElementById("check4").style.left = "770px";
        document.getElementById("check5").style.bottom = "155px";
        document.getElementById("check5").style.left = "795px";

        document.getElementById("playerBang").style.display = "block";
        document.getElementById("playerBangNumber").style.display = "block";
        document.getElementById("computerBang").style.display = "none";
        document.getElementById("computerBangNumber").style.display = "none";

        document.getElementById("textCheck1").innerHTML = "Attacking Head!";
        document.getElementById("textCheck2").innerHTML = "Attacking Body!";
        document.getElementById("textCheck3").innerHTML = "Attacking Waist!";
        document.getElementById("textCheck4").innerHTML = "Attacking Legs!";
        document.getElementById("textCheck5").innerHTML = "Attacking Arms!";

        //make bang not appear
        ttm1 = setTimeout(tm1, 5800);

        flipper = true;
    }
    

    checks.uncheckAll();
    document.getElementById("attack").style.display = "none";
}


//fade out timers for bang numbers
var playBadge = document.getElementById('playerBang');
var playBadge1 = document.getElementById('playerBangNumber');
var compBadge = document.getElementById('computerBang');
var compBadge1 = document.getElementById('computerBangNumber');

function tm1(){
    playBadge.style.display = "none";
    playBadge1.style.display = "none";
};

function tm2(){
    compBadge.style.display = "none";
    compBadge1.style.display = "none";
};
