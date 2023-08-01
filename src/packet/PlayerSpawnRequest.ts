import { Packet, OPCODES } from './Packet'
import { PacketReader } from './PacketReader'
import { PacketWriter } from './PacketWriter'

export class PlayerSpawnRequest extends Packet {
  public static OPCODE = [OPCODES.PlayerSpawnRequest]

  public static fromBuffer(buffer: Buffer): PlayerSpawnRequest {
    const reader = new PacketReader(buffer)
    if (!PlayerSpawnRequest.OPCODE.includes(reader.opcode)) {
      throw new TypeError(`Invalid opcode(${reader.opcode}) was expecting ${PlayerSpawnRequest.OPCODE}`)
    }

    const steamId = reader.readUInt64()
    const requestedPoint = reader.readInt8()

    const primaryTool = reader.readString()
    const primaryMainSight = reader.readString()
    const primaryTopSight = reader.readString()
    const primaryCantedSight = reader.readString()
    const primaryBarrel = reader.readString()
    const primarySideRail = reader.readString()
    const primaryUnderRail = reader.readString()
    const primaryBoltAction = reader.readString()
    const primarySkinIndex = reader.readInt8()
    const primaryMagazineIndex = reader.readInt8()

    const secondaryTool = reader.readString()
    const secondaryMainSight = reader.readString()
    const secondaryTopSight = reader.readString()
    const secondaryCantedSight = reader.readString()
    const secondaryBarrel = reader.readString()
    const secondarySideRail = reader.readString()
    const secondaryUnderRail = reader.readString()
    const secondaryBoltAction = reader.readString()
    const secondarySkinIndex = reader.readInt8()
    const secondaryMagazineIndex = reader.readInt8()

    const firstAid = reader.readString()
    const lightGadget = reader.readString()
    const heavyGadget = reader.readString()
    const throwable = reader.readString()

    const primaryExtraMagazines = reader.readInt8()
    const secondaryExtraMagazines = reader.readInt8()
    const firstAidExtra = reader.readInt8()
    const lightGadgetExtra = reader.readInt8()
    const heavyGadgetExtra = reader.readInt8()
    const throwableExtra = reader.readInt8()

    const playerHead = reader.readString()
    const playerChest = reader.readString()
    const playerBelt = reader.readString()
    const playerBackpack = reader.readString()
    const playerEye = reader.readString()
    const playerFace = reader.readString()
    const playerHair = reader.readString()
    const playerSkin = reader.readString()
    const playerUniform = reader.readString()
    const playerCamo = reader.readString()

    const spawnPosition = [reader.readFloat(), reader.readFloat(), reader.readFloat()] as [number, number, number]
    const spawnLookDirection = [reader.readFloat(), reader.readFloat(), reader.readFloat()] as [number, number, number]

    const spawnStance = reader.readInt8()
    const spawnProtection = reader.readFloat()

    return new PlayerSpawnRequest(
      steamId,
      requestedPoint,

      primaryTool,
      primaryMainSight,
      primaryTopSight,
      primaryCantedSight,
      primaryBarrel,
      primarySideRail,
      primaryUnderRail,
      primaryBoltAction,
      primarySkinIndex,
      primaryMagazineIndex,

      secondaryTool,
      secondaryMainSight,
      secondaryTopSight,
      secondaryCantedSight,
      secondaryBarrel,
      secondarySideRail,
      secondaryUnderRail,
      secondaryBoltAction,
      secondarySkinIndex,
      secondaryMagazineIndex,

      firstAid,
      lightGadget,
      heavyGadget,
      throwable,

      primaryExtraMagazines,
      secondaryExtraMagazines,
      firstAidExtra,
      lightGadgetExtra,
      heavyGadgetExtra,
      throwableExtra,

      playerHead,
      playerChest,
      playerBelt,
      playerBackpack,
      playerEye,
      playerFace,
      playerHair,
      playerSkin,
      playerUniform,
      playerCamo,

      spawnPosition,
      spawnLookDirection,
      spawnStance,
      spawnProtection,
    )
  }

