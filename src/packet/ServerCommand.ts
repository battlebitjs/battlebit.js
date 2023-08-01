import { Packet } from './Packet'
import { PacketWriter } from './PacketWriter'

export class ServerCommand extends Packet {
  constructor(public command: string) {
    super()
  }

  public write() {
    const writer = new PacketWriter(10)

    writer.writeString(this.command)

    return writer.toBuffer()
  }
}
