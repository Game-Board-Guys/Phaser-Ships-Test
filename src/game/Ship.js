import bootState from './States/boot';
import loadState from './States/load';
import menuState from './States/menu';
import playState from './States/play';
import winState from './States/win';
import loseState from './States/lose';

window.PIXI = require('phaser-ce/build/custom/pixi');
window.p2 = require('phaser-ce/build/custom/p2');
window.Phaser = require('phaser-ce/build/custom/phaser-split');

export default function Game() {
    var game = new window.Phaser.Game(800, 800, window.Phaser.AUTO, 'myCanvas');

    game.state.add('boot', bootState);
    game.state.add('load', loadState);
    game.state.add('menu', menuState);
    game.state.add('play', playState);
    game.state.add('win', winState);
    game.state.add('lose', loseState);

    game.state.start('boot');
}