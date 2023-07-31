import { Attachment } from '../structures/Attachment'
import { AttachmentType } from '../consts'

export type Attachments = keyof typeof Attachments

export const Attachments = {
  // ----- Barrels -----
  Basic: new Attachment('Basic', AttachmentType.Barrel),
  Compensator: new Attachment('Compensator', AttachmentType.Barrel),
  Heavy: new Attachment('Heavy', AttachmentType.Barrel),
  LongBarrel: new Attachment('Long_Barrel', AttachmentType.Barrel),
  MuzzleBreak: new Attachment('Muzzle_Break', AttachmentType.Barrel),
  Ranger: new Attachment('Ranger', AttachmentType.Barrel),
  SuppressorLong: new Attachment('Suppressor_Long', AttachmentType.Barrel),
  SuppressorShort: new Attachment('Suppressor_Short', AttachmentType.Barrel),
  Tactical: new Attachment('Tactical', AttachmentType.Barrel),
  FlashHider: new Attachment('Flash_Hider', AttachmentType.Barrel),
  Osprey9: new Attachment('Osprey_9', AttachmentType.Barrel),
  DGN308: new Attachment('DGN-308', AttachmentType.Barrel),
  VAMB762: new Attachment('VAMB-762', AttachmentType.Barrel),
  SDN6762: new Attachment('SDN-6_762', AttachmentType.Barrel),
  NT4556: new Attachment('NT-4_556', AttachmentType.Barrel),

  // ----- Canted Sights -----
  Ironsight: new Attachment('Ironsight', AttachmentType.CantedSight),
  CantedRedDot: new Attachment('Canted_Red_Dot', AttachmentType.CantedSight),
  FYouCanted: new Attachment('FYou_Canted', AttachmentType.CantedSight),
  HoloDot: new Attachment('Holo_Dot', AttachmentType.CantedSight),

  // ----- Scope -----
  _6xScope: new Attachment('6x_Scope', AttachmentType.MainSight),
  _8xScope: new Attachment('8x_Scope', AttachmentType.MainSight),
  _15xScope: new Attachment('15x_Scope', AttachmentType.MainSight),
  _20xScope: new Attachment('20x_Scope', AttachmentType.MainSight),
  PTR40Hunter: new Attachment('PTR-40_Hunter', AttachmentType.MainSight),
  _1P78: new Attachment('1P78', AttachmentType.MainSight),
  Acog: new Attachment('Acog', AttachmentType.MainSight),
  M125: new Attachment('M_125', AttachmentType.MainSight),
  Prisma: new Attachment('Prisma', AttachmentType.MainSight),
  Slip: new Attachment('Slip', AttachmentType.MainSight),
  PistolDeltaSight: new Attachment('Pistol_Delta_Sight', AttachmentType.MainSight),
  PistolRedDot: new Attachment('Pistol_Red_Dot', AttachmentType.MainSight),
  AimComp: new Attachment('Aim_Comp', AttachmentType.MainSight),
  Holographic: new Attachment('Holographic', AttachmentType.MainSight),
  Kobra: new Attachment('Kobra', AttachmentType.MainSight),
  OKP7: new Attachment('OKP7', AttachmentType.MainSight),
  PKAS: new Attachment('PK-AS', AttachmentType.MainSight),
  RedDot: new Attachment('Red_Dot', AttachmentType.MainSight),
  Reflex: new Attachment('Reflex', AttachmentType.MainSight),
  Strikefire: new Attachment('Strikefire', AttachmentType.MainSight),
  Razor: new Attachment('Razor', AttachmentType.MainSight),
  Flir: new Attachment('Flir', AttachmentType.MainSight),
  Echo: new Attachment('Echo', AttachmentType.MainSight),
  TRI4X32: new Attachment('TRI4X32', AttachmentType.MainSight),
  FYouSight: new Attachment('FYou_Sight', AttachmentType.MainSight),
  HoloPK120: new Attachment('Holo_PK-120', AttachmentType.MainSight),
  Pistol8xScope: new Attachment('Pistol_8x_Scope', AttachmentType.MainSight),
  BurrisAR332: new Attachment('BurrisAR332', AttachmentType.MainSight),
  HS401G5: new Attachment('HS401G5', AttachmentType.MainSight),

  // ----- Top Scope -----
  DeltaSightTop: new Attachment('Delta_Sight_Top', AttachmentType.TopSight),
  RedDotTop: new Attachment('Red_Dot_Top', AttachmentType.TopSight),
  CRedDotTop: new Attachment('C_Red_Dot_Top', AttachmentType.TopSight),
  FYouTop: new Attachment('FYou_Top', AttachmentType.TopSight),

  // ----- Under Rails -----
  AngledGrip: new Attachment('Angled_Grip', AttachmentType.UnderRail),
  Bipod: new Attachment('Bipod', AttachmentType.UnderRail),
  VerticalGrip: new Attachment('Vertical_Grip', AttachmentType.UnderRail),
  StubbyGrip: new Attachment('Stubby_Grip', AttachmentType.UnderRail),
  StabilGrip: new Attachment('Stabil_Grip', AttachmentType.UnderRail),
  VerticalSkeletonGrip: new Attachment('Vertical_Skeleton_Grip', AttachmentType.UnderRail),
  FABDTFG: new Attachment('FAB-DTFG', AttachmentType.UnderRail),
  MagpulAngled: new Attachment('Magpul_Angled', AttachmentType.UnderRail),
  BCMGunFighter: new Attachment('BCM-Gun_Fighter', AttachmentType.UnderRail),
  ShiftShortAngledGrip: new Attachment('Shift_Short_Angled_Grip', AttachmentType.UnderRail),
  SE5Grip: new Attachment('SE-5_Grip', AttachmentType.UnderRail),
  RK6Foregrip: new Attachment('RK-6_Foregrip', AttachmentType.UnderRail),
  HeraCQRFront: new Attachment('HeraCQR_Front', AttachmentType.UnderRail),
  B25URK: new Attachment('B-25URK', AttachmentType.UnderRail),
  VTACUVGTacticalGrip: new Attachment('VTAC_UVG_TacticalGrip', AttachmentType.UnderRail),

  // ----- Side Rails -----
  Flashlight: new Attachment('Flashlight', AttachmentType.SideRail),
  Rangefinder: new Attachment('Rangefinder', AttachmentType.SideRail),
  Redlaser: new Attachment('Redlaser', AttachmentType.SideRail),
  TacticalFlashlight: new Attachment('Tactical_Flashlight', AttachmentType.SideRail),
  Greenlaser: new Attachment('Greenlaser', AttachmentType.SideRail),
  Searchlight: new Attachment('Searchlight', AttachmentType.SideRail),

  // ----- Bolts -----
  BoltActionA: new Attachment('Bolt_Action_A', AttachmentType.Bolt),
  BoltActionB: new Attachment('Bolt_Action_B', AttachmentType.Bolt),
  BoltActionC: new Attachment('Bolt_Action_C', AttachmentType.Bolt),
  BoltActionD: new Attachment('Bolt_Action_D', AttachmentType.Bolt),
  BoltActionE: new Attachment('Bolt_Action_E', AttachmentType.Bolt),
} as const

export const AttachmentsMap = new Map(
  Object.keys(Attachments).map((k) => {
    const attachment = (Attachments as Record<string, Attachment>)[k]
    return [attachment.name, attachment]
  }),
)
