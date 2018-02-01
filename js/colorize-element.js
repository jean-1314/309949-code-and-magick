'use strict';
(function () {

  function getRandomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  window.colorizeElement = function (element, colors) {
    element.addEventListener('click', function () {
      var color = getRandomColor(colors);
      if (element.tagName.toLowerCase() === 'div') {
        element.style.backgroundColor = color;
      } else {
        element.style.fill = color;
      }
    })
  };
})();
