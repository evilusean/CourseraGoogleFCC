import Card from '../helpers/card';
import Zone from '../helpers/zone';
import io from 'socket.io-client';
export default class Game extends Phaser.Scene {
    constructor() {
        super({
            key: 'Game'
        });
    }

preload() {
    this.load.image('cyanCardFront', 'assets/CyanCardFront.png');
    this.load.image('cyanCardBack', 'assets/CyanCardBack.png');
    this.load.image('magentaCardFront', 'assets/MagentaCardFront.png');
    this.load.image('magentaCardBack', 'assets/MagentaCardBack.png');
}

    create() {
        this.socket = io('http://localhost:3000');

        this.socket.on('connect', function () {
            console.log('Connected!');
        });
        this.dealText = this.add.text(75, 350, ['DEAL CARDS']).setFontSize(18).setFontFamily('Trebuchet MS').setColor('#00ffff').setInteractive();
        let self = this;
        this.zone = new Zone(this);
        this.dropZone = this.zone.renderZone();
        this.outline = this.zone.renderOutline(this.dropZone);

        this.dealCards = () => {
            for (let i = 0; i < 5; i++) {
                let playerCard = new Card(this);
                playerCard.render(475 + (i * 100), 650, 'cyanCardFront');
            }
        }

        this.dealText.on('pointerdown', function () {
            self.dealCards();
        })

        this.dealText.on('pointerover', function () {
            self.dealText.setColor('#ff69b4');
        })

        this.dealText.on('pointerout', function () {
            self.dealText.setColor('#00ffff');
        })

        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
            gameObject.x = dragX;
            gameObject.y = dragY;
        })
        this.input.on('dragstart', function (pointer, gameObject) {
            gameObject.setTint(0xff69b4);
            self.children.bringToTop(gameObject);
        })

        this.input.on('dragend', function (pointer, gameObject, dropped) {
            gameObject.setTint();
            if (!dropped) {
                gameObject.x = gameObject.input.dragStartX;
                gameObject.y = gameObject.input.dragStartY;
            }
        })

        this.input.on('drop', function (pointer, gameObject, dropZone) {
            dropZone.data.values.cards++;
            gameObject.x = (dropZone.x - 350) + (dropZone.data.values.cards * 50);
            gameObject.y = dropZone.y;
            gameObject.disableInteractive();
        })
    }

    update() {

    }
}