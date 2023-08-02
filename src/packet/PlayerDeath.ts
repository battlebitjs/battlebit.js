import { Packet, OPCODES } from './Packet'
import { PacketReader } from './PacketReader'

export class PlayerDeath extends Packet {
  public static OPCODE = [OPCODES.PlayerDeath]

  public static fromBuffer(buffer: Buffer): PlayerDeath {
    const reader = new PacketReader(buffer)
    if (!PlayerDeath.OPCODE.includes(reader.opcode)) {
      throw new TypeError(`Invalid opcode(${reader.opcode}) was expecting ${PlayerDeath.OPCODE}`)
    }

    const steamId = reader.readUInt64()

    return new PlayerDeath(steamId)
  }

  constructor(public steamId: bigint) {
    super()
  }
}
