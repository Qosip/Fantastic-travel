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
function f1(){
    document.getElementById('rad1').checked = 'True';
    document.getElementById('page1').style.display = "block";
    document.getElementById('page2').style.display = "none";
    document.getElementById('page3').style.display = "none";
    document.getElementById('page4').style.display = "none";
}
function f2(){
    document.getElementById('page1').style.display = "none";
    document.getElementById('page2').style.display = "block";
    document.getElementById('page3').style.display = "none";
    document.getElementById('page4').style.display = "none";
}
function f3(){
    document.getElementById('page1').style.display = "none";
    document.getElementById('page2').style.display = "none";
    document.getElementById('page3').style.display = "block";
    document.getElementById('page4').style.display = "none";
}
function f4(){
    document.getElementById('page1').style.display = "none";
    document.getElementById('page2').style.display = "none";
    document.getElementById('page3').style.display = "none";
    document.getElementById('page4').style.display = "block";
}

function change_valeur() {
    var myImg = document.getElementById("idest");
    var images = ["../Ressources/55Cancrie1.jpeg","../Ressources/Arcane1.png","../Ressources/Asgard1.png","../Ressources/darvaza.jpg","../Ressources/Etoilenoire1.jpg","../Ressources/papy.png","../Ressources/Onepiece1.png","../Ressources/Pandora1.jpg","../Ressources/rivendell.jpg"];
    select = document.getElementById("ch");
    choice = select.selectedIndex;
    valeur = select.options[choice].value;
    myImg.src = images[valeur];
}

function passage() {
    var myImg = document.getElementById("idest");
    var images = ["../Ressources/55Cancrie1.jpeg","../Ressources/Arcane1.png","../Ressources/Asgard1.png","../Ressources/darvaza.jpg","../Ressources/Etoilenoire1.jpg","../Ressources/papy.png","../Ressources/Onepiece1.png","../Ressources/Pandora1.jpg","../Ressources/rivendell.jpg"];

    var paramsString = window.location.href;
    var searchParams = new URLSearchParams(paramsString);
    for (let p of searchParams) {
        var x  = p[1];
    }
    if (x>=1 && x<=9 ){
        myImg.src = images[x];
        document.getElementById("ch").value = x;
    }
    else{
        myImg.src = images[0];
    }
}

var pass = 0;

function precedent(){
    if (document.querySelector('#rad > [value="11"]').checked === true){
        f1();
        document.getElementById('rad1').checked = 'True';
        document.getElementById('btprec').style.opacity = 0;
    }
    else if (document.querySelector('#rad > [value="12"]').checked === true){
        f2();
        document.getElementById('rad2').checked = 'True';
        document.getElementById('btsuiv').style.display = "block";
    }
    else if (document.querySelector('#rad > [value="13"]').checked === true){
        f3();
        document.getElementById('rad3').checked = 'True';
        if (pass===1){
            document.getElementById('btsuiv').style.display = "block";
        }
    }
}

