import { Packet, OPCODES } from './Packet'
import { PacketReader } from './PacketReader'

export class PlayerMessage extends Packet {
  public static OPCODE = [OPCODES.PlayerMessage]

  public static fromBuffer(buffer: Buffer): PlayerMessage {
    const reader = new PacketReader(buffer)
    if (!PlayerMessage.OPCODE.includes(reader.opcode)) {
      throw new TypeError(`Invalid opcode(${reader.opcode}) was expecting ${PlayerMessage.OPCODE}`)
    }

    const steamId = reader.readUInt64()
    const message = reader.readString()

    return new PlayerMessage(steamId, message)
  }

  constructor(
    public steamId: bigint,
    public message: string,
  ) {
    super()
  }
}
