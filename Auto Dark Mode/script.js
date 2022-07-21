const lightBtn = document.querySelector('[data-light-btn]')
const darkBtn = document.querySelector('[data-dark-btn]')

const cardCont = document.querySelector('.card')
const cardTitle = cardCont.querySelector('.card__title')
const cardParagraph = cardCont.querySelector('.card__paragraph')
const enterBtn = cardCont.querySelector('.enter-btn')
const moreBtn = cardCont.querySelector('.more-btn')

const light = document.querySelector('[data-light]')
const dark = document.querySelector('[data-dark]')

const autoBtn = document.querySelector('[data-auto-btn]')

const lightHeader = light.getAttribute("data-visible")
const darkHeader = dark.getAttribute("data-visible")
let btnClicked = 0

darkBtn.addEventListener("click", darkMode)

lightBtn.addEventListener("click", lightMode)

autoBtn.addEventListener("click", () => {
    if (btnClicked == 1) {
        autoTurnOff()
        setTimeout(() => {
            btnClicked--
        }, 50);
    } else if (btnClicked == 0) {
        autoChange()
        btnClicked++
    } 
})



function lightMode(){
    // toggle the active color to the light btn
    lightBtn.classList.add('on-active')
    darkBtn.classList.remove('on-active')

    // change the element style to the dark mode
    cssToLight()

    if (lightHeader === "true") {
            light.classList.add('card-title')
            light.classList.remove('display-x')
            dark.classList.add('display-x')
            dark.classList.remove('card-title')
    }
}

function darkMode(){
    // toggle the active color to the dark btn
    darkBtn.classList.add('on-active')
    lightBtn.classList.remove('on-active')

    // change the element style to the dark mode
    cssToDark()

    // change the header

    if (darkHeader === "false") {
        light.classList.remove('card-title')
        light.classList.add('display-x')
        dark.classList.remove('display-x')
        dark.classList.add('card-title')
        dark.style.cssText = `
                            color: white;
                            text-Shadow: 1px 1px rgba(0,0,0, 0.4);`
    }
}

const cssToDark = () => {
    cardCont.classList.add('card-dark')
    cardTitle.classList.add('card-dark__title')
    cardParagraph.classList.add('card-dark__paragraph')

    enterBtn.classList.add('enter-dark')
    enterBtn.classList.remove('enter-btn')
    
    moreBtn.classList.add('more-dark')
    moreBtn.classList.remove('more-btn')
}

const cssToLight = () => {
    cardCont.classList.remove('card-dark')
    cardTitle.classList.remove('card-dark__title')
    cardParagraph.classList.remove('card-dark__paragraph')

    enterBtn.classList.remove('enter-dark')
    enterBtn.classList.add('enter-btn')
    
    moreBtn.classList.remove('more-dark')
    moreBtn.classList.add('more-btn')
}

const autoChange = () => {

    const timeDate = new Date
    const hour = timeDate.getHours()

    if (hour >= 17 || hour <= 6) {
        darkMode()
    } else (
        lightMode()
    )
}

const autoTurnOff = () => {
    if (lightBtn.classList.contains('on-active')) {
        lightMode()
    } else {
        darkMode()
    }
}