// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const adviceElement = document.getElementById('advice-number')
const textElement = document.getElementById('card-text')
const buttonElement = document.getElementById('btn')

const generateText = data => {
    textElement.textContent = data.slip.advice
    adviceElement.textContent = data.slip.id  
}

const getUsers = async url => {
    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        generateText(data)
    } catch (error) {
        console.log(error)
    }
}

buttonElement.addEventListener('click', () => {
    getUsers('https://api.adviceslip.com/advice')
})