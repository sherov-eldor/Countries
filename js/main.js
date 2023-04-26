
let elBody = document.querySelector('.body')
let elBtnDarkThemeToggler = document.querySelector('.button-dark-theme-toggler')

elBtnDarkThemeToggler.addEventListener('click', () => {
    elBody.classList.toggle('dark-mode')
})