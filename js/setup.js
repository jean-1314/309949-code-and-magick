var userSetup = document.querySelector('.setup');

var FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var CHARACTERS_NUMBER = 4;

function getCharName() {
  var randFirstName = FIRST_NAMES[Math.floor(Math.random() * FIRST_NAMES.length)];
  var randLastName = LAST_NAMES[Math.floor(Math.random() * LAST_NAMES.length)];
  return randFirstName + ' ' + randLastName;
}

function getCoatColor() {
  return COAT_COLORS[Math.floor(Math.random() * COAT_COLORS.length)];
}

function getEyesColor() {
  return EYES_COLORS[Math.floor(Math.random() * EYES_COLORS.length)];
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
  var userSetup = document.querySelector('.setup');
  userSetup.classList.remove('hidden');

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
