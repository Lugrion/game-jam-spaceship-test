import { SpriteBasicConfig } from "../../types";
import Spaceship from "../Spaceship";

export default class Squarimus extends Spaceship {

    // Stats

    protected readonly _multiplier = {
        hp: 1,
        dmg: 1,
        speed: 1,
        ammo: 1
    }

    constructor(
        spriteConfig: SpriteBasicConfig
    ) {
        super(spriteConfig)
        this.setScale(5);

        // Change to smaller size for better player experience
        this.body?.setSize(8, 8);
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