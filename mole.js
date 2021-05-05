window.addEventListener('DOMContentLoaded', setTimeout(() => {

    function popUpRandomMole() {
        const moles = document.querySelectorAll('wgs__mole-head');
        let randNum = Math.random() * 8;

        for (let i = randNum; i <= moles.length; i++) {
            let mole = moles[i];
            return mole
        }

        setTimeout(() => {
            return hideMole(moles)
        }, 1000)

    }

    function hideMole(el) {
        const moleMod = el.forEach(ele => {
            ele.classList.add('wgs__mole-head--hidden')
        });
        setTimeout(() => {
            return popUpRandomMole(moleMod)
        }, 1000)
    }
}, 0)
)
