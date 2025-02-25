import { SpriteBasicConfig } from "../../types";
import Planet from "../Planet";

export default class Tubelectric extends Planet {
    protected readonly _multiplier = {
        hp: 1,
        dmg: 1
    }

    constructor(
        spriteConfig: SpriteBasicConfig
    ) {
        super(spriteConfig)
        this.setScale(7);
        this.setupAnimation();
        this.play("spin")
    }

    setupAnimation() {
        //Planet Spin animation
        this.anims.create({
            key: 'spin',
            frames: this.anims.generateFrameNames('tubelectric', {
                start: 2081,
                end: 2130,
                prefix: 'sprite',
                zeroPad: 0
            }),
            frameRate: 12,
            repeat: -1
        });
    }
}

