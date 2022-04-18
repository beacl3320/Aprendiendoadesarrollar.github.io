const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu-navegacion');

/* console.log(menu);
console.log(hamburger); */


/* abrir y cerrar el menu de navegación */
hamburger.addEventListener('click', () => {
    /* alert('click'); */
    menu.classList.toggle('spread');
})


/* cerrar la ventana de menu-navagacion clicando en cualquier parte de la página excepto en menu */
window.addEventListener('click', e=> {
    /* console.log(e.target); */
    if(menu.classList.contains('spread')
    && e.target != menu && e.target != hamburger){
        menu.classList.toggle('spread');
    }
})