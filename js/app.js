const nav = document.querySelector('nav');
const darkToggle = document.querySelector('.darkToggle');
const button = nav.querySelector('button');
const project = document.querySelector('a.project')
const about = document.querySelector('a.about')
const home = document.querySelector('a.home')

darkToggle.addEventListener('click', () => {
    nav.classList.toggle('darkNav')
    button.classList.toggle('darkButton');
    project.classList.toggle('darkText');
    about.classList.toggle('darkText');
    home.classList.toggle('darkText');
})


function hideAllContentDivs(){
        var contentDivs = document.getElementsByClassName('content');
        for (var i = 0; i < contentDivs.length; ++i) {
            var div = contentDivs[i];
            div.style.display='none';
        }
}