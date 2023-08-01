import { Packet } from './Packet'

export class ServerAccepted extends Packet {
  public write() {
    return Buffer.from([2])
  }
}
