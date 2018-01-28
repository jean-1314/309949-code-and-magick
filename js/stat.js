window.renderStatistics = function (ctx, names, times) {
  ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
  ctx.shadowOffsetY = 10;
  ctx.shadowBlur = 10;
  ctx.fillStyle = 'white';
  ctx.fillRect(100, 10, 420, 270);

  ctx.shadowOffsetY = 0;
  ctx.shadowBlur = 0;

  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'bottom';
  ctx.fillStyle = 'black';
  ctx.fillText('Ура, вы победили!', 130, 40);
  ctx.fillText('Список результатов:', 130, 60);

  var max = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }

  var histogramHeight = 150;
  var step = histogramHeight / (max - 0);

  var barWidth = 40;
  var indent = 50;
  var initialX = 140;
  var initialY = 90;

  ctx.textBaseline = 'top'; // положение надписи от левого верхнего угла

  for (i = 0; i < times.length; i++) {
    var barHeight = histogramHeight - times[i] * step;

    var alphaChannel = Math.random().toFixed(2);

    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 77, 255, ' + alphaChannel + ' )';
    }

    ctx.fillRect(initialX + (indent + barWidth) * i, initialY + barHeight, barWidth, times[i] * step);

    ctx.fillStyle = 'black';
    ctx.fillText(times[i].toFixed(), initialX + (indent + barWidth) * i, (initialY + barHeight) - 20);
    ctx.fillText(names[i], initialX + (indent + barWidth) * i, initialY + histogramHeight);
  }
};
