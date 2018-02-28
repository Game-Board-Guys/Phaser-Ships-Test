export default function loadState(game) {
    var ASSET_URL = "img/"
    return {
        preload: function () {
            this.game = game;
            this.game.load.crossOrigin = "Anonymous";
            game.stage.backgroundColor = "#1199DA";

            // Load all the ships
            for (var i = 1; i <= 6; i++) {
                this.game.load.image('ship' + String(i) + '_1', ASSET_URL + 'ship' + String(i) + '_1.png');
                this.game.load.image('ship' + String(i) + '_2', ASSET_URL + 'ship' + String(i) + '_2.png');
                this.game.load.image('ship' + String(i) + '_3', ASSET_URL + 'ship' + String(i) + '_3.png');
                this.game.load.image('ship' + String(i) + '_4', ASSET_URL + 'ship' + String(i) + '_4.png');
            }

            this.game.load.image('bullet', ASSET_URL + 'cannon_ball.png');
            this.game.load.image('water', ASSET_URL + 'water_tile.png');
        },
        create: function () {
            return this.game.state.start('play')
        }
    }
}