'use strict';

var userSetup = document.querySelector('.setup');
userSetup.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

var firstNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var lastNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var charName;

function getCharName() {
  var randFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  var randLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  charName = randFirstName + ' ' + randLastName;
  return charName;
}

var randcoatColor;
function getCoatColor() {
  var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  randcoatColor = coatColors[Math.floor(Math.random() * coatColors.length)];
  return randcoatColor;
}

var randEyesColor;
function getEyesColor() {
  var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
  randEyesColor = eyesColors[Math.floor(Math.random() * eyesColors.length)];
  return randEyesColor;
}

var characters = [
  {
    name: getCharName(),
    coatColor: getCoatColor(),
    eyesColor: getEyesColor()
  },
  {
    name: getCharName(),
    coatColor: getCoatColor(),
    eyesColor: getEyesColor()
  },
  {
    name: getCharName(),
    coatColor: getCoatColor(),
    eyesColor: getEyesColor()
  },
  {
    name: getCharName(),
    coatColor: getCoatColor(),
    eyesColor: getEyesColor()
  },
];

function renderWizard (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
}

var fragment = document.createDocumentFragment();
for (var i = 0; i < characters.length; i++) {
  fragment.appendChild(renderWizard(characters[i]));
}
similarListElement.appendChild(fragment);

userSetup.querySelector('.setup-similar').classList.remove('hidden');
