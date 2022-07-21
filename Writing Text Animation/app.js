const textContainer = document.querySelector('.text-container')
const textTitle = textContainer.querySelector('h1')

const startBtn = document.querySelector('[data-startBtn]')
const closeBtn = document.querySelector('[data-closeBtn]')
const inputRange = document.querySelector('[data-input]')

let textContainerTrans =  100
let textTitleTrans = 0


startBtn.addEventListener('click', () => {
    textContainerTrans = 100
    textTitleTrans = 0
    animationEffect()
})

closeBtn.addEventListener('click', () => {
    textContainerTrans = 50
    textTitleTrans = 50
    animationEffect()
})

function animationEffect() {
    setTimeout(() => {
        textContainer.style.setProperty('--trans100', `${textContainerTrans}%`)
        textTitle.style.setProperty('--trans0', `${textTitleTrans}%`)
    }, 500)
}
animationEffect()

inputRange.addEventListener('change', () => {
    const speedValue = inputRange.value
    
    textTitle.style.setProperty('--speed', `${(2000 / speedValue) * 3}ms`)
    textContainer.style.setProperty('--speed', `${(2000 / speedValue) * 3}ms`)
})