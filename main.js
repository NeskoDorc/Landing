const toogle = document.getElementById('toggle')
const close = document.getElementById('close')
const sign = document.getElementById('open')

const modal = document.getElementById('modal')

// toogle nav
toogle.addEventListener('click', () => {
    document.body.classList.toggle('show-nav')

})


// sign up

sign.addEventListener('click', () => modal.classList.add('show-modal'))
close.addEventListener('click', () => modal.classList.remove('show-modal'))


window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('show-modal')
    }
})