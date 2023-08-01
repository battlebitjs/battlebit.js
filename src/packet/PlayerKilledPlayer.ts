import { Packet } from './Packet'
import { PacketReader } from './PacketReader'

export class PlayerKilledPlayer extends Packet {
  public static OPCODE = [53]

  public static fromBuffer(buffer: Buffer): PlayerKilledPlayer {
    const reader = new PacketReader(buffer)
    if (!PlayerKilledPlayer.OPCODE.includes(reader.opcode)) {
      throw new TypeError(`Invalid opcode(${reader.opcode}) was expecting ${PlayerKilledPlayer.OPCODE}`)
    }

    const killerSteamId = reader.readUInt64()
    const killerPosition = [reader.readFloat(), reader.readFloat(), reader.readFloat()] as [number, number, number]
    const victimSteamId = reader.readUInt64()
    const victimPosition = [reader.readFloat(), reader.readFloat(), reader.readFloat()] as [number, number, number]
    const tool = reader.readString()

    return new PlayerKilledPlayer(killerSteamId, killerPosition, victimSteamId, victimPosition, tool)
  }

  constructor(
    public killerSteamId: bigint,
    public killerPosition: [number, number, number],
    public victimSteamId: bigint,
    public victimPosition: [number, number, number],
    public tool: string,
  ) {
    super()
  }
}
