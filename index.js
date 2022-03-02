

let unitEl = document.getElementById("unit-el")

let lenghtEl = document.getElementByID("lenght-el")
let volumeEl = document.getElementByID("volume-el")
let massEl = document.getElementByID("mass-el")

let unit = 20


function startConversion() {    
    
}





function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()