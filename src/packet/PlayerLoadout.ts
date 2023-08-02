import type { PacketReader } from './PacketReader'
import type { PacketWriter } from './PacketWriter'

export interface PlayerLoadoutObject {
  primaryTool: string
  primaryMainSight: string
  primaryTopSight: string
  primaryCantedSight: string
  primaryBarrel: string
  primarySideRail: string
  primaryUnderRail: string
  primaryBoltAction: string
  primarySkinIndex: number
  primaryMagazineIndex: number

  secondaryTool: string
  secondaryMainSight: string
  secondaryTopSight: string
  secondaryCantedSight: string
  secondaryBarrel: string
  secondarySideRail: string
  secondaryUnderRail: string
  secondaryBoltAction: string
  secondarySkinIndex: number
  secondaryMagazineIndex: number

  firstAid: string
  lightGadget: string
  heavyGadget: string
  throwable: string

  primaryExtraMagazines: number
  secondaryExtraMagazines: number
  firstAidExtra: number
  lightGadgetExtra: number
  heavyGadgetExtra: number
  throwableExtra: number

  playerHead: string
  playerChest: string
  playerBelt: string
  playerBackpack: string
  playerEye: string
  playerFace: string
  playerHair: string
  playerSkin: string
  playerUniform: string
  playerCamo: string
}

export function readPlayerLoadout(reader: PacketReader): PlayerLoadoutObject {
  return {
    primaryTool: reader.readString(),
    primaryMainSight: reader.readString(),
    primaryTopSight: reader.readString(),
    primaryCantedSight: reader.readString(),
    primaryBarrel: reader.readString(),
    primarySideRail: reader.readString(),
    primaryUnderRail: reader.readString(),
    primaryBoltAction: reader.readString(),
    primarySkinIndex: reader.readInt8(),
    primaryMagazineIndex: reader.readInt8(),

    secondaryTool: reader.readString(),
    secondaryMainSight: reader.readString(),
    secondaryTopSight: reader.readString(),
    secondaryCantedSight: reader.readString(),
    secondaryBarrel: reader.readString(),
    secondarySideRail: reader.readString(),
    secondaryUnderRail: reader.readString(),
    secondaryBoltAction: reader.readString(),
    secondarySkinIndex: reader.readInt8(),
    secondaryMagazineIndex: reader.readInt8(),

    firstAid: reader.readString(),
    lightGadget: reader.readString(),
    heavyGadget: reader.readString(),
    throwable: reader.readString(),

    primaryExtraMagazines: reader.readInt8(),
    secondaryExtraMagazines: reader.readInt8(),
    firstAidExtra: reader.readInt8(),
    lightGadgetExtra: reader.readInt8(),
    heavyGadgetExtra: reader.readInt8(),
    throwableExtra: reader.readInt8(),

    playerHead: reader.readString(),
    playerChest: reader.readString(),
    playerBelt: reader.readString(),
    playerBackpack: reader.readString(),
    playerEye: reader.readString(),
    playerFace: reader.readString(),
    playerHair: reader.readString(),
    playerSkin: reader.readString(),
    playerUniform: reader.readString(),
    playerCamo: reader.readString(),
  }
}

export function writePlayerLoadout(writer: PacketWriter, loadout: PlayerLoadoutObject) {
  writer.writeString(loadout.primaryTool)
  writer.writeString(loadout.primaryMainSight)
  writer.writeString(loadout.primaryTopSight)
  writer.writeString(loadout.primaryCantedSight)
  writer.writeString(loadout.primaryBarrel)
  writer.writeString(loadout.primarySideRail)
  writer.writeString(loadout.primaryUnderRail)
  writer.writeString(loadout.primaryBoltAction)
  writer.writeInt8(loadout.primarySkinIndex)
  writer.writeInt8(loadout.primaryMagazineIndex)

  writer.writeString(loadout.secondaryTool)
  writer.writeString(loadout.secondaryMainSight)
  writer.writeString(loadout.secondaryTopSight)
  writer.writeString(loadout.secondaryCantedSight)
  writer.writeString(loadout.secondaryBarrel)
  writer.writeString(loadout.secondarySideRail)
  writer.writeString(loadout.secondaryUnderRail)
  writer.writeString(loadout.secondaryBoltAction)
  writer.writeInt8(loadout.secondarySkinIndex)
  writer.writeInt8(loadout.secondaryMagazineIndex)

  writer.writeString(loadout.firstAid)
  writer.writeString(loadout.lightGadget)
  writer.writeString(loadout.heavyGadget)
  writer.writeString(loadout.throwable)

  writer.writeInt8(loadout.primaryExtraMagazines)
  writer.writeInt8(loadout.secondaryExtraMagazines)
  writer.writeInt8(loadout.firstAidExtra)
  writer.writeInt8(loadout.lightGadgetExtra)
  writer.writeInt8(loadout.heavyGadgetExtra)
  writer.writeInt8(loadout.throwableExtra)

  writer.writeString(loadout.playerHead)
  writer.writeString(loadout.playerChest)
  writer.writeString(loadout.playerBelt)
  writer.writeString(loadout.playerBackpack)
  writer.writeString(loadout.playerEye)
  writer.writeString(loadout.playerFace)
  writer.writeString(loadout.playerHair)
  writer.writeString(loadout.playerSkin)
  writer.writeString(loadout.playerUniform)
  writer.writeString(loadout.playerCamo)
}
