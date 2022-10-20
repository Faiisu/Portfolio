const logo = document.getElementById("startText");

const sleep = async (miliiseconds) =>{
    await new Promise(resolve => {
        return setTimeout(resolve,milliseconds);
    })
}

const testSleep = async () => {
    console.log('Step 1 - Called');
    await sleep(5000);
    console.log('Step 2 - Called');
}



function LOGO_out(){
    testSleep();
    logo.remove();
}