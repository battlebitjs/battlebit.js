import { Gadget } from '../structures/Gadget'

export type Gadgets = keyof typeof Gadgets

export const Gadgets = {
  Bandage: new Gadget('Bandage'),
  Binoculars: new Gadget('Binoculars'),
  RangeFinder: new Gadget('Range Finder'),
  RepairTool: new Gadget('Repair Tool'),
  C4: new Gadget('C4'),
  Claymore: new Gadget('Claymore'),
  M320SmokeGrenadeLauncher: new Gadget('M320 Smoke Grenade Launcher'),
  SmallAmmoKit: new Gadget('Small Ammo Kit'),
  AntiPersonnelMine: new Gadget('Anti Personnel Mine'),
  AntiVehicleMine: new Gadget('Anti Vehicle Mine'),
  MedicKit: new Gadget('Medic Kit'),
  Rpg7HeatExplosive: new Gadget('Rpg7 Heat Explosive'),
  RiotShield: new Gadget('Riot Shield'),
  FragGrenade: new Gadget('Frag Grenade'),
  ImpactGrenade: new Gadget('Impact Grenade'),
  AntiVehicleGrenade: new Gadget('Anti Vehicle Grenade'),
  SmokeGrenadeBlue: new Gadget('Smoke Grenade Blue'),
  SmokeGrenadeGreen: new Gadget('Smoke Grenade Green'),
  SmokeGrenadeRed: new Gadget('Smoke Grenade Red'),
  SmokeGrenadeWhite: new Gadget('Smoke Grenade White'),
  Flare: new Gadget('Flare'),
  SledgeHammer: new Gadget('Sledge Hammer'),
  AdvancedBinoculars: new Gadget('Advanced Binoculars'),
  Mdx201: new Gadget('Mdx 201'),
  BinoSoflam: new Gadget('Bino Soflam'),
  HeavyAmmoKit: new Gadget('Heavy Ammo Kit'),
  Rpg7Pgo7Tandem: new Gadget('Rpg7 Pgo7 Tandem'),
  Rpg7Pgo7HeatExplosive: new Gadget('Rpg7 Pgo7 Heat Explosive'),
  Rpg7Pgo7Fragmentation: new Gadget('Rpg7 Pgo7 Fragmentation'),
  Rpg7Fragmentation: new Gadget('Rpg7 Fragmentation'),
  GrapplingHook: new Gadget('Grappling Hook'),
  AirDrone: new Gadget('Air Drone'),
  Flashbang: new Gadget('Flashbang'),
  Pickaxe: new Gadget('Pickaxe'),
  SuicideC4: new Gadget('SuicideC4'),
  SledgeHammerSkinA: new Gadget('Sledge Hammer SkinA'),
  SledgeHammerSkinB: new Gadget('Sledge Hammer SkinB'),
  SledgeHammerSkinC: new Gadget('Sledge Hammer SkinC'),
  PickaxeIronPickaxe: new Gadget('Pickaxe IronPickaxe'),
} as const

export const GadgetsMap = new Map(
  Object.keys(Gadgets).map((k) => {
    const gadget = (Gadgets as Record<string, Gadget>)[k]
    return [gadget.name, gadget]
  }),
)
