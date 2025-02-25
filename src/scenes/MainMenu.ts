import { Scene } from 'phaser';
import { PlanetType, SpaceshipType, WeaponType } from '../types';

export class MainMenu extends Scene {

    private camera: Phaser.Cameras.Scene2D.Camera;

    private width: number;
    private height: number;

    private selectedSpaceship: SpaceshipType;
    private selectedWeapon: WeaponType;
    private selectedPlanet: PlanetType;

    constructor() {
        super('MainMenu');
    }

    init() {
        this.camera = this.cameras.main;
        this.width = this.camera.width;
        this.height = this.camera.height;

        this.selectedSpaceship = "squarimus"
        this.selectedWeapon = "vulcan"
        this.selectedPlanet = "tubelectric"
    }

    create() {

        // Title
        
        this.camera.setBackgroundColor("#00ff00")

        this.add.text(this.width / 2, 100, 'Resented Annihilation', {
            fontFamily: 'Arial Black', fontSize: 54, color: '#ffffff',
            stroke: '#000000', strokeThickness: 15,
            align: 'center'
        }).setOrigin(0.5);  

        this.add.text(this.width / 2, this.height * 0.95, 'Play', {
            fontFamily: 'Arial Black', fontSize: 54, color: '#ffffff',
            stroke: '#000000', strokeThickness: 15,
            align: 'center'
        }).setOrigin(0.5).setInteractive().once('pointerdown', () => {

            this.scene.start('MainGame', { spaceship: this.selectedSpaceship, weapon: this.selectedWeapon, planet: this.selectedPlanet });

        });
    }
}