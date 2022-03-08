var usuario

var lista = ['papel', 'pedra', 'tesoura']
comp = lista[Math.floor(Math.random() * lista.length)]

/* console.log(comp) */

/* document.getElementById("papel").onclick = function () {
    usuario = "papel"
    console.log(usuario)
    if (comp == "papel") {
        console.log("Empate")
    }
} */

document.getElementById("pedra").onclick = function () {
    usuario = "pedra"
    if (comp == "pedra") {
        console.log("Empate")
    }
}

document.getElementById("tesoura").onclick = function () {
    usuario = "tesoura"
    if (comp == "tesoura") {
        console.log("Empate")
    }
}