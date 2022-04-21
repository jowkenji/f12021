/*Colorir o capacete....... quebrando a cabeça ainda*/
let helmetColor = document.querySelector('#helmetColor');
let helmetIcon = document.querySelector('.colorable');
let testButton = document.querySelector('#testButton');

testButton.addEventListener('click', () => {
    document.getElementById('helmetIcon').style.color = helmetColor.value;
})



/*
helmetColor.addEventListener('input', () => {
  document.getElementById('helmetIcon').style.color = helmetColor.value;
});*/