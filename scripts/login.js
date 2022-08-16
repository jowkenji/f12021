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

// Resize fonts and hide aside content due window width
// let windowsWidth = window.innerWidth;
// let nav = document.querySelector('nav');
// let paraUL = document.querySelector('main');
// let aside = document.querySelector('aside'); // DOC manipulation with append/removeChild?

// if(windowsWidth < 700) {
//   nav.style.fontSize = '0.7em';
//   paraUL.style.fontSize = '12px';
// } else {
//   nav.style.fontSize = '1.0em';
//   paraUL.style.fontSize = '16px';
// };

// window.addEventListener('resize', () => {
//   windowsWidth = window.innerWidth;
//   if(windowsWidth < 700) {
//     nav.style.fontSize = '0.7em';
//     paraUL.style.fontSize = '12px';
//   } else {
//     nav.style.fontSize = '1.0em';
//     paraUL.style.fontSize = '16px';
//   }
  
// });