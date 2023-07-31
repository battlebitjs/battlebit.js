import type { Socket } from 'net'
import type { ServerListener } from './ServerListener'

import { Player } from './Player'

import { MapSize, MapDayNight, GameRole } from './consts'

interface GameServerInfo {
  address: string
  port: number
  isPasswordProtected: boolean
  serverName: string
  gamemode: string
  map: number
  mapSize: MapSize
  dayNight: MapDayNight
  currentPlayers: number
  inQueuePlayers: number
  maxPlayers: number
  loadingScreenText: string
  serverRulesText: string
}

export class GameServer {
  private _socket: Socket
  private _listener: ServerListener
  private _info: GameServerInfo

  public players = new Map<string, any>()

  constructor(listener: ServerListener, socket: Socket, info: GameServerInfo) {
    this._listener = listener
    this._socket = socket
    this._info = info

    this.socket.on(`data`, this._handelData.bind(this))
  }

  get socket() {
    return this._socket
  }

  get connected() {
    return !this._socket.closed
  }

  get ip() {
    return this._socket.localAddress
  }

  get port() {
    return this._socket.remotePort
  }

  disconnect(callback?: () => void) {
    this._socket.end(callback)
    return this
  }

  public executeCommand(command: string) {
    return this
  }

  public setNewPassword(newPassword: string) {
    return this.executeCommand(`setpass ${newPassword}`)
  }

  public setPingLimit(newPing: number) {
    return this.executeCommand(`setmaxping ${newPing}`)
  }

  public announceShort(msg: string) {
    return this.executeCommand(`an ${msg}`)
  }

  public announceLong(msg: string) {
    return this.executeCommand(`ann ${msg}`)
  }

  public serverLog(msg: string, messageLifetime: number) {
    return this.executeCommand(`serverlog ${msg} ${messageLifetime}`)
  }

  public forceStartGame() {
    return this.executeCommand(`forcestart`)
  }

  public forceEndGame() {
    return this.executeCommand(`endgame`)
  }

  public say(msg: string) {
    return this.executeCommand(`say ${msg}`)
  }

  public stopServer() {
    return this.executeCommand(`stop`)
  }

  public closeServer() {
    return this.executeCommand(`notifyend`)
  }

  public kickAllPlayers() {
    return this.executeCommand(`kick all`)
  }

  public kick(steamID: Player | string, reason: string) {
    return this.executeCommand(`kick ${steamID} ${reason}`)
  }

  public kill(steamID: Player | string) {
    this.executeCommand(`kill ${steamID}`)
  }

  public changeTeam(steamID: Player | string) {
    return this.executeCommand(`changeteam ${steamID}`)
  }

  public kickFromSquad(steamID: Player | string) {
    return this.executeCommand(`squadkick ${steamID}`)
  }

  public disbandPlayerSquad(steamID: Player | string) {
    return this.executeCommand(`squaddisband ${steamID}`)
  }

  public promoteSquadLeader(steamID: Player | string) {
    return this.executeCommand(`squadpromote ${steamID}`)
  }

  public warnPlayer(steamID: Player | string, msg: string) {
    return this.executeCommand(`warn ${steamID} ${msg}`)
  }

  public messagePlayer(steamID: Player | string, msg: string) {
    return this.executeCommand(`msg ${steamID} ${msg}`)
  }

  public setRoleTo(steamID: Player | string, role: GameRole) {
    return this.executeCommand(`setrole ${steamID} ${role}`)
  }

  private _handelData(data: Buffer) {}
}
