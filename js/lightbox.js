const imagenes = document.querySelectorAll('.img-galeria');
const imagenesLight = document.querySelector('.agregar-imagen');
const contenedorLight = document.querySelector('.imagen-light');
const hamburgerClose = document.querySelector('.hamburger');

/* console.log(imagenes);
console.log(imagenesLight);
console.log(contenedorLight); */


imagenes.forEach(imagen => {
    imagen.addEventListener('click', () => {
        /* alert('imagen'); */
        aparecerImagen(imagen.getAttribute('src'));
    })
})

contenedorLight.addEventListener('click', (e)=> {
    /* console.log(e.target); */
    if(e.target !== imagenesLight) {
        contenedorLight.classList.toggle('show');
        imagenesLight.classList.toggle('showImage');
        hamburgerClose.style.opacity = '1';
    }
})

const aparecerImagen = (imagen) => {
    imagenesLight.src = imagen;
    contenedorLight.classList.toggle('show');
    imagenesLight.classList.toggle('showImage');
    hamburgerClose.style.opacity = '0';
}