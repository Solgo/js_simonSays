(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Game()
{
  this.userInput = [];
  this.series = [];
  this.gameOver = false;
  this.colors = ["red", "yellow", "blue", "green"];
};

Game.prototype.incrementSeries = function()
{
  var colorIndex = Math.floor(4 * (Math.random()));
  var color = this.colors[colorIndex];
  this.series.push(color);
  return this.series;
};

Game.prototype.userGuess = function(guess)
{
  if (!this.gameOver)
  {
    this.userInput.push(guess);
    var lastElementIndex = this.userInput.Length - 1;
    if (this.userInput.Length === this.series.Length)
    {
      if (this.userInput[lastElementIndex] != this.series[lastElementIndex])
      {
        this.gameOver = true;
      }
      else
      {
        this.incrementSeries();
      }
    }
    else
    {
      if (this.userInput[lastElementIndex] != this.series[lastElementIndex])
      {
        this.gameOver = true;
      }
    }
  }
};

exports.gameModule = Game;

},{}],2:[function(require,module,exports){
var Game = require('./../js/game.js').gameModule;

$(document).ready(function()
{
  $("#start").click(function()
  {
    var currentGame = new Game();
    var seriesList = currentGame.incrementSeries();
    seriesList.forEach(function(seriesColor)
    {
      console.log(seriesColor);
    });
  });
});

},{"./../js/game.js":1}]},{},[2]);
