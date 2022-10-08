function yo(){
    document.getElementById("pp").style.transitionDuration = "0.5s";
    document.getElementById("pa").style.transitionDuration = "0.5s";
    document.getElementById("pb").style.transitionDuration = "0.5s";
    document.getElementById("pe").style.transitionDuration = "0.5s";
}
function dark(){
    document.getElementById("men").style.backgroundColor = "cadetblue";
    document.getElementById("bod").style.backgroundColor = "darkgrey";
    document.getElementById("foote").style.backgroundColor = "#1E1E1E5B";
    document.getElementById("btn").style.backgroundColor = "antiquewhite";
}
function white(){
    document.getElementById("men").style.transitionDuration = "0.5s";
    document.getElementById("bod").style.transitionDuration = "0.5s";
    document.getElementById("foote").style.transitionDuration = "0.5s";
    document.getElementById("btn").style.transitionDuration = "0.5s";
    document.getElementById("men").style.backgroundColor = "#87cefa";
    document.getElementById("bod").style.backgroundColor = "antiquewhite";
    document.getElementById("foote").style.backgroundColor = "#d9b788";
    document.getElementById("btn").style.backgroundColor = "antiquewhite";
}

function asa(){
    document.getElementById("asi").style.transitionDuration = "0.5s";
    document.getElementById("asi").style.opacity = 0;
    document.getElementById("des1").style.transitionDuration = "0.5s";
    document.getElementById("des1").style.opacity = 0;
}
function asao(){
    document.getElementById("asi").style.transitionDuration = "0.5s";
    document.getElementById("asi").style.opacity = 0.6;
    document.getElementById("des1").style.transitionDuration = "0.5s";
    document.getElementById("des1").style.opacity = 0.7;
}
function bsa(){
    document.getElementById("bsi").style.transitionDuration = "0.5s";
    document.getElementById("bsi").style.opacity = 0;
    document.getElementById("des2").style.transitionDuration = "0.5s";
    document.getElementById("des2").style.opacity = 0;
}
function bsao(){
    document.getElementById("bsi").style.transitionDuration = "0.5s";
    document.getElementById("bsi").style.opacity = 0.6;
    document.getElementById("des2").style.transitionDuration = "0.5s";
    document.getElementById("des2").style.opacity = 0.7;
}
function csa(){
    document.getElementById("csi").style.transitionDuration = "0.5s";
    document.getElementById("csi").style.opacity = 0;
    document.getElementById("des3").style.transitionDuration = "0.5s";
    document.getElementById("des3").style.opacity = 0;
}
function csao(){
    document.getElementById("csi").style.transitionDuration = "0.5s";
    document.getElementById("csi").style.opacity = 0.6;
    document.getElementById("des3").style.transitionDuration = "0.5s";
    document.getElementById("des3").style.opacity = 0.7;
}
function dsa(){
    document.getElementById("dsi").style.transitionDuration = "0.5s";
    document.getElementById("dsi").style.opacity = 0;
    document.getElementById("des4").style.transitionDuration = "0.5s";
    document.getElementById("des4").style.opacity = 0;
}
function dsao(){
    document.getElementById("dsi").style.transitionDuration = "0.5s";
    document.getElementById("dsi").style.opacity = 0.6;
    document.getElementById("des4").style.transitionDuration = "0.5s";
    document.getElementById("des4").style.opacity = 0.7;
}
function esa(){
    document.getElementById("esi").style.transitionDuration = "0.5s";
    document.getElementById("esi").style.opacity = 0;
    document.getElementById("des5").style.transitionDuration = "0.5s";
    document.getElementById("des5").style.opacity = 0;
}
function esao(){
    document.getElementById("esi").style.transitionDuration = "0.5s";
    document.getElementById("esi").style.opacity = 0.6;
    document.getElementById("des5").style.transitionDuration = "0.5s";
    document.getElementById("des5").style.opacity = 0.7;
}
function fsa(){
    document.getElementById("fsi").style.transitionDuration = "0.5s";
    document.getElementById("fsi").style.opacity = 0;
    document.getElementById("des6").style.transitionDuration = "0.5s";
    document.getElementById("des6").style.opacity = 0;
}
function fsao(){
    document.getElementById("fsi").style.transitionDuration = "0.5s";
    document.getElementById("fsi").style.opacity = 0.6;
    document.getElementById("des6").style.transitionDuration = "0.5s";
    document.getElementById("des6").style.opacity = 0.7;
}
function gsa(){
    document.getElementById("gsi").style.transitionDuration = "0.5s";
    document.getElementById("gsi").style.opacity = 0;
    document.getElementById("des7").style.transitionDuration = "0.5s";
    document.getElementById("des7").style.opacity = 0;
}
function gsao(){
    document.getElementById("gsi").style.transitionDuration = "0.5s";
    document.getElementById("gsi").style.opacity = 0.6;
    document.getElementById("des7").style.transitionDuration = "0.5s";
    document.getElementById("des7").style.opacity = 0.7;
}
function hsa(){
    document.getElementById("hsi").style.transitionDuration = "0.5s";
    document.getElementById("hsi").style.opacity = 0;
    document.getElementById("des8").style.transitionDuration = "0.5s";
    document.getElementById("des8").style.opacity = 0;
}
function hsao(){
    document.getElementById("hsi").style.transitionDuration = "0.5s";
    document.getElementById("hsi").style.opacity = 0.6;
    document.getElementById("des8").style.transitionDuration = "0.5s";
    document.getElementById("des8").style.opacity = 0.7;
}
function isa(){
    document.getElementById("isi").style.transitionDuration = "0.5s";
    document.getElementById("isi").style.opacity = 0;
    document.getElementById("des9").style.transitionDuration = "0.5s";
    document.getElementById("des9").style.opacity = 0;
}
function isao(){
    document.getElementById("isi").style.transitionDuration = "0.5s";
    document.getElementById("isi").style.opacity = 0.6;
    document.getElementById("des9").style.transitionDuration = "0.5s";
    document.getElementById("des9").style.opacity = 0.7;
}
function lien(n){
    if (n===1) {
        window.location.href = "https://facebook.com";
    }
    if (n===2){
        window.location.href = "https://twitter.com";
    }
    if (n===3){
        window.location.href = "https://linkedin.fr";
    }
    if (n===4){
        window.location.href = "https://instagram.com";
    }
    if (n===5){
        window.location.href = "https://behance.net";
    }
}

