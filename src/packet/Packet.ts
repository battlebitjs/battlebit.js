export class Packet {
  public static OPCODE: number[] = []

  public static fromBuffer(buffer: Buffer): Packet {
    throw new Error('Not implemented')
  }

  public toBuffer(): Buffer {
    throw new Error('This packet can not be written')
  }
}

export const OPCODES = {
  // server packets
  ServerConnect: 1,
  ServerAccepted: 2,
  ServerDenied: 3,
  ServerMapRotationUpdate: 65,
  ServerGamemodeRotationUpdate: 65,

  //
  ServerCommand: 10,
  ServerSettings: 13,
  PlayerStats: 11,
  PlayerSpawn: 12,

  //
  PlayerConnected: 50,
  PlayerDisconnected: 51,
  PlayerMessage: 52,
  PlayerKilledPlayer: 53,
  PlayerStatsGet: 54,
  PlayerStatsSave: 55,
  PlayerRoleChangeRequest: 56,
  PlayerRoleChanged: 57,
  PlayerSquadJoined: 58,
  PlayerSquadLeft: 59,
  PlayerTeamChanged: 60,
  PlayerSpawnRequest: 61,
  PlayerReport: 62,
  PlayerSpawned: 63,
  PlayerDeath: 64,
}
