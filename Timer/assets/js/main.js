function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    })
}

const relogio = document.querySelector('#relogio')
const iniciar = document.querySelector('#iniciar')
const pausar = document.querySelector('#pausar')
const zerar = document.querySelector('#zerar')

let sec = 0
let timer


function iniciando() {
    timer = setInterval(function () {
        sec++
        relogio.innerHTML = criaHoraDosSegundos(sec)
    }, 1000)
}

iniciar.addEventListener('click', function (event) {
    relogio.classList.remove('pausado')
    iniciando()
})

pausar.addEventListener('click', function (event) {
    clearInterval(timer)
    relogio.classList.add('pausado')
})

zerar.addEventListener('click', function (event) {
    clearInterval(timer)
    relogio.innerHTML = '00:00:00'
    sec = 0
})

