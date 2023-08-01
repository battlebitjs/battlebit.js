export class PacketWriter {
  public chunks: Buffer[] = []

  constructor(opcode: number) {
    this.chunks.push(Buffer.from([opcode]))
  }

  public writeInt8(data: number) {
    const chunk = Buffer.allocUnsafe(1)
    chunk.writeInt8(data)
    this.chunks.push(chunk)

    return this
  }

  public writeInt16(data: number) {
    const chunk = Buffer.allocUnsafe(2)
    chunk.writeInt16LE(data)
    this.chunks.push(chunk)

    return this
  }

  public writeInt32(data: number) {
    const chunk = Buffer.allocUnsafe(4)
    chunk.writeInt32LE(data)
    this.chunks.push(chunk)

    return this
  }

  public writeInt64(data: bigint) {
    const chunk = Buffer.allocUnsafe(8)
    chunk.writeBigInt64LE(data)
    this.chunks.push(chunk)

    return this
  }

  public writeUInt16(data: number) {
    const chunk = Buffer.allocUnsafe(2)
    chunk.writeUInt16LE(data)
    this.chunks.push(chunk)

    return this
  }

  public writeUInt32(data: number) {
    const chunk = Buffer.allocUnsafe(4)
    chunk.writeUInt32LE(data)
    this.chunks.push(chunk)

    return this
  }

  public writeUInt64(data: bigint) {
    const chunk = Buffer.allocUnsafe(8)
    chunk.writeBigUInt64LE(data)
    this.chunks.push(chunk)

    return this
  }

  public writeFloat(data: number) {
    const chunk = Buffer.allocUnsafe(4)
    chunk.writeFloatLE(data)
    this.chunks.push(chunk)

    return this
  }

  public writeBool(data: boolean) {
    const chunk = Buffer.allocUnsafe(1)
    chunk.writeInt8(data ? 1 : 0)
    this.chunks.push(chunk)

    return this
  }

  public writeString(data: string) {
    const chunk = Buffer.from(data, 'utf8')
    this.writeUInt16(chunk.length)
    this.chunks.push(chunk)

    return this
  }

  public writeBytes(data: Buffer) {
    this.chunks.push(data)
    return this
  }

  public toBuffer() {
    return Buffer.concat(this.chunks)
  }
}
