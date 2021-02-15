var character = document.getElementById("character");
var block = document.getElementById("block");
var cInterval = 0;

function jump()
{
    if (character.classList != "animate")
    {
        clearInterval(cInterval);
        character.classList.add("animate");
        cInterval = setInterval(function ()
        {
            character.classList.remove("animate");
        }, 500);
    }
}

var checkDeath = setInterval(function()
{
    var cTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var bLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (bLeft > 20 && bLeft < 40 && cTop >= 130)
    {
        block.style.animation = "none";
        block.style.display = "none";
        alert("You unalive.\nRefresh to retry.");
    }
}, 10);