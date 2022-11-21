// Carne - 400 gramas por pessoa ate 6 horas de churras
// Carne - 650 gramas por pessoa se passar de 6 horas
// Cerveja - 1200 ml por pessoa ate 6 h, 2000 ml se passar de 6 h
// Refrigerante/água - 1200 ml por pessoa ate 6 h, 1500 ml se passar de 6 h

//Crianças valem por meia pessoa (0,5)

let inputAdultos = document.getElementById('adultos')
let inputCriancas = document.getElementById('criancas')
let inputDuracao = document.getElementById('duracao') 

let resultado = document.getElementById('res')  

function calcular() {

    let adultos = inputAdultos.value 
    let criancas = inputCriancas.value 
    let duracao = inputDuracao.value 

    let qdtCarne = carne(duracao) * adultos + (carne(duracao) * criancas / 2)
    let qdtCerveja = cerveja(duracao) * adultos
    let qdtBebidas = bebidas(duracao) * adultos + (bebidas(duracao) * criancas / 2) 

    resultado.innerHTML = `<p>${qdtCarne / 1000} Kg de carne </p>` 
    resultado.innerHTML += `<p>${Math.ceil(qdtCerveja / 355)} Latas de cerveja </p>` 
    resultado.innerHTML += `<p>${Math.ceil(qdtBebidas / 1000)} Garrafas de 2L de bebidas </p>`  

} 

function carne (duracao) {
    if (duracao <= 6) {
        return 400 
    } else {
        return 650 
    }
}

function cerveja (duracao) {
    if (duracao <= 6) {
        return 1200 
    } else {
        return 2000 
    }
}

function bebidas (duracao) {
    if (duracao <= 6) {
        return 1200 
    } else {
        return 1500 
    }
} 