import { Weapon } from '../structures/Weapon'
import { WeaponType } from '../consts'

export type Weapons = keyof typeof Weapons

export const Weapons = {
  ACR: new Weapon('ACR', WeaponType.Rifle),
  AK15: new Weapon('AK15', WeaponType.Rifle),
  AK74: new Weapon('AK74', WeaponType.Rifle),
  G36C: new Weapon('G36C', WeaponType.Rifle),
  HoneyBadger: new Weapon('Honey Badger', WeaponType.PersonalDefenseWeapon_PDW),
  KrissVector: new Weapon('Kriss Vector', WeaponType.SubmachineGun_SMG),
  L86A1: new Weapon('L86A1', WeaponType.LightSupportGun_LSG),
  L96: new Weapon('L96', WeaponType.SniperRifle),
  M4A1: new Weapon('M4A1', WeaponType.Rifle),
  M9: new Weapon('M9', WeaponType.Pistol),
  M110: new Weapon('M110', WeaponType.DMR),
  M249: new Weapon('M249', WeaponType.LightMachineGun_LMG),
  MK14EBR: new Weapon('MK14 EBR', WeaponType.DMR),
  MK20: new Weapon('MK20', WeaponType.DMR),
  MP7: new Weapon('MP7', WeaponType.SubmachineGun_SMG),
  PP2000: new Weapon('PP2000', WeaponType.SubmachineGun_SMG),
  SCARH: new Weapon('SCAR-H', WeaponType.Rifle),
  SSG69: new Weapon('SSG 69', WeaponType.SniperRifle),
  SV98: new Weapon('SV-98', WeaponType.SniperRifle),
  UMP45: new Weapon('UMP-45', WeaponType.SubmachineGun_SMG),
  Unica: new Weapon('Unica', WeaponType.HeavyPistol),
  USP: new Weapon('USP', WeaponType.Pistol),
  AsVal: new Weapon('As Val', WeaponType.Carbine),
  AUGA3: new Weapon('AUG A3', WeaponType.Rifle),
  DesertEagle: new Weapon('Desert Eagle', WeaponType.HeavyPistol),
  FAL: new Weapon('FAL', WeaponType.Rifle),
  Glock18: new Weapon('Glock 18', WeaponType.AutoPistol),
  M200: new Weapon('M200', WeaponType.SniperRifle),
  MP443: new Weapon('MP 443', WeaponType.Pistol),
  FAMAS: new Weapon('FAMAS', WeaponType.Rifle),
  MP5: new Weapon('MP5', WeaponType.SubmachineGun_SMG),
  P90: new Weapon('P90', WeaponType.PersonalDefenseWeapon_PDW),
  MSR: new Weapon('MSR', WeaponType.SniperRifle),
  PP19: new Weapon('PP19', WeaponType.SubmachineGun_SMG),
  SVD: new Weapon('SVD', WeaponType.DMR),
  Rem700: new Weapon('Rem700', WeaponType.SniperRifle),
  SG550: new Weapon('SG550', WeaponType.Rifle),
  Groza: new Weapon('Groza', WeaponType.PersonalDefenseWeapon_PDW),
  HK419: new Weapon('HK419', WeaponType.Rifle),
  ScorpionEVO: new Weapon('ScorpionEVO', WeaponType.Carbine),
  Rsh12: new Weapon('Rsh12', WeaponType.HeavyPistol),
  MG36: new Weapon('MG36', WeaponType.LightSupportGun_LSG),
  AK5C: new Weapon('AK5C', WeaponType.Rifle),
  Ultimax100: new Weapon('Ultimax100', WeaponType.LightMachineGun_LMG),
} as const

export const WeaponsMap = new Map(
  Object.keys(Weapons).map((k) => {
    const weapon = (Weapons as Record<string, Weapon>)[k]
    return [weapon.name, weapon]
  }),
)
