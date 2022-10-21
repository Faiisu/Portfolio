let scrollTrack = document.getElementById("pageTracker");

//on open webside
let HelloWorld = document.getElementById("HelloWorld");

function getWidth() {
    return Math.max(
        document.body.offsetWidth,
    );
}

function getHeight() {
    return Math.max(
        document.body.offsetHeight,
    );
}
  
// console.log('Width:  ' +  getWidth() );
// console.log('Height: ' + getHeight() );
const rect = document.getElementById("MyProfile").getBoundingClientRect();

window.addEventListener("scroll", function(){
    scrollTrack.style.width = window.scrollY/(document.body.scrollHeight-770) * getWidth() + "px";

    if(this.window.scrollX > 716.7999877929688);

})

function movePageto(moveto){
    var moveat;
    if(moveto == "move1") moveat = document.querySelector("#MyProfile").getBoundingClientRect().top;
    if(moveto == "move2") moveat = document.querySelector("#Activity").getBoundingClientRect().top;
    if(moveto == "move3") moveat = document.querySelector("#Certificate").getBoundingClientRect().top;

    window.scrollTo(0,moveat+window.scrollY);
}

function changeWord(thatId, changeTo){
    let _Element = document.getElementById(thatId);
    _Element.innerHTML = changeTo;
}

var SecondSayHi = document.getElementById("SecondSayHi");
var ThirdSayHi = document.getElementById("ThirdSayHi");
SecondSayHi.addEventListener("animationend",()=>{
    SecondSayHi.remove();
})
ThirdSayHi.addEventListener("animationend",()=>{
    ThirdSayHi.remove();
    window.scrollTo(0,document.querySelector("#MyProfile").getBoundingClientRect().top+window.scrollY);
})