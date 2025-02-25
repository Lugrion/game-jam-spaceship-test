
import { Scene } from "phaser";
import Weapon from "../Weapon";

export default class Laser extends Weapon {
    constructor(
        scene: Scene, x: number, y: number
    ) {
        super(scene, x, y, "squarimus")
    }

    shoot(x: number, y: number) {
        this.setPosition(x, y - 50);
        this.setActive(true);
        this.setVisible(true);
    }

    shootBehaviour() {
        // Add distinct and satisfying behaviour

        this.setVelocityY(-100)
    }
}