var playerScore = 0;
var computerScore = 0;
var playerLife = 100;
var computerLife = 100;

const action = {
    flipflop: true,
    do: (bodypart) => {
        (action.flipflop? action.attack : action.defend)[bodypart]();
        action.flipflop = !action.flipflop;
    },
    attack : {
        head: () => {attack('head');},
        body: () => {attack('body');},
        legs: () => {attack('legs'); },
        waist: () => {attack('waist');},
        arms: () => {attack('arms'); }
    },
    defend: {
        head: () => {defend('head');},
        body: () => {defend('body');},
        legs: () => {defend('legs'); },
        waist: () => {defend('waist');},
        arms: () => {defend('arms'); } 
    }
}

document.getElementById('status').innerHTML = "Welcome to the deadliest arena in the world!\n"
document.getElementById('head').onclick = () => action.do('head');
document.getElementById('body').onclick = () => action.do('body');
document.getElementById('legs').onclick = () => action.do('legs');
document.getElementById('waist').onclick = () => action.do('waist');
document.getElementById('arms').onclick = () => action.do('arms');

function attack(playerattack) {
  var getBotDefense = getComputerdefend();
  document.getElementById('status').innerHTML = "<p>You Attacked!!!!<p><strong>";
  
  if(playerattack == 'head') 
  {
    if (getBotDefense == 'head')
    {
        document.getElementById('status').innerHTML += "<p>Computer blocked head!!!</p>";
    }
    else
    {
        document.getElementById('status').innerHTML += "<p>Computer got hit in the head!!!</p>";
        computerLife--;
        playerScore+=1
    }
  }
  else if(playerattack == 'body') 
  {
    if (getBotDefense == 'body')
    {
        document.getElementById('status').innerHTML += "<p>Computer blocked body!!!</p>";
    }
    else
    {
        document.getElementById('status').innerHTML += "<p>Computer got hit in the body!!!</p>";
        computerLife--;
        playerScore+=1
    }
  }
  else if(playerattack == 'legs') 
  {
    if (getBotDefense == 'legs')
    {
        document.getElementById('status').innerHTML += "<p>Computer blocked legs!!!</p>";
    }
    else
    {
        document.getElementById('status').innerHTML += "<p>Computer got hit in the legs!!!</p>";
        computerLife--;
        playerScore+=1
    }
  }
  else if(playerattack == 'waist') 
  {
    if (getBotDefense == 'waist')
    {
        document.getElementById('status').innerHTML += "<p>Computer blocked waist!!!</p>";
    }
    else
    {
        document.getElementById('status').innerHTML += "<p>Computer got hit in the waist!!!</p>";
        computerLife--;
        playerScore+=1
    }
  }  
  else if(playerattack == 'arms') 
  {
    if (getBotDefense == 'arms')
    {
        document.getElementById('status').innerHTML += "<p>Computer blocked arms!!!</p>";
    }
    else
    {
        document.getElementById('status').innerHTML += "<p>Computer got hit in the arms!!!!</p>";
        computerLife--;
        playerScore+=1
    }
  }
  
  document.getElementById('playerScore').innerHTML = playerScore;
  document.getElementById('computerLife').innerHTML = computerLife;  
}

function defend(playerdefend)
{
    document.getElementById('status').innerHTML = "<p>You're defending!!!<p><strong>";
    switch (playerdefend) {
        case "head":
            if (getComputerattack == 'head')
            {
                document.getElementById('status').innerHTML += "<p>You have successfully blocked Head!!!</p>";
            }
            else
            {
                computerScore++;
                playerLife-=1

                document.getElementById('status').innerHTML += "<p>You got hit in the head!!! only " + playerLife + " lives left</p>";
            }break;
        case "body":
            if (getComputerattack == 'body')
            {
                document.getElementById('status').innerHTML += "<p>You have successfully blocked Body!!!</p>";
            }
            else
            {
                computerScore++;
                playerLife-=1

                document.getElementById('status').innerHTML += "<p>You got hit in the body!!! only " + playerLife + " lives left</p>";
            }break;
        case "legs":
            if (getComputerattack == 'legs')
            {
                document.getElementById('status').innerHTML += "<p>You have successfully blocked Legs!!!</p>";
            }
            else
            {
                computerScore++;
                playerLife-=1

                document.getElementById('status').innerHTML += "<p>You got hit in the legs!!! only " + playerLife + " lives left</p>";
            }break;
        case "waist":
            if (getComputerattack == 'waist')
            {
                document.getElementById('status').innerHTML += "<p>You have successfully blocked Waist!!!</p>";
            }
            else
            {
                computerScore++;
                playerLife-=1

                document.getElementById('status').innerHTML += "<p>You got hit in the waist!!! only " + playerLife + " lives left</p>";
            }break;
        case "arms":
            if (getComputerattack == 'arms')
            {
                document.getElementById('status').innerHTML += "<p>You have successfully blocked Arms!!!</p>";
            }
            else
            {
                computerScore++;
                playerLife-=1

                document.getElementById('status').innerHTML += "<p>You got hit in the arms!!! only " + playerLife + " lives left</p>";
            }break;
        }
        document.getElementById('playerLife').innerHTML = playerLife;
        document.getElementById('computerScore').innerHTML = computerScore; 
}

function getComputerdefend() {
  var defense = ['head', 'body', 'legs', 'waist', 'arms'];
  var defended = defense[Math.floor(Math.random() * defense.length)];
  return defended;
}
function getComputerattack() {
    var attacks = ['head', 'body', 'legs', 'waist', 'arms'];
    var attacked= attacks[Math.floor(Math.random() * attacks.length)];
    return attacked;
}