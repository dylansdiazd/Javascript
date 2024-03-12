const adcTarefa = document.querySelector('.tarefa')
const listaTarefa = document.querySelector('.lista')
const btAdiciona = document.querySelector('.adicione')

function criaLi() {
    const li = document.createElement('li')
    return li
}

adcTarefa.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!adcTarefa.value) return

        criaTarefa(adcTarefa.value)
    }
}
)

function limpaInput() {
    adcTarefa.value = ''
    adcTarefa.focus()
}

function criaBotao(li) {
    li.innerText += ' '
    const botaoApagar = document.createElement('button')
    botaoApagar.innerText = 'Apagar'
    botaoApagar.setAttribute('class', 'apagar')
    botaoApagar.setAttribute('title', 'ApagarTarefa')
    li.appendChild(botaoApagar)
}

function criaTarefa(textoInput) {
    const li = criaLi()
    li.innerText = textoInput
    listaTarefa.appendChild(li)
    limpaInput()
    criaBotao(li)
    salvarTarefa()
}

btAdiciona.addEventListener('click', function () {

    if (!adcTarefa.value) return

    criaTarefa(adcTarefa.value)
})

document.addEventListener('click', function (e) {
    const el = e.target

    if (el.classList.contains('apagar')) {
        el.parentElement.remove()
        salvarTarefa()
    }
})

function salvarTarefa() {
    const liTarefas = listaTarefa.querySelectorAll('li')
    const listaDeTarefas = []

    for (let tarefa of liTarefas) {

        let tarefaTexto = tarefa.innerText
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim()
        listaDeTarefas.push(tarefaTexto)

    }

    const tarefasJSON = JSON.stringify(listaDeTarefas)
    localStorage.setItem('tarefas', tarefasJSON)
}   

function RecuperaTarefas() {
    const tarefas = localStorage.getItem('tarefas')
    const listaDeTarefas = JSON.parse(tarefas)

    for(let tarefa of listaDeTarefas){
        criaTarefa(tarefa)
    }
}

RecuperaTarefas()