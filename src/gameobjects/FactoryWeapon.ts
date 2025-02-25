import { WeaponType } from "../types";
import Spaceship from "./Spaceship";
import Laser from "./weapons/Laser";
import Uzi from "./weapons/Uzi";
import Vulcan from "./weapons/Vulcan";

export default class FactoryWeapon {
    private constructor() { }

    // Here we can implement different weapons and stat upgrades. Fetching the data in the scene.

    // Different Weapon
    static createWeapon(spaceshipInstance: Spaceship, weaponSelector: WeaponType) {

        // Improve into a Hash Map in the future please xD
        switch (weaponSelector) {
            case "vulcan":
                return spaceshipInstance.scene.physics.add.group({
                    classType: Vulcan,
                    maxSize: spaceshipInstance.getAmmoStat(),
                    runChildUpdate: true
                });
            case "laser":
                return spaceshipInstance.scene.physics.add.group({
                    classType: Laser,
                    maxSize: spaceshipInstance.getAmmoStat(),
                    runChildUpdate: true
                });
            case "uzi":
                return spaceshipInstance.scene.physics.add.group({
                    classType: Uzi,
                    maxSize: spaceshipInstance.getAmmoStat(),
                    runChildUpdate: true
                });
        }
    }
}