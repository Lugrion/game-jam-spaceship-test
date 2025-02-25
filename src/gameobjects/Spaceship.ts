import { SpriteBasicConfig, WeaponType } from "../types"
import FactoryWeapon from "./FactoryWeapon";

export default abstract class Spaceship extends Phaser.Physics.Arcade.Sprite {
    public readonly _defaultStats = Object.freeze({
        hp: 100,
        dmg: 10,
        speed: 1000,
        ammo: 100
    });

    protected readonly _multiplier = {
        hp: 1,
        dmg: 1,
        speed: 1,
        ammo: 1
    }

    getHpStat(): number {
        return this._defaultStats.hp * this._multiplier.hp;
    }

    getDmgStat(): number {
        return this._defaultStats.dmg * this._multiplier.dmg;
    }

    getSpeedStat(): number {
        return this._defaultStats.speed * this._multiplier.speed;
    }

    getAmmoStat(): number {
        return this._defaultStats.ammo * this._multiplier.ammo;
    }

    // Desktop Controls
    protected cursors: Phaser.Types.Input.Keyboard.CursorKeys | undefined

    public weapon: any

    protected canAttack: boolean = true

    protected hasWeapon: boolean = false

    constructor(
        spriteConfig: SpriteBasicConfig,
    ) {
        super(spriteConfig.current_scene, spriteConfig.x, spriteConfig.y, spriteConfig.texture);
        this.scene = spriteConfig.current_scene;

        this.init()
    }

    init() {
        this.scene.add.existing(this);
        this.scene.physics.world.enable(this);
        this.setCollideWorldBounds(true);

        // Initialize Desktop keyboard input
        this.cursors = this.scene.input.keyboard?.createCursorKeys();

    }

    // Spaceship Methods

    loadWeaponCartridge(
        weaponToLoad: WeaponType
    ) {
        this.weapon = FactoryWeapon.createWeapon(this, weaponToLoad)

        this.hasWeapon = true
    }

    abstract goLeft(): void

    abstract goRight(): void

    abstract goUp() : void

    abstract goDown() : void

    abstract goIdleX() : void

    abstract goIdleY() : void

    abstract goAttack() : void

    basicMovement() {
        if (this.cursors) {

            // Handle PC movement

            if (this.cursors.left.isDown) {
                this.goLeft()
            } else if (this.cursors.right.isDown) {
                this.goRight()
            } else {
                this.goIdleX()
            }

            if (this.cursors.up.isDown) {
                this.goUp()
            } else if (this.cursors.down.isDown) {
                this.goDown()
            } else {
                this.goIdleY()
            }

            if (this.cursors.space.isDown && this.canAttack) {
                this.goAttack()
            }
        }
    }

    update(): void {
        this.basicMovement();
    }
}