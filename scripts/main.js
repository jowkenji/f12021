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

// **** Change user name **** => Disabled
/*
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
*/

// Resize fonts and hide aside content due window width
let windowsWidth = window.innerWidth;
let nav = document.querySelector('nav');
let paraUL = document.querySelector('main');
let aside = document.querySelector('aside'); // DOC manipulation with append/removeChild?

if(windowsWidth < 700) {
  nav.style.fontSize = '0.7em';
  paraUL.style.fontSize = '12px';
} else {
  nav.style.fontSize = '1.0em';
  paraUL.style.fontSize = '16px';
};

window.addEventListener('resize', () => {
  windowsWidth = window.innerWidth;
  if(windowsWidth < 700) {
    nav.style.fontSize = '0.7em';
    paraUL.style.fontSize = '12px';
  } else {
    nav.style.fontSize = '1.0em';
    paraUL.style.fontSize = '16px';
  }
  
});





// **** Interactive board ****
let resultadoFinal = document.querySelector('#resultadoFinal');
let pontosFavFinal = document.querySelector('#pontosFavorecidos');
let pontosPerdFinal = document.querySelector('#pontosPerdidos');
let pontosUserFinal = document.querySelector('#pontosUserFinal');
let contaLambanca = document.querySelector('#contaLambanca');
let contaSorte = document.querySelector('#contaSorte');
let listaPontos = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1]
let listaPontosFavorecidos = [7, 18, 0, 0, 0,  3, 0, 0, 0, 18, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let listaPontosPerdidos    = [0,  7, 0, 0, 4, 18, 0, 0, 0,  0,  7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let listaCorridas = [
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

// *** Pontuação do Artigo ***
function somaArray(myArray, somatoria) {
  for (item of myArray) {
    somatoria += item;
  }
  return somatoria;
}

function contaArray(myArray, contador) {
  for (item of myArray) {
    if(item !== 0) {
      contador += 1;
    }
  }
  return contador;
}

let somaPontosFav = 0;
somaPontosFav = somaArray(listaPontosFavorecidos, somaPontosFav);
pontosFavFinal.textContent = somaPontosFav;

let somaPontosPerd = 0;
somaPontosPerd = somaArray(listaPontosPerdidos, somaPontosPerd);
pontosPerdFinal.textContent = somaPontosPerd;

let somatoria = 0;
somatoria = somaPontosFav+somaPontosPerd;
resultadoFinal.textContent = somatoria;

let contadorSorte = 1; // contagem inicial = 1, teve uma sorte dupla na Hungria.
contadorSorte = contaArray(listaPontosFavorecidos, contadorSorte);
contaSorte.textContent = contadorSorte;

let contadorLambanca = 1; // contagem inicial = 1, teve uma lambança sem mudança de pontos em SP.
contadorLambanca = contaArray(listaPontosPerdidos, contadorLambanca);
contaLambanca.textContent = contadorLambanca;



// Pontuação do usuário **** quebrando a cabeça ainda para evitar toda esta repetição ****
// *** organizando os votos do usuário ***
let listaUserChoice = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

let inputBahrain = document.querySelector('.bahrainV');
inputBahrain.addEventListener('change', function(event) {
  var data = new FormData(inputBahrain);
  for (const entry of data) {
    listaUserChoice[0] = entry[1];
  };
  event.preventDefault();
  sumUser();
}, false);

let inputemiliaRomana = document.querySelector('.emiliaRomanaV');
inputemiliaRomana.addEventListener('change', function(event) {
  var data = new FormData(inputemiliaRomana);
  for (const entry of data) {
    listaUserChoice[1] = entry[1];
  };
  event.preventDefault();
  sumUser();
}, false);

let inputePortugal = document.querySelector('.portugalV');
inputePortugal.addEventListener('change', function(event) {
  var data = new FormData(inputePortugal);
  for (const entry of data) {
    listaUserChoice[2] = entry[1];
  };
  event.preventDefault();
  sumUser();
}, false);

let inputEspanha = document.querySelector('.espanhaV');
inputEspanha.addEventListener('change', function(event) {
  var data = new FormData(inputEspanha);
  for (const entry of data) {
    listaUserChoice[3] = entry[1];
  };
  event.preventDefault();
  sumUser();
}, false);

let inputMonaco = document.querySelector('.monacoV');
inputMonaco.addEventListener('change', function(event) {
  var data = new FormData(inputMonaco);
  for (const entry of data) {
    listaUserChoice[4] = entry[1];
  };
  event.preventDefault();
  sumUser();
}, false);

let inputAzerbaijao = document.querySelector('.azerbaijaoV');
inputAzerbaijao.addEventListener('change', function(event) {
  var data = new FormData(inputAzerbaijao);
  for (const entry of data) {
    listaUserChoice[5] = entry[1];
  };
  event.preventDefault();
  sumUser();
}, false);

let inputFranca = document.querySelector('.françaV');
inputFranca.addEventListener('change', function(event) {
  var data = new FormData(inputFranca);
  for (const entry of data) {
    listaUserChoice[6] = entry[1];
  };
  event.preventDefault();
  sumUser();
}, false);

let inputEstiria = document.querySelector('.estiriaV');
inputEstiria.addEventListener('change', function(event) {
  var data = new FormData(inputEstiria);
  for (const entry of data) {
    listaUserChoice[7] = entry[1];
  };
  event.preventDefault();
  sumUser();
}, false);

let inputAustria = document.querySelector('.austriaV');
inputAustria.addEventListener('change', function(event) {
  var data = new FormData(inputAustria);
  for (const entry of data) {
    listaUserChoice[8] = entry[1];
  };
  event.preventDefault();
  sumUser();
}, false);

let inputGraBetanha = document.querySelector('.graBetanhaV');
inputAzerbaijao.addEventListener('change', function(event) {
  var data = new FormData(inputAzerbaijao);
  for (const entry of data) {
    listaUserChoice[9] = entry[1];
  };
  event.preventDefault();
  sumUser();
}, false);

let inputHungria = document.querySelector('.hungriaV');
inputHungria.addEventListener('change', function(event) {
  var data = new FormData(inputHungria);
  for (const entry of data) {
    listaUserChoice[10] = entry[1];
  };
  event.preventDefault();
  sumUser();
}, false);

let inputBelgica = document.querySelector('.belgicaV');
inputBelgica.addEventListener('change', function(event) {
  var data = new FormData(inputBelgica);
  for (const entry of data) {
    listaUserChoice[11] = entry[1];
  };
  event.preventDefault();
  sumUser();
}, false);

let inputPaisesBaixos = document.querySelector('.paisesBaixosV');
inputPaisesBaixos.addEventListener('change', function(event) {
  var data = new FormData(inputPaisesBaixos);
  for (const entry of data) {
    listaUserChoice[12] = entry[1];
  };
  event.preventDefault();
  sumUser();
}, false);

let inputItalia = document.querySelector('.italiaV');
inputItalia.addEventListener('change', function(event) {
  var data = new FormData(inputItalia);
  for (const entry of data) {
    listaUserChoice[13] = entry[1];
  };
  event.preventDefault();
  sumUser();
}, false);

let inputRussia = document.querySelector('.russiaV');
inputRussia.addEventListener('change', function(event) {
  var data = new FormData(inputRussia);
  for (const entry of data) {
    listaUserChoice[14] = entry[1];
  };
  event.preventDefault();
  sumUser();
}, false);

let inputTurquia = document.querySelector('.turquiaV');
inputTurquia.addEventListener('change', function(event) {
  var data = new FormData(inputTurquia);
  for (const entry of data) {
    listaUserChoice[15] = entry[1];
  };
  event.preventDefault();
  sumUser();
}, false);

let inputEua = document.querySelector('.euaV');
inputEua.addEventListener('change', function(event) {
  var data = new FormData(inputEua);
  for (const entry of data) {
    listaUserChoice[16] = entry[1];
  };
  event.preventDefault();
  sumUser();
}, false);

let inputMexico = document.querySelector('.mexicoV');
inputMexico.addEventListener('change', function(event) {
  var data = new FormData(inputMexico);
  for (const entry of data) {
    listaUserChoice[17] = entry[1];
  };
  event.preventDefault();
  sumUser();
}, false);

let inputSaoPaulo = document.querySelector('.saoPauloV');
inputSaoPaulo.addEventListener('change', function(event) {
  var data = new FormData(inputSaoPaulo);
  for (const entry of data) {
    listaUserChoice[18] = entry[1];
  };
  event.preventDefault();
  sumUser();
}, false);

let inputCatar = document.querySelector('.catarV');
inputCatar.addEventListener('change', function(event) {
  var data = new FormData(inputCatar);
  for (const entry of data) {
    listaUserChoice[19] = entry[1];
  };
  event.preventDefault();
  sumUser();
}, false);

let inputArabiaSaudita = document.querySelector('.arabiaSauditaV');
inputArabiaSaudita.addEventListener('change', function(event) {
  var data = new FormData(inputArabiaSaudita);
  for (const entry of data) {
    listaUserChoice[20] = entry[1];
  };
  event.preventDefault();
  sumUser();
}, false);

let inputAbuDhabi = document.querySelector('.abuDhabiV');
inputAbuDhabi.addEventListener('change', function(event) {
  var data = new FormData(inputAbuDhabi);
  for (const entry of data) {
    listaUserChoice[21] = entry[1];
  };
  event.preventDefault();
  sumUser();
}, false);



// *** Somando os votos do usuário ***
function sumUser() {
  let totalUser = 0;
  for (let i = 0; i < 22; i++) {
    totalUser += listaUserChoice[i]*(listaPontosFavorecidos[i]+listaPontosPerdidos[i]);
  }
  pontosUserFinal.textContent = totalUser;  
}

sumUser();
