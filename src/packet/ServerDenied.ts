import { Packet } from './Packet'

export class ServerDenied extends Packet {
  public write() {
    return Buffer.from([3])
  }
}
