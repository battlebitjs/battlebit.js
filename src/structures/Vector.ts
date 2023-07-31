export class Vector3 {
  constructor(
    public readonly x: number,
    public readonly y: number,
    public readonly z: number,
  ) {}

  public toString() {
    return `Vector3<${this.x}, ${this.y}, ${this.z}>`
  }
}
