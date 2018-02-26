export default function loadState() {
    var ASSET_URL = "img/"
    return {
        preload: function () {
            this.game.load.crossOrigin = "Anonymous";
            game.stage.backgroundColor = "#1199DA";

            // Load all the ships
            for (var i = 1; i <= 6; i++) {
                game.load.image('ship' + String(i) + '_1', ASSET_URL + 'ship' + String(i) + '_1.png');
                game.load.image('ship' + String(i) + '_2', ASSET_URL + 'ship' + String(i) + '_2.png');
                game.load.image('ship' + String(i) + '_3', ASSET_URL + 'ship' + String(i) + '_3.png');
                game.load.image('ship' + String(i) + '_4', ASSET_URL + 'ship' + String(i) + '_4.png');
            }

            game.load.image('bullet', ASSET_URL + 'cannon_ball.png');
            game.load.image('water', ASSET_URL + 'water_tile.png');
        },
        create: function () {
            this.game.state.start('play')
        }
    }

}