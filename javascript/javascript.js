let scrollInfo = document.querySelector('#scrolltrack');
let Profile = document.querySelector("#MyProfile");

window.addEventListener('scroll', () => {
    let infoText = 'X = ' + window.scrollX;
    infoText += ', Y = ' + window.scrollY;
    scrollInfo.innerHTML = infoText;
})

function movePageto(){
    window.scrollTo(0, Profile.scrollHeight-(793-755));
}