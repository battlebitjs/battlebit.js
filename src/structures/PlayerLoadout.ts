import type { WeaponItem } from './WeaponItem'

import type { Gadget } from './Gadget'
import { GadgetsMap } from '../data/Gadgets'

export class PlayerLoadout {
  public primaryWeapon: WeaponItem | null = null
  public secondaryWeapon: WeaponItem | null = null

  public firstAidName: string | null = null
  public lightGadgetName: string | null = null
  public heavyGadgetName: string | null = null
  public throwableName: string | null = null

  public primaryExtraMagazines: number | null = null
  public secondaryExtraMagazines: number | null = null
  public firstAidExtra: number | null = null
  public lightGadgetExtra: number | null = null
  public heavyGadgetExtra: number | null = null
  public throwableExtra: number | null = null

  public get firstAid() {
    return this.firstAidName ? GadgetsMap.get(this.firstAidName) || null : null
  }

  public set firstAid(value: Gadget | null) {
    this.firstAidName = value ? value.name : null
  }

  public get lightGadget() {
    return this.lightGadgetName ? GadgetsMap.get(this.lightGadgetName) || null : null
  }

  public set lightGadget(value: Gadget | null) {
    this.lightGadgetName = value ? value.name : null
  }

  public get heavyGadget() {
    return this.heavyGadgetName ? GadgetsMap.get(this.heavyGadgetName) || null : null
  }

  public set heavyGadget(value: Gadget | null) {
    this.heavyGadgetName = value ? value.name : null
  }

  public get throwable() {
    return this.throwableName ? GadgetsMap.get(this.throwableName) || null : null
  }

  public set throwable(value: Gadget | null) {
    this.throwableName = value ? value.name : null
  }

  public HasGadget(gadget: Gadget) {
    if (this.firstAidName == gadget.name) return true
    if (this.lightGadgetName == gadget.name) return true
    if (this.heavyGadgetName == gadget.name) return true
    if (this.throwableName == gadget.name) return true
    return false
  }

  public write() {
    //
  }

  public read() {
    //
  }
}
