// **** Change Logo image according to mouse presence ****
let myImage = document.querySelector('#f1Logo');

myImage.addEventListener('mouseover', () => {
  let mySrc = myImage.getAttribute('src');
  myImage.setAttribute('src','images/F1logo_2018-2.png');
})

myImage.addEventListener('mouseleave', () => {
  let mySrc = myImage.getAttribute('src');
  myImage.setAttribute('src','images/F1logo_2018.png');
})

/*Colorir o capacete*/
let helmetColor = document.querySelector('#helmetColor');
let helmetIcon = document.querySelector('.colorable');

helmetIcon.style.background = helmetColor.value;

helmetColor.addEventListener('input', () => {
  helmetIcon.style.background = helmetColor.value;    
});

