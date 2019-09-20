'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var TEXT_X = 130;
var TEXT_Y = 255;
var BAR_X = 130;
var BAR_Y = 240;
var GAP = 10;
var BAR_GAP = 50;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderBar = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(ctx, x, y, BAR_WIDTH, BAR_HEIGHT);
};

var renderText = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(ctx, x, y, color);
}

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var getColor = function(name) {
if (name === 'Вы') {
      return 'rgba(255, 0, 0, 1)';
    }

return 'hsl(255,' + getRandom(1, 99) + '%' + ', 30%)';
}

var getRandom = function randomInteger(min, max) {
      let rand = min + Math.random() * (max + 1 - min);
      return Math.floor(rand);
    }

window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', 110, 40);
  ctx.fillText('Список результатов:', 110, 60);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = getColor(players[i]);
    renderBar(ctx, BAR_X + (BAR_WIDTH + BAR_GAP) * i, BAR_Y, BAR_WIDTH, -((BAR_HEIGHT * Math.round(times[i])) / Math.round(maxTime)));
    ctx.fillStyle = '#000';
    // renderText(ctx, TEXT_X + (BAR_WIDTH + BAR_GAP) * i, TEXT_Y);
    ctx.fillText(players[i], TEXT_X + (BAR_WIDTH + BAR_GAP) * i, TEXT_Y);
  }
};
