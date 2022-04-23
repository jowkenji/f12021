// **** Change Logo image ****
let myImage = document.querySelector('#f1Logo');

/*
myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/F1logo_2018.png') {
    myImage.setAttribute('src','images/F1logo_2018-2.png');
  } else {
    myImage.setAttribute('src','images/F1logo_2018.png');
  }
}*/

// *Logo change according with mouse presence*
myImage.addEventListener('mouseover', () => {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/F1logo_2018.png') {
    myImage.setAttribute('src','images/F1logo_2018-2.png');
  } else {
    myImage.setAttribute('src','images/F1logo_2018.png');
  }
})
myImage.addEventListener('mouseleave', () => {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/F1logo_2018.png') {
    myImage.setAttribute('src','images/F1logo_2018-2.png');
  } else {
    myImage.setAttribute('src','images/F1logo_2018.png');
  }
})

// **** Change user name ****
let myButton = document.querySelector('.user-change');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name:');
    if(!myName) {
        setUserName();
      } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Welcome, ' + myName;
      }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}

// **** Interactive board ****
let resultadoFinal = document.querySelector('#resultadoFinal');
let pontos = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1]
let pontosFavorecidos = [7, 18, 0, 0, 0, 0, 0, 0, 0, 25, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let pontosPerdidos    = [0, 7, 0, 0, 4, 18, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let corridas = [
  'bahrain',
  'emiliaRomana',
  'portugal',
  'espanha',
  'monaco',
  'azerbaijao',
  'frança',
  'estiria',
  'austria',
  'graBetanha',
  'hungria',
  'belgica',
  'paisesBaixos',
  'italia',
  'russia',
  'turquia',
  'eua',
  'mexico',
  'saoPaulo',
  'catar',
  'arabiaSaudita',
  'abuDhabi'
  ];


// Pontuação do usuário **** quebrando a cabeça ainda****
  let userChoice = [
    '#bahrainYes',
    'emiliaRomana',
    'portugal',
    'espanha',
    'monaco',
    'azerbaijao',
    'frança',
    'estiria',
    'austria',
    'graBetanha',
    '#hungriaYes',
    'belgica',
    'paisesBaixos',
    'italia',
    'russia',
    'turquia',
    'eua',
    'mexico',
    'saoPaulo',
    'catar',
    'arabiaSaudita',
    'abuDhabi'
  ];
let userScore = [];
for (corrida in corridas) {
  let n = 0;
  if(`${corrida}Yes`) {
    userScore.push(pontosFavorecidos[n]);
  }
  n++;
}
console.log(userScore);


// Pontuação do webmaster
let somatoria = 0;
function somaPontos(myArray) {
  somatoria += myArray;
  return somatoria;
}
pontosFavorecidos.map(somaPontos);
pontosPerdidos.map(somaPontos);

resultadoFinal.textContent = somatoria;