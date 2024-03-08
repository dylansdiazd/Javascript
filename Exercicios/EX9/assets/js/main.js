const box = document.querySelector('#box')

const elementos = [
    { tag: 'p', texto: 'Frase 1' },
    { tag: 'div', texto: 'Frase 2' },
    { tag: 'footer', texto: 'Frase 3' },
    { tag: 'section', texto: 'Frase 4' }
]


for (i = 0; i <= elementos.length; i++) {

    box.innerHTML += `<${elementos[i].tag}> ${elementos[i].texto} </${elementos[i].tag}> <br> `

}