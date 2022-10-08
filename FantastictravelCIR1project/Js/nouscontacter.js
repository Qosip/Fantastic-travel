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

function verifcontact(){
    var sujet = document.getElementById('formun').value;
    var nberror = 0;
    if (sujet === ""){
        alert("Sujet vide !");
        document.getElementById('formun').style.borderColor = "red";
        nberror++;
    }
    else {
        document.getElementById('formun').style.borderColor = "lightgreen";
    }
    var texte = document.getElementById('formdeux').value;
    if (texte === ""){
        alert("Texte vide !");
        document.getElementById('formdeux').style.borderColor = "red";
        nberror++;
    }
    else {
        document.getElementById('formdeux').style.borderColor = "lightgreen";
    }
    var mail = document.getElementById('formtrois').value;
    if (mail === ""){
        alert("Mail vide !");
        document.getElementById('formtrois').style.borderColor = "red";
        nberror++;
    }
    else {
        document.getElementById('formtrois').style.borderColor = "lightgreen";
    }
    if (nberror===0){
        alert("Demande Envoyée !");
    }
}