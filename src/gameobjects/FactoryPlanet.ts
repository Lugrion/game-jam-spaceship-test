import { PlanetType, SpriteBasicConfig } from "../types";
import Tubelectric from "./planets/Tubelectric";

export default class PlanetFactory {
    private constructor() { }

    // Here we can implement skins and stat upgrades. Fetching the data in the scene.

    // Different Planets
    static createPlanet(spriteConfig: SpriteBasicConfig, planetSelector: PlanetType) {

        // Improve into a Hash Map in the future please xD
        switch (planetSelector) {
            case "tubelectric":
                spriteConfig.texture = "tubelectric";
                return new Tubelectric(spriteConfig);
        }

    }
}