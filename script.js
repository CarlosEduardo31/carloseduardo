// window.addEventListener('DOMContentLoaded', setup); 

// function setup() {
//     const options = {
//         rootMargin: '0px 0px -200px 0px'
//     }

//     const observer = new IntersectionObserver((entries, observer) => {
//         entries.forEach(entry => {
//             if(entry.isIntersecting) {
//                 // entry.target.classList.remove('show-off');
//                 entry.target.classList.add('show');
//                 observer.unobserve(entry.target);
//             } else {
//                 return; 
//             }
//         })
//     }, options);

//     // const h1 = document.querySelector('h1');
//     // observer.observe(h1);

//     const paras = document.querySelectorAll('.show-off');
//     paras.forEach(p => observer.observe(p));
// }

const options = {rootMargin: '0px 0px -100px 0px'};

const observer2 = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=> {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
}, options);

const paras = document.querySelectorAll('.show-off');
paras.forEach(elemento => observer2.observe(elemento));

const imgSobre = document.querySelectorAll('.img_sobre');
imgSobre.forEach(elemento => observer2.observe(elemento));

const habilidades = document.querySelectorAll('.habilidadesTexto');
habilidades.forEach(elemento => observer2.observe(elemento));