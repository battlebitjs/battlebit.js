import { Packet, OPCODES } from './Packet'
import { PacketWriter } from './PacketWriter'

export class ServerCommand extends Packet {
  constructor(public command: string) {
    super()
  }

  public toBuffer() {
    const writer = new PacketWriter(OPCODES.ServerCommand)

    writer.writeString(this.command)

    return writer.toBuffer()
  }
}
