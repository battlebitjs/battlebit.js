import { Packet, OPCODES } from './Packet'

import type { PacketReader } from './PacketReader'
import { PacketWriter } from './PacketWriter'

export interface ServerSettingsObject {
  damageMultiplier: number
  bleedingEnabled: boolean
  staminaEnabled: boolean
  friendlyFireEnabled: boolean
  hideMapVotes: boolean
  onlyWinningTeamCanVote: boolean
  hitMarkersEnabled: boolean
  pointLogEnabled: boolean
  spectatorEnabled: boolean
  squadMedicLimit: number
  squadEngineerLimit: number
  squadSupportLimit: number
  squadReconLimit: number
}

export function readServerSettings(reader: PacketReader): ServerSettingsObject {
  return {
    damageMultiplier: reader.readFloat(),
    bleedingEnabled: reader.readBool(),
    staminaEnabled: reader.readBool(),
    friendlyFireEnabled: reader.readBool(),
    hideMapVotes: reader.readBool(),
    onlyWinningTeamCanVote: reader.readBool(),
    hitMarkersEnabled: reader.readBool(),
    pointLogEnabled: reader.readBool(),
    spectatorEnabled: reader.readBool(),
    squadMedicLimit: reader.readInt8(),
    squadEngineerLimit: reader.readInt8(),
    squadSupportLimit: reader.readInt8(),
    squadReconLimit: reader.readInt8(),
  }
}

export function writeServerSettings(writer: PacketWriter, settings: ServerSettingsObject) {
  writer.writeFloat(settings.damageMultiplier)
  writer.writeBool(settings.bleedingEnabled)
  writer.writeBool(settings.staminaEnabled)
  writer.writeBool(settings.friendlyFireEnabled)
  writer.writeBool(settings.hideMapVotes)
  writer.writeBool(settings.onlyWinningTeamCanVote)
  writer.writeBool(settings.hitMarkersEnabled)
  writer.writeBool(settings.pointLogEnabled)
  writer.writeBool(settings.spectatorEnabled)
  writer.writeInt8(settings.squadMedicLimit)
  writer.writeInt8(settings.squadEngineerLimit)
  writer.writeInt8(settings.squadSupportLimit)
  writer.writeInt8(settings.squadReconLimit)
}

export class ServerSettings extends Packet {
  public static fromObject(settings: ServerSettingsObject): ServerSettings {
    return new ServerSettings(
      settings.damageMultiplier,
      settings.bleedingEnabled,
      settings.staminaEnabled,
      settings.friendlyFireEnabled,
      settings.hideMapVotes,
      settings.onlyWinningTeamCanVote,
      settings.hitMarkersEnabled,
      settings.pointLogEnabled,
      settings.spectatorEnabled,
      settings.squadMedicLimit,
      settings.squadEngineerLimit,
      settings.squadSupportLimit,
      settings.squadReconLimit,
    )
  }

  constructor(
    public damageMultiplier: number,
    public bleedingEnabled: boolean,
    public staminaEnabled: boolean,
    public friendlyFireEnabled: boolean,
    public hideMapVotes: boolean,
    public onlyWinningTeamCanVote: boolean,
    public hitMarkersEnabled: boolean,
    public pointLogEnabled: boolean,
    public spectatorEnabled: boolean,
    public squadMedicLimit: number,
    public squadEngineerLimit: number,
    public squadSupportLimit: number,
    public squadReconLimit: number,
  ) {
    super()
  }

  public toBuffer() {
    const writer = new PacketWriter(OPCODES.ServerSettings)

    writeServerSettings(writer, this)

    return writer.toBuffer()
  }
}
