const formName = document.querySelector('.form .name')
const formPosi = document.querySelector('.form .position')
const formPnum = document.querySelector('.form .pnum')
const formEmail = document.querySelector('.form .email')
const cardEl = document.querySelector('.card')
const cardName = document.querySelector('.card .name')
const cardPosi = document.querySelector('.card .position')
const cardPnum = document.querySelector('.card .pnum')
const cardEmail = document.querySelector('.card .email')
const crecardEl = document.querySelector('.create-card')

function renderCard(){
    cardName.innerHTML = formName.value
    cardPosi.innerHTML = formPosi.value
    cardPnum.innerHTML = formPnum.value
    cardEmail.innerHTML = formEmail.value
}

crecardEl.addEventListener('click', function(){
    renderCard()
    cardEl.classList.add('show')
})



