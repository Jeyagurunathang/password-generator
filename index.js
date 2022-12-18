const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let firstPassword = ""
let secondPassword = ""
let passwordHolder = ""
let passGenEl = document.getElementById("pass-gen")
let firstBox = document.getElementById("first-pass")
let secondBox = document.getElementById("second-pass")
let inputBox = document.getElementById("input-box")

function generator() {
    firstPassword = passwordGenerator()
    secondPassword = passwordGenerator()
    firstBox.textContent = firstPassword
    secondBox.textContent = secondPassword
}

function passwordGenerator() {
    passwordHolder = ""
    for (let i = 0; i < 15; i++) {
        let randomNumber = Math.floor(Math.random() * characters.length)
        passwordHolder += characters[randomNumber]
    }
    return passwordHolder
}

function firstButton() {
    inputBox.value = firstPassword
}

function secondButton() {
    inputBox.value = secondPassword
}