  constructor(
    public steamId: bigint,
    public requestedPoint: number,

    public primaryTool: string,
    public primaryMainSight: string,
    public primaryTopSight: string,
    public primaryCantedSight: string,
    public primaryBarrel: string,
    public primarySideRail: string,
    public primaryUnderRail: string,
    public primaryBoltAction: string,
    public primarySkinIndex: number,
    public primaryMagazineIndex: number,

    public secondaryTool: string,
    public secondaryMainSight: string,
    public secondaryTopSight: string,
    public secondaryCantedSight: string,
    public secondaryBarrel: string,
    public secondarySideRail: string,
    public secondaryUnderRail: string,
    public secondaryBoltAction: string,
    public secondarySkinIndex: number,
    public secondaryMagazineIndex: number,

    public firstAid: string,
    public lightGadget: string,
    public heavyGadget: string,
    public throwable: string,

    public primaryExtraMagazines: number,
    public secondaryExtraMagazines: number,
    public firstAidExtra: number,
    public lightGadgetExtra: number,
    public heavyGadgetExtra: number,
    public throwableExtra: number,

    public playerHead: string,
    public playerChest: string,
    public playerBelt: string,
    public playerBackpack: string,
    public playerEye: string,
    public playerFace: string,
    public playerHair: string,
    public playerSkin: string,
    public playerUniform: string,
    public playerCamo: string,

    public spawnPosition: [number, number, number],
    public spawnLookDirection: [number, number, number],
    public spawnStance: number,
    public spawnProtection: number,
  ) {
    super()
  }

  toBuffer() {
    const writer = new PacketWriter(OPCODES.PlayerSpawn)

    writer.writeUInt64(this.steamId)
    writer.writeInt8(this.requestedPoint)

    writer.writeString(this.primaryTool)
    writer.writeString(this.primaryMainSight)
    writer.writeString(this.primaryTopSight)
    writer.writeString(this.primaryCantedSight)
    writer.writeString(this.primaryBarrel)
    writer.writeString(this.primarySideRail)
    writer.writeString(this.primaryUnderRail)
    writer.writeString(this.primaryBoltAction)
    writer.writeInt8(this.primarySkinIndex)
    writer.writeInt8(this.primaryMagazineIndex)

    writer.writeString(this.secondaryTool)
    writer.writeString(this.secondaryMainSight)
    writer.writeString(this.secondaryTopSight)
    writer.writeString(this.secondaryCantedSight)
    writer.writeString(this.secondaryBarrel)
    writer.writeString(this.secondarySideRail)
    writer.writeString(this.secondaryUnderRail)
    writer.writeString(this.secondaryBoltAction)
    writer.writeInt8(this.secondarySkinIndex)
    writer.writeInt8(this.secondaryMagazineIndex)

    writer.writeString(this.firstAid)
    writer.writeString(this.lightGadget)
    writer.writeString(this.heavyGadget)
    writer.writeString(this.throwable)

    writer.writeInt8(this.primaryExtraMagazines)
    writer.writeInt8(this.secondaryExtraMagazines)
    writer.writeInt8(this.firstAidExtra)
    writer.writeInt8(this.lightGadgetExtra)
    writer.writeInt8(this.heavyGadgetExtra)
    writer.writeInt8(this.throwableExtra)

    writer.writeString(this.playerHead)
    writer.writeString(this.playerChest)
    writer.writeString(this.playerBelt)
    writer.writeString(this.playerBackpack)
    writer.writeString(this.playerEye)
    writer.writeString(this.playerFace)
    writer.writeString(this.playerHair)
    writer.writeString(this.playerSkin)
    writer.writeString(this.playerUniform)
    writer.writeString(this.playerCamo)

    writer.writeFloat(this.spawnPosition[0])
    writer.writeFloat(this.spawnPosition[1])
    writer.writeFloat(this.spawnPosition[2])

    writer.writeFloat(this.spawnLookDirection[0])
    writer.writeFloat(this.spawnLookDirection[1])
    writer.writeFloat(this.spawnLookDirection[2])

    writer.writeInt8(this.spawnStance)
    writer.writeFloat(this.spawnProtection)

    return writer.toBuffer()
  }
}
