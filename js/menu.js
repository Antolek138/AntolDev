const body = document.querySelector('body')
const menu = document.querySelector('.nav__menu')
const bars = document.querySelector('.nav__bars')
const MenuItem = document.querySelectorAll('.nav__item')

function OpenMenu() {
	menu.classList.toggle('show')
}

function BarsAnimate() {
	bars.classList.toggle('showBars')
}

function OverFlow() {
	body.classList.toggle('OverBloked')
}

function BarsRemoveOverFlow() {
	body.document.remove('OverBloked')
}

MenuItem.forEach(item => item.addEventListener('click', () => body.classList.remove('OverBloked')))
MenuItem.forEach(item => item.addEventListener('click', () => bars.classList.remove('showBars')))
MenuItem.forEach(item => item.addEventListener('click', () => menu.classList.remove('show')))
bars.addEventListener('click', OpenMenu)
bars.addEventListener('click', BarsAnimate)
bars.addEventListener('click', OverFlow)
