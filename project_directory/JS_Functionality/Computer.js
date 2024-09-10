class Computer
{
    constructor()
    {
        this.computerLife = 100;
    }

    getComputerLife()
    {
        return this.computerLife;
    }
    setComputerLife(life)
    {
        this.computerLife = life;
    }

    static getComputerdefend() 
    {
        var defense = ['head', 'body', 'waist', 'legs', 'arms'];
        var defended = defense[Math.floor(Math.random() * defense.length)];
        return defended;
    }
    static getComputerattack() 
    {
        var attacks = ['head', 'body', 'waist', 'legs', 'arms'];
        var attacked= attacks[Math.floor(Math.random() * attacks.length)];
        return attacked;
    }
}