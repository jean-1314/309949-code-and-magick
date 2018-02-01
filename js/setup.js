'use strict';
(function () {

  var FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var CHARACTERS_NUMBER = 4;
  var userSetup = window.util.userSetup;

  var setupWizard = document.querySelector('.setup-wizard');

  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var fireball = userSetup.querySelector('.setup-fireball-wrap');

  var fillElement = function(element, color) {
    element.style.fill = color;
  };

  var changeElementBackground = function(element, color) {
    element.style.backgroundColor = color;
  };

  window.colorizeElement(wizardCoat, COAT_COLORS, fillElement);
  window.colorizeElement(wizardEyes, EYES_COLORS, fillElement);
  window.colorizeElement(fireball, FIREBALL_COLORS, changeElementBackground);

  function getCoatColor() {
    window.colorizeElement(wizardCoat, COAT_COLORS, fillElement);
  }

  function getEyesColor() {
    window.colorizeElement(wizardEyes, EYES_COLORS, fillElement);
  }

  function getFireballColor() {
    window.colorizeElement(fireball, FIREBALL_COLORS, changeElementBackground);
  }

  function getCharName() {
    var randFirstName = FIRST_NAMES[Math.floor(Math.random() * FIRST_NAMES.length)];
    var randLastName = LAST_NAMES[Math.floor(Math.random() * LAST_NAMES.length)];
    return randFirstName + ' ' + randLastName;
  }

  function getRandCharParams() {
    return {
      name: getCharName(),
      coatColor: getCoatColor(),
      eyesColor: getEyesColor()
    };
  }

  function createCharacters(charactersNumber) {
    var wizards = [];
    for (var i = 0; i < charactersNumber; i++) {
      wizards[i] = getRandCharParams();
    }
    return wizards;
  }

  function renderWizard(wizard, template) {
    var wizardElement = template.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  }

  function init() {
    var similarListElement = document.querySelector('.setup-similar-list');
    var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

    var characters = createCharacters(CHARACTERS_NUMBER);
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < characters.length; i++) {
      fragment.appendChild(renderWizard(characters[i], similarWizardTemplate));
    }

    similarListElement.appendChild(fragment);
    userSetup.querySelector('.setup-similar').classList.remove('hidden');
  }

  init();
})();
