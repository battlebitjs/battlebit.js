import { Packet, OPCODES } from './Packet'
import { PacketReader } from './PacketReader'

export class PlayerConnected extends Packet {
  public static OPCODE = [OPCODES.PlayerConnected]

  public static fromBuffer(buffer: Buffer): PlayerConnected {
    const reader = new PacketReader(buffer)
    if (!PlayerConnected.OPCODE.includes(reader.opcode)) {
      throw new TypeError(`Invalid opcode(${reader.opcode}) was expecting ${PlayerConnected.OPCODE}`)
    }

    const steamId = reader.readUInt64()
    const username = reader.readString()
    const team = reader.readInt8()
    const squad = reader.readInt8()
    const role = reader.readInt8()

    return new PlayerConnected(steamId, username, team, squad, role)
  }

  constructor(
    public steamId: bigint,
    public username: string,
    public team: number,
    public squad: number,
    public role: number,
  ) {
    super()
  }
}
