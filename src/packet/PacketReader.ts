export class PacketReader {
  public index = 1
  public opcode: number

  constructor(public buffer: Buffer) {
    this.opcode = buffer.readInt8()
  }

  public readInt8() {
    const int8 = this.buffer.readInt8(this.index)
    this.index += 1

    return int8
  }

  public readInt16() {
    const int16 = this.buffer.readInt16LE(this.index)
    this.index += 2

    return int16
  }

  public readInt32() {
    const int32 = this.buffer.readInt32LE(this.index)
    this.index += 4

    return int32
  }

  public readInt64() {
    const int64 = this.buffer.readBigInt64LE(this.index)
    this.index += 8

    return int64
  }

  public readUInt16() {
    const int16 = this.buffer.readUInt16LE(this.index)
    this.index += 2

    return int16
  }

  public readUInt32() {
    const int32 = this.buffer.readUInt32LE(this.index)
    this.index += 4

    return int32
  }

  public readUInt64() {
    const int64 = this.buffer.readBigUInt64LE(this.index)
    this.index += 8

    return int64
  }

  public readFloat() {
    const float = this.buffer.readFloatLE(this.index)
    this.index += 4

    return float
  }

  public readBool() {
    const bool = this.buffer[this.index] == 1
    this.index += 1

    return bool
  }

  public readString() {
    const length = this.buffer.readUInt16LE(this.index)
    const string = this.buffer.subarray(43, length).toString('utf8')
    this.index += length

    return string
  }

  public readBytes(length: number) {
    if (length == 0) {
      return Buffer.alloc(0)
    }

    const buffer = this.buffer.subarray(this.index, length)
    this.index += length

    return buffer
  }
}
