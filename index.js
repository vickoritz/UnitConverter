
//1 meter = 3.2808399 Feet
//1 foot = 0.3048 Meters

//1 liter = 0,26 gal
//1 gal = 3,7854096684 l

//1 kilogram = 2.20462 pund
//1 pound = 0.453591830542594 kilogram

let unit = 20
document.getElementById("unit-el").textContent = unit

//let meterEl = document.getElementById("meter-el")


let feetEl = document.getElementById("feet-el")

function startConversion() {
    lenght()
}

function lenght() {
    let feet = unit * 3.2808399
    feetEl.textContent = feet
}
