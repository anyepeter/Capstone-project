const hambuger = document.querySelector('.hambuger-container')
const navbar = document.querySelector('.nav-list-items')

hambuger.addEventListener('click', () => {
    hambuger.classList.toggle('active')
    navbar.classList.toggle('remove')
})


const main = document.querySelector('.main')
const center = document.querySelector('.center')

function init() {
    setTimeout(() =>{
       center.style.opacity = 0
       center.style.dispaly = 'none'

       main.style.dispaly = 'block'
       setTimeout(() => ( main.style.opacity = 1), 50);
    }, 4000)
}

init()