import { Packet } from './Packet'
import { PacketReader } from './PacketReader'

interface Player {
  steamId: bigint
  username: string
  team: number
  squad: number
  role: number
}

export class ServerConnect extends Packet {
  public static OPCODE = [1]

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

    const size = reader.readInt8()
    const players: Player[] = []

    for (let i = 0; i < size; i++) {
      const steamId = reader.readUInt64()
      const username = reader.readString()
      const team = reader.readInt8()
      const squad = reader.readInt8()
      const role = reader.readInt8()

      players.push({
        steamId,
        username,
        team,
        squad,
        role,
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
    public players: Player[],
  ) {
    super()
  }
}
