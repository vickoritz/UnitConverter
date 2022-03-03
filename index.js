
//1 meter = 3.2808399 Feet
//1 foot = 0.3048 Meters

//1 liter = 0.2641720524 gal
//1 gal = 3,7854096684 l

//1 kilogram = 2.20462 pund
//1 pound = 0.453591830542594 kilogram

let unit = 20
document.getElementById("unit-el").textContent = unit

let meterEl = document.getElementById("meter-el")
let feetEl = document.getElementById("feet-el")

let literEl = document.getElementById("liter-el")
let gallonEl = document.getElementById("gallon-id")

let kiloEl = document.getElementById("kilo-id")
let poundEl = document.getElementById("pound-id")


function startConversion() {
    lenght()
    volume()
    mass()
}

function lenght() {
    let feet = Math.floor(unit * 3.2808399)
    let meter = Math.floor(unit * 0.3048)
    meterEl.textContent = unit + " meter = " + meter + " feet" + " |"
    feetEl.textContent = unit +" feet = " + feet + " meter"
}   

function volume() {
    let gallon = Math.floor(unit * 0.2641720524)
    let liter = Math.floor(unit * 3,7854096684)
    literEl.textContent = unit + " liters = " + gallon + " gallons" + " |"
    gallonEl.textContent = unit + " gallons = " + liter + " liters"
}

function mass() {
    let kilo = Math.floor(unit * 2.20462)
    let pound = Math.floor(unit * 0.453591830542594)
    poundEl.textContent = unit + " kilos = " + pound + " pound" + " |"
    kiloEl.textContent = unit + " pounds = " + kilo + " kilos"
}