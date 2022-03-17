var usuario

lista = ['papel', 'pedra', 'tesoura']
var comp = lista[Math.floor(Math.random() * lista.length)]

const paper = document.getElementById("radio-paper")
console.log(comp)

if (paper.checked) {
    resultado = document.getElementById("text")
    usuario = "papel"
    if (comp == "papel") {
        resultado.innerHTML = "EMPATE"
    }
}

/* function Papel() {
    resultado = document.getElementById("text")
    usuario = "papel"
    if (comp == "papel") {
        resultado.innerHTML = "EMPATE"
    }
} */

function Tesoura() {
    usuario = "tesoura"
    if (comp == "tesoura") {
        console.log("Empate")
    }
}

function Pedra() {
    usuario = "pedra"
    if (comp == "pedra") {
        console.log("Empate")
    }
}