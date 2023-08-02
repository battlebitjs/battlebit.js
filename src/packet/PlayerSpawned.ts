import { Packet, OPCODES } from './Packet'
import { PacketReader } from './PacketReader'
import { PlayerLoadoutObject, readPlayerLoadout } from './PlayerLoadout'

export class PlayerSpawned extends Packet {
  public static OPCODE = [OPCODES.PlayerSpawned]

  public static fromBuffer(buffer: Buffer): PlayerSpawned {
    const reader = new PacketReader(buffer)
    if (!PlayerSpawned.OPCODE.includes(reader.opcode)) {
      throw new TypeError(`Invalid opcode(${reader.opcode}) was expecting ${PlayerSpawned.OPCODE}`)
    }

    const steamId = reader.readUInt64()
    const loadout = readPlayerLoadout(reader)

    return new PlayerSpawned(steamId, loadout)
  }

  constructor(
    public steamId: bigint,
    public loadout: PlayerLoadoutObject,
  ) {
    super()
  }
}
