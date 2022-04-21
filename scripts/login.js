/*Colorir o capacete*/
let helmetColor = document.querySelector('#helmetColor');
let helmetIcon = document.querySelector('.colorable');

helmetIcon.style.background = helmetColor.value;

helmetColor.addEventListener('input', () => {
  helmetIcon.style.background = helmetColor.value;    
});