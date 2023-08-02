import { Packet, OPCODES } from './Packet'
import { PacketReader } from './PacketReader'

export class PlayerReport extends Packet {
  public static OPCODE = [OPCODES.PlayerReport]

  public static fromBuffer(buffer: Buffer): PlayerReport {
    const reader = new PacketReader(buffer)
    if (!PlayerReport.OPCODE.includes(reader.opcode)) {
      throw new TypeError(`Invalid opcode(${reader.opcode}) was expecting ${PlayerReport.OPCODE}`)
    }

    const reporter = reader.readUInt64()
    const reported = reader.readUInt64()
    const reason = reader.readInt8()

    return new PlayerReport(reporter, reported, reason)
  }

  constructor(
    public reporter: bigint,
    public reported: bigint,
    public reason: number,
  ) {
    super()
  }
}
