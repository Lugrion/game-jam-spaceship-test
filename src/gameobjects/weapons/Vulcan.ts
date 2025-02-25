import { Math, Scene } from "phaser";
import Weapon from "../Weapon";

export default class Vulcan extends Weapon {
    constructor(
        scene: Scene, x: number, y: number
    ) {
        super(scene, x, y, "squarimus")
        this.setScale(5)
    }

    shoot(x: number, y: number) {
        this.setPosition(x, y - 50);
        this.setActive(true);
        this.setVisible(true);
    }

    shootBehaviour() {
        // Add distinct and satisfying behaviour
        
        // Funny logistic map effect
        this.setVelocityX(Math.Between(-500, 500))
        this.setVelocityY(-500)
    }
}

