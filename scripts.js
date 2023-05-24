const hamburguesa = document.querySelector('.hamburguesa');

const menuMobile = document.querySelector('.ulMobile');

hamburguesa.addEventListener('click', (e) => {
    menuMobile.classList.toggle('inactive')
})

