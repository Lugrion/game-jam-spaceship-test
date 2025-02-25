import { SpriteBasicConfig } from "../../types";
import Spaceship from "../Spaceship";

export default class Circulus extends Spaceship {

    // Stats
    protected readonly _multiplier = {
        hp: 0.5,
        dmg: 1.5,
        speed: 2,
        ammo: 1
    }

    constructor(
        spriteConfig: SpriteBasicConfig
    ) {
        super(spriteConfig)
        this.setScale(3);

        // Bounce might be fun :)
        this.setBounce(0.5)

        this.body?.setCircle(10);

    }

    goLeft() {
        this.setAccelerationX(-this.getSpeedStat());
    }

    goRight() {
        this.setAccelerationX(this.getSpeedStat());
    }

    goUp() {
        this.setAccelerationY(-this.getSpeedStat());
    }

    goDown() {
        this.setAccelerationY(this.getSpeedStat());
    }

    goIdleX() {
        this.setAccelerationX(0);
    }

    goIdleY() {
        this.setAccelerationY(0);
    }

    goAttack() {
        console.log("ATTACK")
        
        if (this.hasWeapon) {
            const weapon = this.weapon.get();
            if(weapon){
                weapon.shoot(this.x, this.y - 10)
            }
        }

    }
}