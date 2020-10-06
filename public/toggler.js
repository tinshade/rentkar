function togglepm(name){
    target = document.getElementById(name).className;
    if(target == "fas fa-plus"){
        target = "fas fa-minus";
    }else{
        target = "fas fa-plus";
    }
}