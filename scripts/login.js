/*Colorir o capacete*/
let helmetColor = document.querySelector('#helmetColor');
let helmetIcon = document.querySelector('.colorable');

helmetColor.addEventListener('input', () => {
  helmetIcon.style.background = helmetColor.value;    
});