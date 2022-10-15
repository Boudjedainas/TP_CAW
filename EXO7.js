//----------------EXO7---------------
var cheat=document.querySelector("#maze");
cheat.addEventListener("mouseleave", function() {
var boundaries = document.getElementsByClassName("boundary");
for (var i = 0; i < boundaries.length; i++) {
boundaries[i].style.backgroundColor = "#ff8888";
    alert("don't cheat");  
}
});