function suivant(){
    if (document.querySelector('#rad > [value="10"]').checked === true){
        f2();
        document.getElementById('rad2').checked = 'True';
        document.getElementById('btprec').style.opacity = 1;
    }
    else if (document.querySelector('#rad > [value="11"]').checked === true){
        f3();
        document.getElementById('rad3').checked = 'True';
        if (pass===0) {
            document.getElementById('btsuiv').style.display = "none";
        }
    }
    else if (document.querySelector('#rad > [value="12"]').checked === true){
        f4();
        document.getElementById('rad4').checked = 'True';
        document.getElementById('btsuiv').style.display = "none";
    }
}
function verification(){
    var datea = document.getElementById('date_a').value;
    var dater = document.getElementById('date_r').value;
    var js_nom = document.getElementById('nom').value;
    var js_prenom = document.getElementById('prenom').value;
    var js_mail = document.getElementById('mail').value;
    var js_tele = document.getElementById('tele').value;
    var js_num = document.getElementById('Num').value;
    var js_detend = document.getElementById('deten').value;
    var js_exp = document.getElementById('exp').value;
    var js_CVV = document.getElementById('CVV').value;
    var nberror = 0;
    const consterr = ["    - Date aller\n","    - Date retour\n","    - Nom\n","    - Prenom\n","    - Mail\n","    - Téléphone\n","    - Numéro de carte\n","    - Détenteur de carte\n","    - Date d'expiration\n","    - CVV\n"]
    var choix = 0;
    document.getElementById('err').style.backgroundColor = "#ffd8d8";
    document.getElementById('err').style.borderColor = "red";
    document.getElementById('infoerror').innerText = "";
    if (datea === ""){
        document.getElementById('terr').style.display = "block";
        document.getElementById('err').style.display = "block";
        document.getElementById('infoerror').textContent += consterr[choix];
        document.getElementById('date_a').style.borderColor = "red";
        nberror++;
        choix++;
    }
    else {
        document.getElementById('date_a').style.borderColor = "lightgreen";
        choix++;
    }
    if (dater === ""){
        document.getElementById('terr').style.display = "block";
        document.getElementById('err').style.display = "block";
        document.getElementById('infoerror').textContent += consterr[choix];
        document.getElementById('date_r').style.borderColor = "red";
        choix++;
        nberror++;
    }
    else {
        document.getElementById('date_r').style.borderColor = "lightgreen";
        choix++;
    }
    if (js_nom === ""){
        document.getElementById('terr').style.display = "block";
        document.getElementById('err').style.display = "block";
        document.getElementById('infoerror').textContent += consterr[choix];
        document.getElementById('nom').style.borderColor = "red";
        choix++;
        nberror++;
    }
    else {
        document.getElementById('nom').style.borderColor = "lightgreen";
        choix++;
    }
    if (js_prenom === ""){
        document.getElementById('terr').style.display = "block";
        document.getElementById('err').style.display = "block";
        document.getElementById('infoerror').textContent += consterr[choix];
        document.getElementById('prenom').style.borderColor = "red";
        choix++;
        nberror++;
    }
    else {
        document.getElementById('prenom').style.borderColor = "lightgreen";
        choix++;
    }
    if (js_mail === ""){
        document.getElementById('terr').style.display = "block";
        document.getElementById('err').style.display = "block";
        document.getElementById('infoerror').textContent += consterr[choix];
        document.getElementById('mail').style.borderColor = "red";
        choix++;
        nberror++;
    }
    else {
        document.getElementById('mail').style.borderColor = "lightgreen";
        choix++;
    }
    if (js_tele === "" || js_tele<0 || js_tele>9999999999){
        document.getElementById('terr').style.display = "block";
        document.getElementById('err').style.display = "block";
        document.getElementById('infoerror').textContent += consterr[choix];
        document.getElementById('tele').style.borderColor = "red";
        choix++;
        nberror++;
    }
    else {
        document.getElementById('tele').style.borderColor = "lightgreen";
        choix++;
    }
    if (js_num === "" || js_num<0 || js_num>=9999999999999999){
        document.getElementById('terr').style.display = "block";
        document.getElementById('err').style.display = "block";
        document.getElementById('infoerror').textContent += consterr[choix];
        document.getElementById('Num').style.borderColor = "red";
        choix++;
        nberror++;
    }
    else {
        document.getElementById('Num').style.borderColor = "lightgreen";
        choix++;
    }
    if (js_detend === ""){
        document.getElementById('terr').style.display = "block";
        document.getElementById('err').style.display = "block";
        document.getElementById('infoerror').textContent += consterr[choix];
        document.getElementById('deten').style.borderColor = "red";
        choix++;
        nberror++;
    }
    else {
        document.getElementById('deten').style.borderColor = "lightgreen";
        choix++;
    }
    if (js_exp === ""){
        document.getElementById('terr').style.display = "block";
        document.getElementById('err').style.display = "block";
        document.getElementById('infoerror').textContent += consterr[choix];
        document.getElementById('exp').style.borderColor = "red";
        choix++;
        nberror++;
    }
    else {
        document.getElementById('exp').style.borderColor = "lightgreen";
        choix++;
    }
    if (js_CVV === "" || js_CVV<0 || js_CVV>999){
        document.getElementById('terr').style.display = "block";
        document.getElementById('err').style.display = "block";
        document.getElementById('infoerror').textContent += consterr[choix];
        document.getElementById('CVV').style.borderColor = "red";
        choix++;
        nberror++;
    }
    else {
        document.getElementById('CVV').style.borderColor = "lightgreen";
        choix++;
    }
    if (nberror===0){
        document.getElementById('terr').style.display = "none";
        document.getElementById('err').style.display = "block";
        document.getElementById('err').style.backgroundColor = "lightgreen";
        document.getElementById('err').style.borderColor = "green";
        document.getElementById('acces').style.display = "block";
        document.getElementById('btsuiv').style.display = "block";
        pass = 1;
        fus();
    }
}
function decolage({ timing, draw, duration }) {
    let start = performance.now();
    requestAnimationFrame(function animate(time) {
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) timeFraction = 1;
        let progress = timing(timeFraction);
        draw(progress);

        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        }
    });
}

