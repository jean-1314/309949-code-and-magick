'use strict';

var setup = document.querySelector('.setup');

if (setup.classList.contains('hidden')) {
  setup.classList.remove('hidden');
};

var firstNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var lastNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var randFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
var randLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
var charName = randFirstName + ' ' + randLastName;
console.log(charName);

var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var randcoatColor = coatColors[Math.floor(Math.random() * coatColors.length)];
console.log(randcoatColor);

var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var randEyesColor = eyesColors[Math.floor(Math.random() * eyesColors.length)]
console.log(randEyesColor);

var characters = {
  name: charName,
  coatColor: randcoatColor,
  eyesColor: randEyesColor
}
