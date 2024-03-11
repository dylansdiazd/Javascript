const paragraph = document.querySelector('.paragrafos')

function mostraHora(){
    let data = new Date()

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    })

}

const timer = setInterval(function() {
 paragraph.innerHTML = mostraHora()
}, 1000)