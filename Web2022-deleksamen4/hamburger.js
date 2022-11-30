let x = document.getElementById("hamburgermenu");
let smal = false;

window.onresize = function(event) {
    if(smal == true && window.innerWidth > 749 && x.classList.contains("hideme")){
        x.classList.remove("hideme");
        smal = false;
    }else if(smal == false && window.innerWidth < 750 && !x.classList.contains("hideme")){
        x.classList.add("hideme");
        smal = true;
    }
}

function toggleHamburger(){
    if (x.classList.contains("hideme")) {
        x.classList.remove("hideme");
    }else{
        x.classList.add("hideme");
    }
}