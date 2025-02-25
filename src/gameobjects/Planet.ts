import { SpriteBasicConfig } from "../types"

export default abstract class Planet extends Phaser.Physics.Arcade.Sprite {
    public readonly _defaultStats = Object.freeze({
        hp: 1000,
        dmg: 1000
    });

    protected readonly _multiplier = {
        hp: 1,
        dmg: 1
    }

    getHpStat(): number {
        return this._defaultStats.hp * this._multiplier.hp;
    }

    getDmgStat(): number {
        return this._defaultStats.dmg * this._multiplier.dmg;
    }

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
        this.body?.setCircle(50);
        
    }
}