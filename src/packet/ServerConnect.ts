import { Packet, OPCODES } from './Packet'
import { PacketReader } from './PacketReader'
import { PlayerLoadoutObject, readPlayerLoadout } from './PlayerLoadout'
import { ServerSettingsObject, readServerSettings } from './ServerSettings'

export interface Player {
  steamId: bigint
  username: string
  team: number
  squad: number
  role: number
  alive: boolean
  loadout: PlayerLoadoutObject | null
}

export class ServerConnect extends Packet {
  public static OPCODE = [OPCODES.ServerConnect]

  public static fromBuffer(buffer: Buffer): ServerConnect {
    const reader = new PacketReader(buffer)
    if (!ServerConnect.OPCODE.includes(reader.opcode)) {
      throw new TypeError(`Invalid opcode(${reader.opcode}) was expecting ${ServerConnect.OPCODE}`)
    }

    const port = reader.readUInt16()
    const name = reader.readString()
    const gamemode = reader.readString()

    const map = reader.readString()
    const mapSize = reader.readInt8()
    const mapTime = reader.readInt8()

    const playerCount = reader.readInt8()
    const playerQueue = reader.readInt8()
    const playerMax = reader.readInt8()

    const loadingMessage = reader.readString()
    const rules = reader.readString()

    let size = reader.readInt32() // not needed? throw out

    const settings = readServerSettings(reader)

    size = reader.readInt32() // not needed? throw out

    let count = reader.readInt32()
    const maps: string[] = []
    for (let i = 0; i < count; i++) {
      maps.push(reader.readString())
    }

    count = reader.readInt32()
    const gamemodes: string[] = []
    for (let i = 0; i < count; i++) {
      gamemodes.push(reader.readString())
    }

    count = reader.readInt8()
    const players: Player[] = []
    for (let i = 0; i < count; i++) {
      const steamId = reader.readUInt64()
      const username = reader.readString()
      const team = reader.readInt8()
      const squad = reader.readInt8()
      const role = reader.readInt8()
      const alive = reader.readBool()

      let loadout: PlayerLoadoutObject | null = null
      if (alive) {
        loadout = readPlayerLoadout(reader)
      }

      players.push({
        steamId,
        username,
        team,
        squad,
        role,
        alive,
        loadout,
      })
    }

    return new ServerConnect(
      port,
      name,
      gamemode,

      map,
      mapSize,
      mapTime,

      playerCount,
      playerQueue,
      playerMax,

      loadingMessage,
      rules,
      settings,
      maps,
      gamemodes,
      players,
    )
  }

  constructor(
    public port: number,
    public name: string,
    public gamemode: string,

    public map: string,
    public mapSize: number,
    public mapTime: number,

    public playerCount: number,
    public playerQueue: number,
    public playerMax: number,

    public loadingMessage: string,
    public rules: string,

    public settings: ServerSettingsObject,
    public maps: string[],
    public gamemodes: string[],
    public players: Player[],
  ) {
    super()
  }
}
