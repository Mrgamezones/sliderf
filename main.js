let imgSlider = document.querySelectorAll('.slider-container .slider-box');
let btnprox = document.querySelector('#proxima');
let btnAnter = document.querySelector('#anterior');
let btnNav = document.querySelectorAll('.btn-nav-box .btn-nav');

let contadorImg = imgSlider.length; 
let imgAtiva = 0;

btnprox.addEventListener('click', ()=>{
    imgAtiva++;
    if(imgAtiva >= contadorImg){
        imgAtiva =0;
    }
    mostrarSlider()
})

btnAnter.addEventListener('click', ()=>{
    imgAtiva--;
     if(imgAtiva < 0){
        imgAtiva= contadorImg -1;
     }

     mostrarSlider();
})

function mostrarSlider(){
    let antigaImg = document.querySelector('.slider-container .slider-box.ativo')
    let antigoBtnNav = document.querySelector('.btn-nav-box btn-nav.ativo')

    antigaImg.classList.remove('ativo')
    antigoBtnNav.classList.remove('ativo')

    imgSlider[imgAtiva].classList.add('ativo')
    btnNav[imgAtiva].classList.add('ativo')

    clearInterval(rolagemAuto)
    rolagemAuto = setInterval(()=>{
    btnProx.click()
}, 3000)
}

btnNav.forEach((btn, indice)=>{
    btn.addEventListener('click', ()=>{
        imgAtiva = indice;
        mostrarSlider();
    })
})


let rolagemAuto = setInterval(()=>{
    btnProx.click()
}, 3000)