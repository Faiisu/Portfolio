let scrollInfo = document.querySelector("#scrolltrack");
let scrollTrack = document.getElementById("pageTracker");
let SelectContant = document.getElementById("SelectContant");
let name_header = document.getElementById("name_header");

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
  
console.log('Width:  ' +  getWidth() );
console.log('Height: ' + getHeight() );

window.addEventListener("scroll", function(){
    // console.log(window.scrollY/(document.body.scrollHeight-770) * getWidth());
    scrollTrack.style.width = window.scrollY/(document.body.scrollHeight-770) * getWidth() + "px";    
})

function movePageto(moveto){
    var moveto;
    if(moveto=='move1') moveto = 716.7999877929688;
    else if(moveto=='move2') moveto = 1516.800048828125;
    else if(moveto=='move3') moveto = 2325.60009765625;
    window.scroll({
        top: moveto,
    })
}
