function popUpRandomMole() {


    const moles = document.querySelectorAll(".wgs__mole-head:not(.wgs__mole-head--whacked)");
    let randNum = Math.floor(Math.random() * moles.length),
        molesIdx = moles[randNum];

    if (moles.length === 0) {
        console.log(`YOU WON!`)
        return
    }

    molesIdx.classList.remove("wgs__mole-head--hidden");
    // molesIdx.classList.remove("wgs__mole-head":not(".wgs__mole - head--whacked"))

    setTimeout(() => {
        hideMole(molesIdx);
    }, 3000);
}

function hideMole(mole) {
    mole.classList.add("wgs__mole-head--hidden");
    setTimeout(() => {
        popUpRandomMole();
    }, 300);
}

window.addEventListener("DOMContentLoaded", () => {
    let moles1 = document.querySelectorAll('.wgs__mole-head');

    moles1.forEach(el => {
        el.addEventListener('click', e => {
            e.target.classList.add("wgs__mole-head--hidden");
            e.target.classList.add("wgs__mole-head--whacked");


        })
    })

    setTimeout(() => {
        popUpRandomMole();
    }, 0);


});
