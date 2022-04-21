// Change Logo image
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

// Logo change according with mouse presence
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


// Change user name
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

