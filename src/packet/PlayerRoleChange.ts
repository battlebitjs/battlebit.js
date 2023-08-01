import { Packet } from './Packet'
import { PacketReader } from './PacketReader'

export class PlayerRoleChange extends Packet {
  public static OPCODE = [56, 57]
  // OPCODE 56 - PlayerRoleChangeRequest
  // OPCODE 57 - PlayerRoleChanged

  public static fromBuffer(buffer: Buffer): PlayerRoleChange {
    const reader = new PacketReader(buffer)
    if (!PlayerRoleChange.OPCODE.includes(reader.opcode)) {
      throw new TypeError(`Invalid opcode(${reader.opcode}) was expecting ${PlayerRoleChange.OPCODE}`)
    }

    const requesting = reader.opcode === 56
    const steamId = reader.readUInt64()
    const role = reader.readInt8()

    return new PlayerRoleChange(requesting, steamId, role)
  }

  constructor(
    public requesting: boolean,
    public steamId: bigint,
    public role: number,
  ) {
    super()
  }
}
