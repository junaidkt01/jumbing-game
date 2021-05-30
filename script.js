var character = 
document.getElementById("character");
var block = document.getElementById("block");

function jump(){
    if(character.classList != "animation"){
        character.classList.add("animation")
    }
    
    setTimeout(function(){
        character.classList.remove("animation")
    },500)
}

var checkDead = setInterval(() => {
    var characterTop = 
    parseInt(window.getComputedStyle(character).getPropertyValue("top"))
    var blockLeft = 
    parseInt(window.getComputedStyle(block).getPropertyValue("left"))
    if(blockLeft<40 && blockLeft>0 && characterTop>=111){
            block.style.animation = "none"
            block.style.display = "none"
            alert("u lose...")
        }
}, 10);