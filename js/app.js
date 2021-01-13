// Elemtos a los que le aplicaremos el innerHTML o donde se ingresa el DOM
const primerTexto = document.getElementById('primer-texto');
const segundoTexto = document.getElementById('segundo-texto');
const color = document.getElementById('color');
const fondo = document.getElementById('fondo');
const colorText = document.getElementById('color-text');
const backColor = document.getElementById('back-color');
const centerText = document.getElementById('center-text');


// Elementos a los que se les aplicara los eventos
const topInput = document.getElementById('top-input');
const topCheck = document.getElementById('top-check');
const option = document.getElementById('option');
const inputSize = document.getElementById('input-size');
const izquierda = document.getElementById('izquierda');
const derecha = document.getElementById('derecha');
const centrar = document.getElementById('centrar');
const transparente = document.getElementById('transparente');
const urlImg = document.getElementById('url-img');

topInput.addEventListener('keyup', () => {
  primerTexto.innerHTML = topInput.value;
});


topCheck.addEventListener('click',() => {
  if(topCheck.checked){
    // primerTexto.style.display = 'none';
    primerTexto.classList.add('ocultar');
    centerText.style.height = '55vh'
  } else {
    // primerTexto.style.display = 'block';
    // primerTexto.style.color = 'red';
    primerTexto.style.backGround = 'blue';
    primerTexto.classList.remove('ocultar');
    centerText.style.height = 'auto'
  }
});

option.addEventListener('change', () => {
  primerTexto.style.fontFamily = `${option.value}`;
});

inputSize.addEventListener('keyup', () => {
  primerTexto.style.fontSize = `${inputSize.value}px`
});

inputSize.addEventListener('click', () => {
  primerTexto.style.fontSize = `${inputSize.value}px`
});

izquierda.addEventListener('click', (e) => {
  e.preventDefault();
  primerTexto.style.textAlign = 'left';
  segundoTexto.style.textAlign = 'left';
});

derecha.addEventListener('click', (e) => {
  e.preventDefault();
  primerTexto.style.textAlign = 'right';
  segundoTexto.style.textAlign = 'right';
});

centrar.addEventListener('click', (e) => {
  e.preventDefault();
  primerTexto.style.textAlign = 'center';
  segundoTexto.style.textAlign = 'center';
});

color.addEventListener('input', (e) =>{
  const textColor = e.target.value;
  primerTexto.style.color = textColor;
  segundoTexto.style.color = textColor;
  colorText.innerHTML = textColor.toUpperCase();
})

fondo.addEventListener('input', (e) =>{
  const backgrondColor = e.target.value;
  primerTexto.style.backgroundColor = backgrondColor;
  segundoTexto.style.backgroundColor = backgrondColor;
  backColor.innerHTML = backgrondColor.toUpperCase();
})

transparente.addEventListener('click', (e) => {
  console.log(e.target.checked);
  if(e.target.checked){
    primerTexto.style.backgroundColor = 'rgba(0,0,0,.9)';
    // nos quedamos en darle transparencia a las cajas superior e inferior
  }
})


// Pseudocódigo de la primer sección, URL de la imagen.

// Como logramos que al poner la url en el input se pinte nuestra imagen en la sección correspondiente

// Inicio
  // Tener identificado de donde sacaremos el link (Llamar al id) +
  // Identificar cuando el usuario ingrese el link
  // Guardar el link que ingreso el usuario
  // Identificar la etiqueta o el lugar donde lo pondremos
  // Agregarle el link que el usuario ingrese para que se refleje la imagen
// Fin

urlImg.addEventListener('keyup', (e) => {
  const src = urlImg.value;
  // console.log(e.target.value);
  centerText.style.backgroundImage = `url('${src}')`;
  centerText.style.backgroundPosition = 'center';
  centerText.style.backgroundRepeat = 'no-repeat';
  centerText.style.backgroundSize = 'contain';

  console.log(src);
})














