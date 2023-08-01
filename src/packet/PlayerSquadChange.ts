import { Packet } from './Packet'
import { PacketReader } from './PacketReader'

export class PlayerSquadChange extends Packet {
  public static OPCODE = [58, 59]
  // OPCODE 58 - PlayerSquadJoined
  // OPCODE 59 - PlayerSquadLeft

  public static fromBuffer(buffer: Buffer): PlayerSquadChange {
    const reader = new PacketReader(buffer)
    if (!PlayerSquadChange.OPCODE.includes(reader.opcode)) {
      throw new TypeError(`Invalid opcode(${reader.opcode}) was expecting ${PlayerSquadChange.OPCODE}`)
    }

    const joined = reader.opcode == 58
    const steamId = reader.readUInt64()
    const squad = reader.readInt8()

    return new PlayerSquadChange(joined, steamId, squad)
  }

  constructor(
    public joined: boolean,
    public steamId: bigint,
    public squad: number,
  ) {
    super()
  }
}
