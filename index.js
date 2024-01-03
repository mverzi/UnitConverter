const convertBtn = document.getElementById("convert-btn")
const length = document.getElementById("length-conversion")
const volume = document.getElementById("volume-conversion")
const mass = document.getElementById("mass-conversion")

convertBtn.addEventListener('click', function() {
    const input = document.getElementById("text-input").value
    convertLength(input)
    convertVolume(input)
    convertMass(input)
})

function convertLength(num) {
    const meters = (num * 3.281).toFixed(3)
    const feet = (num / 3.281).toFixed(3)
    length.textContent = `${num} meters = ${feet} feet | ${num} feet = ${meters} meters`
}

function convertVolume(num) {
    const gallons = (num * 0.264).toFixed(3)
    const liters = (num / 0.264).toFixed(3)
    volume.textContent = `${num} liters = ${gallons} gallons | ${num} gallons = ${liters} liters`
}

function convertMass(num) {
    const kilograms = (num * 2.204).toFixed(3)
    const pounds = (num / 2.204).toFixed(3)
    mass.textContent = `${num} kilograms = ${pounds} pounds | ${num} pounds = ${kilograms} kilograms`
}