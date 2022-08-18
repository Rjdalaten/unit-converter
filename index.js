/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const oneMeter = 3.281
const oneLiter = 0.264
const onePound = 2.204
const convertEl = document.getElementById("convert-el")
const convertBtn = document.getElementById("convert-btn")
let resultInLength = document.getElementById("result-in-length")
let resultInVolume = document.getElementById("result-in-volume")
let resultInMass = document.getElementById("result-in-mass")

convertEl.addEventListener("input", function() {
    convertEl.style.width = this.value.length + "em";
})

convertBtn.addEventListener("click", function() {
    let metersToFeet = convertEl.value * oneMeter
    let feetToMeters = convertEl.value / oneMeter
    let litersToGallons = convertEl.value * oneLiter
    let gallonsToLiters = convertEl.value / oneLiter
    let kilosToPounds = convertEl.value * onePound
    let poundsToKilos = convertEl.value / onePound

    resultInLength.textContent = `
        ${ convertEl.value } meters = ${ metersToFeet.toFixed(3) } feet | ${ convertEl.value } feet = ${ feetToMeters.toFixed(3) } meters
    `
    resultInVolume.textContent = `
        ${ convertEl.value } liters = ${ litersToGallons.toFixed(3) } gallons | ${ convertEl.value } gallons = ${ gallonsToLiters.toFixed(3) } liters
    `
    resultInMass.textContent = `
        ${ convertEl.value } kilos = ${ kilosToPounds.toFixed(3) } pounds | ${ convertEl.value } pounds = ${ poundsToKilos.toFixed(3) } kilos
    `
})

