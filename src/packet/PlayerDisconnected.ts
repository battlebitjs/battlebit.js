import { Packet } from './Packet'
import { PacketReader } from './PacketReader'

export class PlayerDisconnected extends Packet {
  public static OPCODE = [51]

  public static fromBuffer(buffer: Buffer): PlayerDisconnected {
    const reader = new PacketReader(buffer)
    if (!PlayerDisconnected.OPCODE.includes(reader.opcode)) {
      throw new TypeError(`Invalid opcode(${reader.opcode}) was expecting ${PlayerDisconnected.OPCODE}`)
    }

    const steamId = reader.readUInt64()

    return new PlayerDisconnected(steamId)
  }

  constructor(public steamId: bigint) {
    super()
  }
}
