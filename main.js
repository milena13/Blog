var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/fruits.jpg') {
      myImage.setAttribute ('src','images/veggies.jpg');
    } else {
      myImage.setAttribute ('src','images/fruits.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Not another cooking blog, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Not another cooking blog, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}