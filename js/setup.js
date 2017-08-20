'use strict';

var FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES__COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var userSetup = document.querySelector('.setup');
userSetup.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

var charName;
function getCharName() {
  var randFirstName = FIRST_NAMES[Math.floor(Math.random() * FIRST_NAMES.length)];
  var randLastName = LAST_NAMES[Math.floor(Math.random() * LAST_NAMES.length)];
  charName = randFirstName + ' ' + randLastName;
  return charName;
}

var randcoatColor;
function getCoatColor() {
  randcoatColor = COAT_COLORS[Math.floor(Math.random() * COAT_COLORS.length)];
  return randcoatColor;
}

var randEyesColor;
function getEyesColor() {
  randEyesColor = EYES__COLORS[Math.floor(Math.random() * EYES__COLORS.length)];
  return randEyesColor;
}

var charactersNumber = 4;
var wizards = [];

function createCharacters() {
  var randWizard;
  function getRandCharParams() {
    randWizard = {
      name: getCharName(),
      coatColor: getCoatColor(),
      eyesColor: getEyesColor()
    };
    return randWizard;
  }
  for (var i = 0; i < charactersNumber; i++) {
    getRandCharParams();
    wizards[i] = randWizard;
  }
  return wizards;
}

var characters = createCharacters();

function renderWizard(wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
}

function init() {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < characters.length; i++) {
    fragment.appendChild(renderWizard(characters[i]));
  }
  similarListElement.appendChild(fragment);
}

init();

userSetup.querySelector('.setup-similar').classList.remove('hidden');
