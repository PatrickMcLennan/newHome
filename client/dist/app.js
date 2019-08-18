"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var DOM = {
  googleButton: document.querySelector('.google_button'),
  googleForm: document.querySelector('.google_form'),
  googleInput: document.querySelector('.google_form_input')
}; // GOOGLE FORM

DOM.googleForm.addEventListener('submit', function (e) {
  e.preventDefault();
  DOM.googleButton.setAttribute('href', DOM.googleInput.value);
  DOM.googleButton.click();
});

(function () {
  console.log('hello');
  var getWeather = new XMLHttpRequest();
  getWeather.addEventListener('load', console.log('loading'));
  getWeather.open('GET', 'https://jsonplaceholder.typicode.com/posts');
  getWeather.send();
  console.log(_toConsumableArray(getWeather.responseText));
})();
