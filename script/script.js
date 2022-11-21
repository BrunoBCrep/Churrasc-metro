// Carne - 400 gramas por pessoa ate 6 horas de churras
// Carne - 650 gramas por pessoa se passar de 6 horas
// Cerveja - 1200 ml por pessoa ate 6 h, 2000 ml se passar de 6 h
// Refrigerante/água - 1200 ml por pessoa ate 6 h, 1500 ml se passar de 6 h

//Crianças valem por meia pessoa (0,5)

function calcular(){
    var numAdultos = document.getElementById('adultos').value
    var numKids = document.getElementById('criancas').value 
    var horas = document.getElementById('duracao').value 
    var resultado = document.getElementById('res')
    
    if(horas <= 6){
        let carne = (numAdultos * 0.4) + (numKids * 0.5 * 0.4) 
        let cerveja = numAdultos * 1.2
        let bebidas = (numAdultos * 1.2) + (numKids * 0.5 * 1.2)
        
        resultado.innerHTML = `Itens necessários: <br>
        ${carne} kg de carne <br>${cerveja} litros de cerveja <br> ${bebidas} litros de refri/água.`
    } else {
        let carne = (numAdultos * 0.65) + (numKids * 0.5 * 0.65) 
        let cerveja = numAdultos * 2.0
        let bebidas = (numAdultos * 1.5) + (numKids * 0.5 * 1.5)
        
        resultado.innerHTML = `Itens necessários: <br>
        ${carne} kg de carne <br>${cerveja} litros de cerveja <br> ${bebidas} litros de refri/água.`
    } 
}
