import { Scene } from "phaser";

export default abstract class Weapon extends Phaser.Physics.Arcade.Sprite {

    constructor(
        scene: Scene, x: number, y: number, texture: string | Phaser.Textures.Texture
    ) {
        super(scene, x, y, texture)
        this.scene = scene
        this.init()
    }

    init() {
        this.scene.add.existing(this);
        this.scene.physics.world.enable(this);
    }

    destroyWeapon() {
        this.setActive(false);
        this.setVisible(false);
        this.destroy();
    }

    abstract shoot(x: number, y: number): void

    abstract shootBehaviour(): void

    update(): void {
        this.shootBehaviour()

        if (this.x > this.scene.sys.canvas.width || this.x < 0 || this.y > this.scene.sys.canvas.height || this.y < 0) {
            this.destroyWeapon();
        }
    }
}