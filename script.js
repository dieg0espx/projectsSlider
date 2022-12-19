
let pos = 0;
const box = document.getElementById('wrapper');
const imgCounter = box.getElementsByTagName('*').length - 1 ;

function nextImg(){
    pos ++;
    for(i = 0; i < imgCounter + 1; i ++ ){
        if(i == pos){
            document.getElementById('img' + i).style.display = "block";
        } else {
            document.getElementById('img' + i).style.display = "none";
        }
    }
    checkBtns();
}
function prevImg(){
    pos --;
    for(i = 0; i < imgCounter; i ++ ){
        if(i == pos){
            document.getElementById('img' + i).style.display = "block";
        } else {
            document.getElementById('img' + i).style.display = "none";
        }
    }
    checkBtns();
}
function checkBtns(){
    if(pos == imgCounter){
        document.getElementById('btnNext').style.visibility = "hidden";
    } else {
        document.getElementById('btnNext').style.visibility = "visible";
    }
     if (pos == 0) {
        document.getElementById('btnPrev').style.visibility = "hidden";
    } else {
        document.getElementById('btnPrev').style.visibility = "visible";
    }
}

checkBtns();