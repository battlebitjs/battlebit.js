import { Packet, OPCODES } from './Packet'

export class ServerAccepted extends Packet {
  public toBuffer() {
    return Buffer.from([OPCODES.ServerAccepted])
  }
}