function fus() {
    decolage({
        duration: 2000,
        timing: function back(timeFraction) {
            return -Math.pow(timeFraction, 7) * 2;
        },
        draw: function (progress) {
            document.getElementById('fusee').style.top = progress * 600 + "px";
        },
    });
    document.getElementById('smoke').style.transitionDuration = "10s";
    document.getElementById('smoke').style.opacity = "1";
    document.getElementById('bal').style.transitionDuration = "10s";
    document.getElementById('bal').style.opacity = "1";
    document.getElementById('balo').style.transitionDuration = "10s";
    document.getElementById('balo').style.opacity = "1";
};
function recapi(){
    var pnom = document.getElementById("nom").value;
    var pnoms = document.getElementById("r_nom");
    pnoms.innerText = "";
    pnoms.textContent += pnom;
    var pprenom = document.getElementById("prenom").value;
    var pprenoms = document.getElementById("r_prenom");
    pprenoms.innerText = "";
    pprenoms.textContent += pprenom;
    var pmail = document.getElementById("mail").value;
    var pmails = document.getElementById("r_mail");
    pmails.innerText = "";
    pmails.textContent += pmail;
    var ptele = document.getElementById("tele").value;
    var pteles = document.getElementById("r_tel");
    pteles.innerText = "";
    pteles.textContent += ptele;
    var pdatea = document.getElementById("date_a").value;
    var pdateas = document.getElementById("r_datea");
    pdateas.innerText = "";
    pdateas.textContent += pdatea;
    var pdater = document.getElementById("date_r").value;
    var pdaters = document.getElementById("r_dater");
    pdaters.innerText = "";
    pdaters.textContent += pdater;
    var pnum = document.getElementById("Num").value;
    var pnums = document.getElementById("r_num");
    pnums.innerText = "";
    pnums.textContent += pnum;
    var pdeten = document.getElementById("deten").value;
    var pdetens = document.getElementById("r_deten");
    pdetens.innerText = "";
    pdetens.textContent += pdeten;
    var pexp = document.getElementById("exp").value;
    var pexps = document.getElementById("r_exp");
    pexps.innerText = "";
    pexps.textContent += pexp;
    var pcvv = document.getElementById("CVV").value;
    var pcvvs = document.getElementById("r_CVV");
    pcvvs.innerText = "";
    pcvvs.textContent += pcvv;
    var psujet = document.getElementById("sujet").value;
    var psujets = document.getElementById("r_sujet");
    psujets.innerText = "";
    psujets.textContent += psujet;
    var pmsg = document.getElementById("msg").value;
    var pmsgs = document.getElementById("r_msg");
    pmsgs.innerText = "";
    pmsgs.textContent += pmsg;
    var nomdest = ["55 Cancrie-E","Arcane","Asgard","Darvaza","L'Etoile noire","La Kame house","One piece","Pandora","La Terre du milieu"];
    var images = ["../Ressources/55Cancrie1.jpeg","../Ressources/Arcane1.png","../Ressources/Asgard1.png","../Ressources/darvaza.jpg","../Ressources/Etoilenoire1.jpg","../Ressources/papy.png","../Ressources/Onepiece1.png","../Ressources/Pandora1.jpg","../Ressources/rivendell.jpg"];
    var pos = document.getElementById('ch').value;
    document.getElementById('r_destnom').innerText = "";
    document.getElementById('r_destnom').innerText = nomdest[pos];
    document.getElementById('msgf').innerText = "";
    document.getElementById('msgf').innerText = nomdest[pos];
    document.getElementById('r_img').src = images[pos];
}
function dissip(){
    document.getElementById('acces').style.display = "none";
    document.getElementById('err').style.display = "none"
}