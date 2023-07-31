import type { AttachmentType } from '../consts'

export class Attachment {
  constructor(
    public readonly name: string,
    public readonly attachmentType: AttachmentType,
  ) {}

  public toString() {
    return this.name
  }
}
