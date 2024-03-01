function displayDiv(){
    document.getElementById("secondBlock").style.display="flex";
    
    document.getElementById("firstBlock").style.display="none";
    document.getElementById("rightArrow").disabled=true;
    document.getElementById("leftArrow").disabled=false;

}
function hideDiv(){
    document.getElementById("secondBlock").style.display="none";
    document.getElementById("firstBlock").style.display="flex";
    document.getElementById("leftArrow").disabled=true;
    document.getElementById("rightArrow").disabled=false;

}