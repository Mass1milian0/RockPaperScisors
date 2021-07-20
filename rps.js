pPoints = 0;
gPoints = 0;
startup = function(){
    startButtons = document.querySelector('.start button');
    startScreen = document.querySelector('.start');
    ux = document.querySelector('.ux');
    startScreen.classList.add("gameout")
    ux.classList.add("gamein");
    ux.classList.remove("gameout");
    game();

}

updateScores = function(){
    document.getElementById("pscore").innerHTML = pPoints;
    document.getElementById("gscore").innerHTML = gPoints;
}

document.getElementById("res").addEventListener("click",function(){
    winlose = document.querySelector('.winlose');
    winlose.classList.add("gameout");
    winlose.classList.remove("gamein");
    ux.classList.add("gamein");
    ux.classList.remove("gameout");
    bgroup = document.querySelector('.bgroup');
    bgroup.classList.remove("gameout");
    bgroup.classList.add("gamein");
    document.getElementById("rps").classList.remove("gameout");
    document.getElementById("rps").classList.add("gamein");
    document.getElementsByClassName("pout")[0].setAttribute("src","paper.png");
    document.getElementsByClassName("gout")[0].setAttribute("src","paper.png");

})

gameend = function(res){
    winlose = document.querySelector('.winlose');
    winlose.classList.add("gamein");
    winlose.classList.remove("gameout");
    bgroup = document.querySelector('.bgroup');
    bgroup.classList.add("gameout");
    bgroup.classList.remove("gamein");
    document.getElementById("rps").classList.add("gameout");
    document.getElementById("rps").classList.remove("gamein");
    switch(res){
        case 0: //draw
            document.getElementById("winloseout").innerHTML = "Draw";
        break;
        case 1: //win
            document.getElementById("winloseout").innerHTML = "Win";
            pPoints++;
            updateScores();
        break;
        case -1: //lose
            document.getElementById("winloseout").innerHTML = "Lose";
            gPoints++;
            updateScores()
        break;
    }
}

game = function(){

    cpuout = function(){
        rand = Math.floor( Math.random() * 2)
        switch(rand){
            case 0: return "rock";
            case 1: return "paper";
            case 2: return "scissors";
        }
    }
    
    playerBTN = document.getElementsByClassName("bgroup");
    for( x of playerBTN[0].children){
        x.addEventListener('click',function(){
            document.getElementsByClassName("pout")[0].setAttribute("src",this.innerText + ".png")
            rand = cpuout()
            document.getElementsByClassName("gout")[0].setAttribute("src",rand + ".png")
            if(this.innerText == rand) gameend(0);

            else if(
                (this.innerText == "scissors" && rand == "rock") ||
                (this.innerText == "paper" && rand == "scissors" ) ||
                (this.innerText == "rock" && rand == "paper")
                ) gameend(-1);
            else gameend(1);
        })
    }
}
