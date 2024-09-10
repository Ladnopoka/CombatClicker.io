class Player
{
    constructor()
    {
        this.playerLife = 100;
        this.computerLife = 100;
        this.playerDefended = [];
        this.computerAttack = [];
        this.finalDamageNumber = 0;
        this.duoCounter = 0;
    }

    attack(playerattack) 
    {
        var num = Functions.randomNum(1, 25); 
        this.duoCounter++;

        var getBotDefense = Computer.getComputerdefend();

        if(playerattack == 'head') 
        {
            if (getBotDefense == 'head')
            {
                Functions.updateChangeLog("content", "Computer blocked head!!!");
            }
            else
            {
                this.computerLife = this.computerLife - num;
                Functions.updateChangeLog("content", "Computer got hit for " + "<strong>" + num + "</strong>" + " damage to the head. " + "Computer life: " + "<strong>" + this.computerLife + "</strong>");
                this.finalDamageNumber += num;
            }
        }
        else if(playerattack == 'body') 
        {
            if (getBotDefense == 'body')
            {
                Functions.updateChangeLog("content", "Computer blocked body!!!");
            }
            else
            {
                this.computerLife = this.computerLife - num;
                Functions.updateChangeLog("content", "Computer got hit for " + "<strong>" + num + "</strong>" + " damage to the body. " + "Computer life: " + "<strong>" + this.computerLife + "</strong>");
                this.finalDamageNumber += num;
            }
        }
        else if(playerattack == 'waist') 
        {
            if (getBotDefense == 'waist')
            {
                Functions.updateChangeLog("content", "Computer blocked waist!!!");
            }
            else
            {
                this.computerLife = this.computerLife - num;
                Functions.updateChangeLog("content", "Computer got hit for " + "<strong>" + num + "</strong>" + " damage to the waist. " + "Computer life: " + "<strong>" + this.computerLife + "</strong>");
                this.finalDamageNumber += num;
            }
        }
        else if(playerattack == 'legs') 
        {
            if (getBotDefense == 'legs')
            {
                Functions.updateChangeLog("content", "Computer blocked legs!!!");
            }
            else
            {
                this.computerLife = this.computerLife - num;
                Functions.updateChangeLog("content", "Computer got hit for " + "<strong>" + num + "</strong>" + " damage to the legs. " + "Computer life: " + "<strong>" + this.computerLife + "</strong>");
                this.finalDamageNumber += num;
            }
        }  
        else if(playerattack == 'arms') 
        {
            if (getBotDefense == 'arms')
            {
                Functions.updateChangeLog("content", "Computer blocked arms!!!");
            }
            else
            {
                this.computerLife = this.computerLife - num;
                Functions.updateChangeLog("content", "Computer got hit for " + "<strong>" + num + "</strong>" + " damage to the arms. " + "Computer life: " + "<strong>" + this.computerLife + "</strong>");
                this.finalDamageNumber += num;
            }
        }

        if(this.duoCounter >= 2)
        {
            document.getElementById("computerBangNumber").innerHTML = this.finalDamageNumber;
            this.duoCounter = 0;
            this.finalDamageNumber = 0;
        }

        console.log("Number: " + num);
        console.log("Final Number: " + this.finalDamageNumber);

        document.getElementById('computerBorder').innerHTML = "Rat  " + this.computerLife + "/100 ";  
        if (this.computerLife <= 0) // if computer reaches 0 life, game is over
        {
            document.getElementById('computerBorder').innerHTML = "Rat  0/100 "; 
            document.getElementById("victoryMessage").style.visibility = "visible";
            document.getElementById("check1").style.visibility = "hidden";
            document.getElementById("check2").style.visibility = "hidden";
            document.getElementById("check3").style.visibility = "hidden";
            document.getElementById("check4").style.visibility = "hidden";
            document.getElementById("check5").style.visibility = "hidden";
            document.getElementById("playerBang").style.visibility = "hidden";
            document.getElementById("playerBangNumber").style.visibility = "hidden";
            document.getElementById("computerBang").style.visibility = "hidden";
            document.getElementById("computerBangNumber").style.visibility = "hidden";
        }
    }
    
    defend(playerdefend)
    {
        this.playerDefended.push(playerdefend);
        while (true)
        {
            var getRandomAttack = Computer.getComputerattack();
            if (!this.computerAttack.includes(getRandomAttack))
            {
                this.computerAttack.push(getRandomAttack);
                break;
            }
        }

        if (this.computerAttack.length >= 2)
        {
            for (let i = 0; i < 2; i++)
            {
                var num = Functions.randomNum(5, 25); 
                switch (this.computerAttack[i]) 
                {
                    case "head":
                    if (this.playerDefended.includes("head"))
                    {
                        Functions.updateChangeLog("content", "You have successfully blocked Head!!!");
                    }
                    else
                    {
                        this.playerLife = this.playerLife - num;
                        Functions.updateChangeLog("content", "You got hit for " + "<strong>" + num + "</strong>" + " damage to the " + this.computerAttack[i] + ". Your current life: " + "<strong>" + this.playerLife + "</strong>");
                        this.finalDamageNumber += num;
                    }break;

                    case "body":
                    if (this.playerDefended.includes("body"))
                    {
                        Functions.updateChangeLog("content", "You have successfully blocked Body!!!");
                    }
                    else
                    {
                        this.playerLife = this.playerLife - num;
                        Functions.updateChangeLog("content", "You got hit for " + "<strong>" + num + "</strong>" + " damage to the " + this.computerAttack[i] + ". Your current life: " + "<strong>" + this.playerLife + "</strong>");
                        this.finalDamageNumber += num;
                    }break;

                    case "waist":
                    if (this.playerDefended.includes("waist"))
                    {
                        Functions.updateChangeLog("content", "You have successfully blocked Waist!!!");
                    }
                    else
                    {
                        this.playerLife = this.playerLife - num;
                        Functions.updateChangeLog("content", "You got hit for " + "<strong>" + num + "</strong>" + " damage to the " + this.computerAttack[i] + ". Your current life: " + "<strong>" + this.playerLife + "</strong>");
                        this.finalDamageNumber += num;
                    }break;

                    case "legs":
                    if (this.playerDefended.includes("legs"))
                    {
                        Functions.updateChangeLog("content", "You have successfully blocked Legs!!!");
                    }
                    else
                    {
                        this.playerLife = this.playerLife - num;
                        Functions.updateChangeLog("content", "You got hit for " + "<strong>" + num + "</strong>" + " damage to the " + this.computerAttack[i] + ". Your current life: " + "<strong>" + this.playerLife + "</strong>");
                        this.finalDamageNumber += num;
                    }break;

                    case "arms":
                    if (this.playerDefended.includes("arms"))
                    {
                        Functions.updateChangeLog("content", "You have successfully blocked Arms!!!");
                    }
                    else
                    {
                        this.playerLife = this.playerLife - num;
                        Functions.updateChangeLog("content", "You got hit for " + "<strong>" + num + "</strong>" + " damage to the " + this.computerAttack[i] + ". Your current life: " + "<strong>" + this.playerLife + "</strong>");
                        this.finalDamageNumber += num;
                    }break;
                }
            }
            document.getElementById("playerBangNumber").innerHTML = this.finalDamageNumber;
            this.finalDamageNumber = 0;
        }

        document.getElementById('playerBorder').innerHTML = " Player " + this.playerLife + "/100 ";

        if (this.playerLife <= 0)   // if you life reaches 0, you lose the game
        {
            document.getElementById('playerBorder').innerHTML = " Player 0/100 ";
            document.getElementById("loseMessage").style.visibility = "visible";
            document.getElementById("check1").style.visibility = "hidden";
            document.getElementById("check2").style.visibility = "hidden";
            document.getElementById("check3").style.visibility = "hidden";
            document.getElementById("check4").style.visibility = "hidden";
            document.getElementById("check5").style.visibility = "hidden";
            document.getElementById("playerBang").style.visibility = "hidden";
            document.getElementById("playerBangNumber").style.visibility = "hidden";
            document.getElementById("computerBang").style.visibility = "hidden";
            document.getElementById("computerBangNumber").style.visibility = "hidden";
         /* setTimeout(function () {
                document.getElementById("loseMessage").style.visibility = "visible";
                if(!alert('You have been beaten!')){document.getElementById("loseMessage").style.visibility = "visible";}
            }, 500);*/
        }

        if (this.computerAttack.length >= 2)
        {
            this.computerAttack = [];
            this.playerDefended = [];
        }
    }
}