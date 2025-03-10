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

$("navbar").click(function () {
        $(".a").removeClass("active")
        $(this).addClass("active")
})

function hideAllContentDivs(){
        var contentDivs = document.getElementsByClassName('content');
        for (var i = 0; i < contentDivs.length; ++i) {
            var div = contentDivs[i];
            div.style.display='none';
        }
}