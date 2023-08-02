import { Packet, OPCODES } from './Packet'
import { PacketReader } from './PacketReader'

export class ServerMapRotation extends Packet {
  public static OPCODE = [OPCODES.ServerMapRotationUpdate]

  public static fromBuffer(buffer: Buffer): ServerMapRotation {
    const reader = new PacketReader(buffer)
    if (!ServerMapRotation.OPCODE.includes(reader.opcode)) {
      throw new TypeError(`Invalid opcode(${reader.opcode}) was expecting ${ServerMapRotation.OPCODE}`)
    }

    const maps: string[] = []

    let count = reader.readInt32()
    for (let i = 0; i < count; i++) {
      maps.push(reader.readString())
    }

    return new ServerMapRotation(maps)
  }

  constructor(public maps: string[]) {
    super()
  }
}
