for(var i=0; i<document.querySelectorAll(".hello").length; i++){
    document.querySelectorAll(".hello")[i].addEventListener("click",function(){
         var buttonInnerHTML=this.innerHTML;
         makesound(buttonInnerHTML);
    });
}
document.addEventListener("keypress", function(event){
    makesound(event.key);
});
function makesound(key){

    switch (key) {
        case "Q":
            var audioQ=new Audio("sounds/clash-cymbals.mp3");
            audioQ.play();
            break;
        case "W":
            var audioW=new Audio("sounds/hi-hat.mp3");
            audioW.play();
            break;
        case "E":
                var audioE=new Audio("sounds/high-tom.mp3");
                audioE.play();
                break;
        case "R":
                    var audioR=new Audio("sounds/Snare-Drum.mp3");
                    audioR.play();
                    break;
        case "H":
            var audioA=new Audio("sounds/kick-drum.mp3");
            audioA.play();
            break;
        case "J":
            var audioS=new Audio("sounds/floor-tom.mp3");
            audioS.play();
            break;
        case "K":
            var audioD=new Audio("sounds/mid-tom.mp3");
            audioD.play();
            break;
        case "L":
            var audioF=new Audio("sounds/ride-cymbal.mp3");
            audioF.play();
            break;            
        default: console.log();
    }
}
