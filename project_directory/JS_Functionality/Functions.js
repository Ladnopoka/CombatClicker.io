class Functions
{
    constructor()
    {
        this.positionList = ['head', 'body', 'waist', 'legs', 'arms'];
    }

    static randomNum(min, max) // min and max included 
    {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    
    static updateChangeLog(divName, data) 
    {
        var elm = document.getElementById(divName); // get element 
        elm.innerHTML = ("<br />" + data + elm.innerHTML);     // update content
    }
}