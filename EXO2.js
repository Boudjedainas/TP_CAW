//----------------------EXO2---------------------------------------
window.onload=function(){
    const boundaries= document.getElementsByClassName('boundary');

    for (const boundary of boundaries) {
        boundary.addEventListener("mouseover", AllBoundaries);
           function AllBoundaries() {     
             var elements = document.getElementsByClassName('boundary'); 
             for(var i = 0; i < elements.length; i++){
                 elements[i].style.backgroundColor = "#ff8888";
             }
           }
    }
}