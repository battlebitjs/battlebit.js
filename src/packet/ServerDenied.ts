import { Packet, OPCODES } from './Packet'

export class ServerDenied extends Packet {
  public toBuffer() {
    return Buffer.from([OPCODES.ServerDenied])
  }
}
