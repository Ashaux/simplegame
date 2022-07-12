var character =
document.getElementById("character");
var block = document.getElementById("block");
function jump(){
    if(character.classList != "animate"){
    character.classList.add("animate");
    }
    setTimeout(function(){
        character.classList.remove("animate");
    },500);
}

var character =
document.getElementById("character");
var blocktwo = document.getElementById("blocktwo");
function jump(){
    if(character.classList != "animate"){
    character.classList.add("animate");
    }
    setTimeout(function(){
        character.classList.remove("animate");
    },400);
}

var checkDead = setInterval(function(){
    var characterTop =
    parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft =
    parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if (blockLeft<20 && blockLeft>0 && characterTop>=130){
        block.style.animation ="none";
        block.style.display ="none";
        alert("Game Over"); 
        }
}, 10);

var checkDead = setInterval(function(){
    var characterTop =
    parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft =
    parseInt(window.getComputedStyle(blocktwo).getPropertyValue("left"));

    if (blockLeft<20 && blockLeft>0 && characterTop>=130){
        block.style.animation ="none";
        block.style.display ="none";
        alert("Game Over"); 
        }
 
}, 10);
       

