import { Packet, OPCODES } from './Packet'
import { PacketReader } from './PacketReader'
import { PacketWriter } from './PacketWriter'

export class PlayerStats extends Packet {
  public static OPCODE = [OPCODES.PlayerStatsGet, OPCODES.PlayerStatsSave]
  // OPCODE 54 - PlayerStatsGet (expects a PlayerStats return)
  // OPCODE 55 - PlayerStatsSave

  public static fromBuffer(buffer: Buffer): PlayerStats {
    const reader = new PacketReader(buffer)
    if (!PlayerStats.OPCODE.includes(reader.opcode)) {
      throw new TypeError(`Invalid opcode(${reader.opcode}) was expecting ${PlayerStats.OPCODE}`)
    }

    const save = reader.opcode === OPCODES.PlayerStatsSave
    const steamId = reader.readUInt64()
    const banned = reader.readBool()
    const roles = reader.readUInt64()

    const killCount = reader.readUInt32()
    const leaderKills = reader.readUInt32()
    const assaultKills = reader.readUInt32()
    const medicKills = reader.readUInt32()
    const engineerKills = reader.readUInt32()
    const supportKills = reader.readUInt32()
    const reconKills = reader.readUInt32()
    const deathCount = reader.readUInt32()
    const winCount = reader.readUInt32()
    const loseCount = reader.readUInt32()
    const friendlyShots = reader.readUInt32()
    const friendlyKills = reader.readUInt32()
    const revived = reader.readUInt32()
    const revivedTeammates = reader.readUInt32()
    const assists = reader.readUInt32()
    const prestige = reader.readUInt32()
    const rank = reader.readUInt32()
    const experience = reader.readUInt32()
    const shotsFired = reader.readUInt32()
    const shotsHit = reader.readUInt32()
    const headshots = reader.readUInt32()
    const objectivesCompleted = reader.readUInt32()
    const healedHps = reader.readUInt32()
    const roadKills = reader.readUInt32()
    const suicides = reader.readUInt32()
    const vehiclesDestroyed = reader.readUInt32()
    const vehicleHpRepaired = reader.readUInt32()
    const longestKill = reader.readUInt32()
    const playTimeSeconds = reader.readUInt32()
    const leaderPlayTime = reader.readUInt32()
    const assaultPlayTime = reader.readUInt32()
    const medicPlayTime = reader.readUInt32()
    const engineerPlayTime = reader.readUInt32()
    const supportPlayTime = reader.readUInt32()
    const reconPlayTime = reader.readUInt32()
    const leaderScore = reader.readUInt32()
    const assaultScore = reader.readUInt32()
    const medicScore = reader.readUInt32()
    const supportScore = reader.readUInt32()
    const engineerScore = reader.readUInt32()
    const reconScore = reader.readUInt32()
    const totalScore = reader.readUInt32()

    const toolProgressSize = reader.readUInt16()
    const toolProgress = reader.readBytes(toolProgressSize)

    const achievementsSize = reader.readUInt16()
    const achievements = reader.readBytes(achievementsSize)

    const selectionsSize = reader.readUInt16()
    const selections = reader.readBytes(selectionsSize)

    return new PlayerStats(
      save,
      steamId,
      banned,
      roles,

      killCount,
      leaderKills,
      assaultKills,
      medicKills,
      engineerKills,
      supportKills,
      reconKills,
      deathCount,
      winCount,
      loseCount,
      friendlyShots,
      friendlyKills,
      revived,
      revivedTeammates,
      assists,
      prestige,
      rank,
      experience,
      shotsFired,
      shotsHit,
      headshots,
      objectivesCompleted,
      healedHps,
      roadKills,
      suicides,
      vehiclesDestroyed,
      vehicleHpRepaired,
      longestKill,
      playTimeSeconds,
      leaderPlayTime,
      assaultPlayTime,
      medicPlayTime,
      engineerPlayTime,
      supportPlayTime,
      reconPlayTime,
      leaderScore,
      assaultScore,
      medicScore,
      supportScore,
      engineerScore,
      reconScore,
      totalScore,

      [...toolProgress],
      [...achievements],
      [...selections],
    )
  }

