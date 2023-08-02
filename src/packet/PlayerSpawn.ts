import { Packet, OPCODES } from './Packet'
import { PacketReader } from './PacketReader'
import { PacketWriter } from './PacketWriter'
import { PlayerLoadoutObject, readPlayerLoadout, writePlayerLoadout } from './PlayerLoadout'

export class PlayerSpawn extends Packet {
  public static OPCODE = [OPCODES.PlayerSpawnRequest]

  public static fromBuffer(buffer: Buffer): PlayerSpawn {
    const reader = new PacketReader(buffer)
    if (!PlayerSpawn.OPCODE.includes(reader.opcode)) {
      throw new TypeError(`Invalid opcode(${reader.opcode}) was expecting ${PlayerSpawn.OPCODE}`)
    }

    const steamId = reader.readUInt64()
    const requestedPoint = reader.readInt8()

    const loadout = readPlayerLoadout(reader)

    const spawnPosition = [reader.readFloat(), reader.readFloat(), reader.readFloat()] as [number, number, number]
    const spawnLookDirection = [reader.readFloat(), reader.readFloat(), reader.readFloat()] as [number, number, number]

    const spawnStance = reader.readInt8()
    const spawnProtection = reader.readFloat()
    const vehicleID = reader.readUInt16()

    return new PlayerSpawn(steamId, requestedPoint, loadout, spawnPosition, spawnLookDirection, spawnStance, spawnProtection, vehicleID)
  }

  constructor(
    public steamId: bigint,
    public requestedPoint: number,
    public loadout: PlayerLoadoutObject,
    public spawnPosition: [number, number, number],
    public spawnLookDirection: [number, number, number],
    public spawnStance: number,
    public spawnProtection: number,
    public vehicleID: number,
  ) {
    super()
  }

  toBuffer() {
    const writer = new PacketWriter(OPCODES.PlayerSpawn)

    writer.writeUInt64(this.steamId)
    writer.writeInt8(this.requestedPoint)

    writePlayerLoadout(writer, this.loadout)

    writer.writeFloat(this.spawnPosition[0])
    writer.writeFloat(this.spawnPosition[1])
    writer.writeFloat(this.spawnPosition[2])

    writer.writeFloat(this.spawnLookDirection[0])
    writer.writeFloat(this.spawnLookDirection[1])
    writer.writeFloat(this.spawnLookDirection[2])

    writer.writeInt8(this.spawnStance)
    writer.writeFloat(this.spawnProtection)
    writer.writeUInt16(this.vehicleID)

    return writer.toBuffer()
  }
}
