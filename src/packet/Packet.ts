export class Packet {
  public static OPCODE: number[] = []

  public static fromBuffer(buffer: Buffer): Packet {
    throw new Error('Not implemented')
  }

  public write(): Buffer {
    throw new Error('This packet can not be written')
  }
}
