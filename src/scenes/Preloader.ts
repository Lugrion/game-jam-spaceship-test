import { Scene } from 'phaser';

export class Preloader extends Scene {
    constructor() {
        super('Preloader');
    }

    init() {
        //  A simple progress bar. This is the outline of the bar.
        this.add.rectangle(360, 384, 468, 32).setStrokeStyle(1, 0xffffff);

        //  This is the progress bar itself. It will increase in size from the left based on the % of progress.
        const bar = this.add.rectangle(360 - 230, 384, 4, 28, 0xffffff);

        //  Use the 'progress' event emitted by the LoaderPlugin to update the loading bar
        this.load.on('progress', (progress: number) => {

            //  Update the progress bar (our bar is 464px wide, so 100% = 464px)
            bar.width = 4 + (460 * progress);

        });
    }

    preload() {
        //  Load the assets for the game - Replace with your own assets


        this.load.setPath('assets');
        this.load.atlas('tubelectric', 'tubelectric.png', 'tubelectric.json');

        // Spaceship Skins
        // Squarimus
        this.add.graphics().fillStyle(0xffffff, 1).fillRect(0, 0, 10, 10).generateTexture('squarimus', 10, 10).destroy();
        
        // Circulus
        this.add.graphics().fillStyle(0xffffff, 1).fillCircle(10, 10, 10).generateTexture('circulus', 20, 20).destroy();


        // Test
        this.load.image('rocket', 'rocket.png');
    }

    create() {
        //  When all the assets have loaded, it's often worth creating global objects here that the rest of the game can use.
        //  For example, you can define global animations here, so we can use them in other scenes.

        //  Move to the MainMenu. You could also swap this for a Scene Transition, such as a camera fade.
        this.scene.start('MainMenu');
    }
}
