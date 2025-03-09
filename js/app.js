const nav = document.querySelector('nav');
const darkToggle = document.querySelector('.darkToggle');
const button = nav.querySelector('button');
const body = document.querySelector('body')
const a = document.querySelector('a')
const html = document.querySelector('html')

darkToggle.addEventListener('click', () => {
    nav.classList.toggle('darkNav');
    button.classList.toggle('darkButton');
    body.classList.toggle('darkHTML')
    a.classList.toggle('darkText')
    html.classList.toggle('darkHTML')

})