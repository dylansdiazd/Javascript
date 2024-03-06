const form = document.querySelector('.form')
const mostra = document.querySelector('.mostra')
const pessoas = []


function recebeEventoForm(evento) {
    evento.preventDefault()



    const nome = form.querySelector('.nome')
    const sobrenome = form.querySelector('.sobrenome')
    const peso = form.querySelector('.peso')
    const altura = form.querySelector('.altura')

    pessoas.push( {
        nome: nome.value,
        sobrenome: sobrenome.value,
        peso: peso.value,
        altura: altura.value
    })

    mostra.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p> <br>`

}

form.addEventListener('submit', recebeEventoForm)





