import { Packet, OPCODES } from './Packet'
import { PacketReader } from './PacketReader'

export class ServerGamemodeRotation extends Packet {
  public static OPCODE = [OPCODES.ServerGamemodeRotationUpdate]

  public static fromBuffer(buffer: Buffer): ServerGamemodeRotation {
    const reader = new PacketReader(buffer)
    if (!ServerGamemodeRotation.OPCODE.includes(reader.opcode)) {
      throw new TypeError(`Invalid opcode(${reader.opcode}) was expecting ${ServerGamemodeRotation.OPCODE}`)
    }

    const gamemodes: string[] = []

    let count = reader.readInt32()
    for (let i = 0; i < count; i++) {
      gamemodes.push(reader.readString())
    }

    return new ServerGamemodeRotation(gamemodes)
  }

  constructor(public gamemodes: string[]) {
    super()
  }
}
