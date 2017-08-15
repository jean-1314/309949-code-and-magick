'use strict';

window.renderStatistics = function(ctx, names, times) {
  ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
  ctx.shadowOffsetY = 10;
  ctx.shadowBlur = 10;

  ctx.fillStyle = 'white';
  ctx.beginPath();
  ctx.moveTo(100, 10);
  ctx.bezierCurveTo(130, 0, 150, 0, 180, 25);
  ctx.bezierCurveTo(210, 0, 260, 0, 300, 15);
  ctx.bezierCurveTo(330, 0, 370, 0, 400, 25);
  ctx.bezierCurveTo(430, -10, 480, -10, 520, 30);
  ctx.bezierCurveTo(550, 60, 520, 100, 520, 150);
  ctx.bezierCurveTo(520, 190, 550, 240, 520, 270);
  ctx.bezierCurveTo(480, 295, 400, 295, 390, 270);
  ctx.bezierCurveTo(350, 295, 300, 295, 280, 270);
  ctx.bezierCurveTo(250, 295, 210, 295, 190, 270);
  ctx.bezierCurveTo(170, 295, 130, 295, 100, 270);
  ctx.bezierCurveTo(70, 220, 80, 180, 100, 160);
  ctx.bezierCurveTo(70, 130, 80, 60, 100, 10);
  ctx.closePath();
  ctx.fill();

  ctx.shadowOffsetY = 0;
  ctx.shadowBlur = 0;

  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'bottom';
  ctx.fillStyle = 'black';
  ctx.fillText('Ура, вы победили!', 130, 40);
  ctx.fillText('Список результатов:', 130, 60);

  var max = -1;
  var maxIndex = -1;

  for (var i = 0 ; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
      maxIndex = i;
    }
  }

  var histogramHeight = 150;
  var step = histogramHeight / (max - 0);

  var barWidth = 40;
  var indent = 50;
  var initialX = 140;
  var initialY = 90;

  ctx.textBaseline = 'top'; // положение надписи от левого верхнего угла

  for(var i = 0; i < times.length; i++) {
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
}
