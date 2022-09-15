const hambuger = document.querySelector('.hambuger-container')
const navbar = document.querySelector('.nav-list-items')

hambuger.addEventListener(('click'), () => {
    hambuger.classList.toggle('active')
    navbar.classList.toggle('action')
    
})

const center = document.querySelector('.center')
const header = document.querySelector('header')
const landingSection = document.querySelector('.landing-section')

function preLoader() {
    setTimeout(() =>{
      center.style.opacity=0
      center.style.display ='none'

      header.style.display = 'block'
      setTimeout(() => {
        header.style.opacity=1
        landingSection.style.opacity=1
    }, 50)
    }, 2000)
}

preLoader()