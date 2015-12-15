var greeting = require('./greeting');

var element = document.createElement('h3');
element.innerHTML = greeting;
document.body.appendChild(element);