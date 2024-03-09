const paragrafos = document.querySelector('.paragrafos')
const ps = paragrafos.querySelector('p')

const estilobody = getComputedStyle(document.body)
const backgroundColorBody = estilobody.backgroundColor

for (let p of ps){
    p.style.backgroundColor = backgroundColorBody
    p.style.color = '#FFFFFF'
}