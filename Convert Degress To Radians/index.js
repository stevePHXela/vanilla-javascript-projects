const degreeInput = document.querySelector('[data-degreeInput]')
const radianInput = document.querySelector('[data-radianInput]')

const convertBtn = document.querySelector('[data-convertBtn]')
const resetBtn = document.querySelector('[data-resetBtn]')

const halfCircleInDegree = 180
const halfCircleInRadian = 3.14159265359 // pi value


convertBtn.addEventListener('click', () => {
    if (degreeInput.value) {
        const degreeValue = degreeInput.value
        const resultDegreeToRadian  = degreeValue * (halfCircleInRadian / halfCircleInDegree)
        radianInput.value = resultDegreeToRadian
    } else {
        alert("Please type something!")
    }
})

resetBtn.addEventListener('click', () => {
    if (degreeInput.value || radianInput.value) {
        degreeInput.value = ""
        radianInput.value = ""
    }
})