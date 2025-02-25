import { Scene } from 'phaser';
import Spaceship from '../gameobjects/Spaceship';
import SpaceshipFactory from '../gameobjects/FactorySpaceship';
import Planet from '../gameobjects/Planet';
import PlanetFactory from '../gameobjects/FactoryPlanet';
import { PlanetType, SpaceshipType, WeaponType } from '../types';

export class MainGame extends Scene {
    private camera: Phaser.Cameras.Scene2D.Camera;

    private width: number;
    private height: number;

    public spaceship: Spaceship;

    public planet: Planet;

    public planetHP: number
    public spaceshipHP: number

    constructor() {
        super('MainGame');
    }

    init() {
        this.camera = this.cameras.main;

        this.width = this.camera.width;
        this.height = this.camera.height;
    }

    create(data: { spaceship: SpaceshipType, weapon: WeaponType, planet: PlanetType }) {

        this.input.once('pointerdown', () => {

            this.scene.start('GameOver');

        });


        this.spawner(data);
        this.setupPhysics();
    }

    spawner(data: { spaceship: SpaceshipType, weapon: WeaponType, planet: PlanetType }) {
        // Planet Logic

        this.planet = PlanetFactory.createPlanet({
            current_scene: this,
            x: this.width / 2,
            y: 0,
            texture: ''
        }, data.planet)


        // Spaceship Logic

        this.spaceship = SpaceshipFactory.createSpaceship({
            current_scene: this,
            x: this.width / 2,
            y: this.height / 2,
            texture: ''
        }, data.spaceship)


        this.spaceshipHP = this.spaceship.getHpStat();
        this.planetHP = this.planet.getHpStat();
        
        // Weapon Logic
        this.spaceship.loadWeaponCartridge(data.weapon)
    }

    setupPhysics() {
        this.physics.add.overlap(this.spaceship.weapon, this.planet, () => {
            console.log("OUCH")
        });
    }

    update(): void {
        this.spaceship.update()
        this.planet.update()
    }
}
