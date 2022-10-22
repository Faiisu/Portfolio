let scrollTrack = document.getElementById("pageTracker");
const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

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

window.addEventListener("scroll", function(){
    scrollTrack.style.width = window.scrollY/(document.body.scrollHeight-770) * getWidth() + "px";
    if(this.window.scrollX > 716.7999877929688);
    // this.document.getElementById("firstText").style.transform = `translate(0,${a}%)`;
});


function movePageto(moveto){
    var moveat;
    if(moveto == "move1") moveat = document.querySelector("#FirstTextContainer").getBoundingClientRect().top;
    if(moveto == "move2") moveat = document.querySelector("#Activity").getBoundingClientRect().top;
    if(moveto == "move3") moveat = document.querySelector("#Certificate").getBoundingClientRect().top;

    window.scrollTo(0,moveat+window.scrollY);
}

function changeWord(thatId, changeTo){
    let _Element = document.getElementById(thatId);
    _Element.innerHTML = changeTo;
}

const appearOption = {
    threshold: 0,
    rootMargin: "0px 0px -200px  0px"
};

const appearOnScroll = new IntersectionObserver((entries,appearOnScroll)=>{
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return;
        }
        else{
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }
    })
},appearOption)

faders.forEach(fader =>{
    appearOnScroll.observe(fader);
})

sliders.forEach(slider =>{
    appearOnScroll.observe(slider);
})