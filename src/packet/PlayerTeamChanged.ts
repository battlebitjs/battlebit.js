import { Packet } from './Packet'
import { PacketReader } from './PacketReader'

export class PlayerTeamChanged extends Packet {
  public static OPCODE = [60]

  public static fromBuffer(buffer: Buffer): PlayerTeamChanged {
    const reader = new PacketReader(buffer)
    if (!PlayerTeamChanged.OPCODE.includes(reader.opcode)) {
      throw new TypeError(`Invalid opcode(${reader.opcode}) was expecting ${PlayerTeamChanged.OPCODE}`)
    }

    const steamId = reader.readUInt64()
    const team = reader.readInt8()

    return new PlayerTeamChanged(steamId, team)
  }

  constructor(
    public steamId: bigint,
    public team: number,
  ) {
    super()
  }
}
