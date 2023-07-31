import { WeaponType } from '../consts'

export class Weapon {
  constructor(
    public readonly name: string,
    public readonly weaponType: WeaponType,
  ) {}

  public toString() {
    return this.name
  }
}
