import { SpaceshipType, SpriteBasicConfig } from "../types";
import Circulus from "./spaceships/Circulus";
import Squarimus from "./spaceships/Squarimus";

export default class SpaceshipFactory {
    private constructor() { }

    // Here we can implement skins and stat upgrades. Fetching the data in the scene.

    // Different Spaceships
    static createSpaceship(spriteConfig: SpriteBasicConfig, spaceshipSelector: SpaceshipType) {

        // Improve into a Hash Map in the future please xD
        switch (spaceshipSelector) {
            case "squarimus":
                spriteConfig.texture = "squarimus";
                return new Squarimus(spriteConfig);
            case "circulus":
                spriteConfig.texture = "circulus";
                return new Circulus(spriteConfig);
        }
    }
}