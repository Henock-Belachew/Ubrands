var shoes = document.getElementById("shoes_id");
var bar = document.getElementById("bars");
var barItem = document.getElementById("baritem");
var brandNike = document.getElementById("nike");
var brandt = document.getElementById("brand");
function show_brands(){
    var shoes = document.getElementById("shoes_id");
    if(shoes.style.display=="block"){
        shoes.style.display = "none";
    }
    else{
        shoes.style.display = "block"
        shoes.style.borderRadius = "10px"
    }
}
shoes.addEventListener('mouseover', function(){
    startAnim();
}, false);
function show_bar() {
    if(barItem.style.display=="block"){
        barItem.style.display = "none";
    }
    else{
        barItem.style.display = "block"
        barItem.style.borderRadius = "10px"
    }
}
function show_nike(){
    brandt.innerText="Nike"
}