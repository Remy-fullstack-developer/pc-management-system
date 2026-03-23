
function openNav() {
    document.getElementById("mySidenav").style.width = "240px";

}
function openNav2() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
const delayTime = 1000;
function redirectToAnotherPage() {
    window.location.href = '#clm1';
    document.getElementById('clm1').style.display = "block";
    document.getElementById('loading').style.display = "none";
}
setTimeout(redirectToAnotherPage, delayTime);

function update(){
    document.getElementById("update").style.display="block";
    document.getElementById("register").style.display="none";
}
function closeReg(){
    document.getElementById("update").style.display="none";
    document.getElementById("register").style.display="block";
}
