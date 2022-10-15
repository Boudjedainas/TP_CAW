//----------------------------EXO4----------------
window.onload=function(){
    document.getElementById("start").addEventListener("click", Restart);
  function Restart() {
    var elements = document.getElementsByClassName('boundary'); 
             for(var i = 0; i < elements.length; i++){
                 elements[i].style.backgroundColor = "#eeeeee";
             }
    
  }
  }