var currentImg = 0;
var myImg = document.getElementById("imag");

function prev() {
    currentImg--;
    if(currentImg < 0){
        currentImg = nbImg - 1;
    }
    myImg.src = images[currentImg];
}

function next() {
    currentImg++;
    if(currentImg > nbImg - 1){
        currentImg = 0;
    }
    myImg.src = images[currentImg];
}

function bandeautrue(){
    document.getElementById('basimg').style.transitionDuration = "0.5s";
    document.getElementById('basimg').style.opacity = 1;
    document.getElementById('left').style.transitionDuration = "0.5s";
    document.getElementById('left').style.opacity = 1;
    document.getElementById('right').style.transitionDuration = "0.5s";
    document.getElementById('right').style.opacity = 1;
}
function bandeaufalse(){
    document.getElementById('basimg').style.transitionDuration = "0.5s";
    document.getElementById('basimg').style.opacity = 0;
    document.getElementById('left').style.transitionDuration = "0.5s";
    document.getElementById('left').style.opacity = 1;
    document.getElementById('right').style.transitionDuration = "0.5s";
    document.getElementById('right').style.opacity = 1;
}

function overleft(){
    document.getElementById('btprec').style.transitionDuration = "0.2s";
    document.getElementById('btprec').style.width = "1.5rem";
    document.getElementById('btprec').style.height = "1.5rem";
}
function outleft(){
    document.getElementById('btprec').style.transitionDuration = "0.2s";
    document.getElementById('btprec').style.width = "1rem";
    document.getElementById('btprec').style.height = "1rem";
}
function overright(){
    document.getElementById('btsuiv').style.transitionDuration = "0.2s";
    document.getElementById('btsuiv').style.width = "1.5rem";
    document.getElementById('btsuiv').style.height = "1.5rem";
}
function outright(){
    document.getElementById('btsuiv').style.transitionDuration = "0.2s";
    document.getElementById('btsuiv').style.width = "1rem";
    document.getElementById('btsuiv').style.height = "1rem";
}
function reseover(){
    document.getElementById('pass').style.transitionDuration = "0.3s";
    document.getElementById('pass').style.opacity = 1;
    document.getElementById('ppass').style.transitionDuration = "0.3s";
    document.getElementById('ppass').style.scale = 1.05;
    document.getElementById('passimage').style.transitionDuration = "0.3s";
    document.getElementById('passimage').style.scale = 1.05;
}
function reseout(){
    document.getElementById('pass').style.opacity = 0.6;
    document.getElementById('ppass').style.scale = 1;
    document.getElementById('passimage').style.scale = 1;
}