  constructor(
    public save: boolean,
    public steamId: bigint,
    public banned: boolean,
    public roles: bigint,

    public killCount: number,
    public leaderKills: number,
    public assaultKills: number,
    public medicKills: number,
    public engineerKills: number,
    public supportKills: number,
    public reconKills: number,
    public deathCount: number,
    public winCount: number,
    public loseCount: number,
    public friendlyShots: number,
    public friendlyKills: number,
    public revived: number,
    public revivedTeammates: number,
    public assists: number,
    public prestige: number,
    public rank: number,
    public experience: number,
    public shotsFired: number,
    public shotsHit: number,
    public headshots: number,
    public objectivesCompleted: number,
    public healedHps: number,
    public roadKills: number,
    public suicides: number,
    public vehiclesDestroyed: number,
    public vehicleHpRepaired: number,
    public longestKill: number,
    public playTimeSeconds: number,
    public leaderPlayTime: number,
    public assaultPlayTime: number,
    public medicPlayTime: number,
    public engineerPlayTime: number,
    public supportPlayTime: number,
    public reconPlayTime: number,
    public leaderScore: number,
    public assaultScore: number,
    public medicScore: number,
    public supportScore: number,
    public engineerScore: number,
    public reconScore: number,
    public totalScore: number,

    public toolProgress: number[],
    public achievements: number[],
    public selections: number[],
  ) {
    super()
  }

  toBuffer() {
    const writer = new PacketWriter(OPCODES.PlayerStats)

    writer.writeUInt64(this.steamId)
    writer.writeBool(this.banned)
    writer.writeUInt64(this.roles)

    writer.writeUInt32(this.killCount)
    writer.writeUInt32(this.leaderKills)
    writer.writeUInt32(this.assaultKills)
    writer.writeUInt32(this.medicKills)
    writer.writeUInt32(this.engineerKills)
    writer.writeUInt32(this.supportKills)
    writer.writeUInt32(this.reconKills)
    writer.writeUInt32(this.deathCount)
    writer.writeUInt32(this.winCount)
    writer.writeUInt32(this.loseCount)
    writer.writeUInt32(this.friendlyShots)
    writer.writeUInt32(this.friendlyKills)
    writer.writeUInt32(this.revived)
    writer.writeUInt32(this.revivedTeammates)
    writer.writeUInt32(this.assists)
    writer.writeUInt32(this.prestige)
    writer.writeUInt32(this.rank)
    writer.writeUInt32(this.experience)
    writer.writeUInt32(this.shotsFired)
    writer.writeUInt32(this.shotsHit)
    writer.writeUInt32(this.headshots)
    writer.writeUInt32(this.objectivesCompleted)
    writer.writeUInt32(this.healedHps)
    writer.writeUInt32(this.roadKills)
    writer.writeUInt32(this.suicides)
    writer.writeUInt32(this.vehiclesDestroyed)
    writer.writeUInt32(this.vehicleHpRepaired)
    writer.writeUInt32(this.longestKill)
    writer.writeUInt32(this.playTimeSeconds)
    writer.writeUInt32(this.leaderPlayTime)
    writer.writeUInt32(this.assaultPlayTime)
    writer.writeUInt32(this.medicPlayTime)
    writer.writeUInt32(this.engineerPlayTime)
    writer.writeUInt32(this.supportPlayTime)
    writer.writeUInt32(this.reconPlayTime)
    writer.writeUInt32(this.leaderScore)
    writer.writeUInt32(this.assaultScore)
    writer.writeUInt32(this.medicScore)
    writer.writeUInt32(this.supportScore)
    writer.writeUInt32(this.engineerScore)
    writer.writeUInt32(this.reconScore)
    writer.writeUInt32(this.totalScore)

    const toolProgress = Buffer.from(this.toolProgress)
    writer.writeUInt16(toolProgress.length)
    writer.writeBytes(toolProgress)

    const achievements = Buffer.from(this.achievements)
    writer.writeUInt16(achievements.length)
    writer.writeBytes(achievements)

    const selections = Buffer.from(this.selections)
    writer.writeUInt16(selections.length)
    writer.writeBytes(selections)

    return writer.toBuffer()
  }
}
