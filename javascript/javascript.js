let scrollInfo = document.querySelector('#scrolltrack');

window.addEventListener('scroll', () => {
    let infoText = 'X = ' + window.scrollX;
    infoText += ', Y = ' + window.scrollY;
    scrollInfo.innerHTML = infoText;
})

function movePageto(moveto){
    var moveto;
    if(moveto=='move1') moveto = 716.7999877929688;
    else if(moveto=='move2') moveto = 1516.800048828125;
    else if(moveto=='move3') moveto = 2325.60009765625;
    window.scroll({
        top: moveto,
        behavior:'smooth'
    })
}