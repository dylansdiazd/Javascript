function handleMouseEnter(){
    this.classList.add('s-card--hovered')
    document.body.id = `${this.id}-hovered`
}

function handleMouseLeave(){
this.classList.remove('s-card--hovered')
document.body.id = ''
}

function addEventListenersToCard(){
    const cardElement = document.getElementsByClassName('s-card')
    console.log(cardElement)

    for(let i = 0; i < cardElement.length; i++){
        const card = cardElement[i]
        card.addEventListener('mouseenter', handleMouseEnter)
        card.addEventListener('mouseleave', handleMouseLeave)
    }
}

document.addEventListener("DOMContentLoaded", addEventListenersToCard, false)

