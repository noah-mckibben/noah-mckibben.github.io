// This assigns a selector to a variable
const nav = document.querySelector('nav');
const darkToggle = document.querySelector('.darkToggle');
const button = nav.querySelector('button');
const project = document.querySelector('a.project')
const about = document.querySelector('a.about')
const home = document.querySelector('a.home')
const spanhome = document.querySelector('span.home')
const spanabout = document.querySelector('span.about')
const spanproject = document.querySelector('span.project')
//This allows the toggle icon to apply a class to the selector variable
darkToggle.addEventListener('click', () => {
    nav.classList.toggle('darkNav');
    button.classList.toggle('darkButton');
    project.classList.toggle('darkText');
    about.classList.toggle('darkText');
    home.classList.toggle('darkText');
    spanhome.classList.toggle('darkText');
    spanabout.classList.toggle('darkText');
    spanproject.classList.toggle('darkText');
})

//This is the function that is executed when clicking the moon icon
//The function will change the configuration of the background color
function background() {
    VANTA.WAVES({
        el: "html",
        mouseControls: true,
        touchControls: true,
        gyroControls: true,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x70704,
        waveHeight: 23.50,
        zoom: 0.97
    })
}


function hideAllContentDivs(){
        var contentDivs = document.getElementsByClassName('content');
        for (var i = 0; i < contentDivs.length; ++i) {
            var div = contentDivs[i];
            div.style.display='none';
        }
}