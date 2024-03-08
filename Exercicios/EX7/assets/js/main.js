const form = document.querySelector('.form')
const result = document.querySelector('.result')

function recebeEventoForm(evento) {
    evento.preventDefault()


    const peso = form.querySelector('.peso')
    const altura = form.querySelector('.altura')

    const IMC = imc = peso.value / (altura.value * altura.value)  


    if(IMC < 18.5){
        result.innerHTML = `<p>Seu IMC é de ${IMC}. Abaixo do peso.</p> <br>`

    } else if(IMC >= 18.5 && IMC <= 24.9){
        result.innerHTML = `<p>Seu IMC é de ${IMC}. Peso normal.</p> <br>`

    } else if(IMC >= 25 && IMC <= 29.9){
        result.innerHTML = `<p>Seu IMC é de ${IMC}. Sobrepeso.</p> <br>`

    } else if(IMC >= 30 && IMC <= 34.9){
        result.innerHTML = `<p>Seu IMC é de ${IMC}. Obesidade grau 1.</p> <br>`

    } else if(IMC >= 35 && IMC <= 39.9){
        result.innerHTML = `<p>Seu IMC é de ${IMC}. Obesidade grau 2.</p> <br>`

    } else {
        result.innerHTML = `<p>Seu IMC é de ${IMC}. Obesidade grau 3.</p> <br>`
    }

    


}

form.addEventListener('submit', recebeEventoForm)