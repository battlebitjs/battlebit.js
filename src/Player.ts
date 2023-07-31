import type { GameServer } from './GameServer'
import type { GameRole } from './consts'

interface PlayerData {
  steamid: string
  name: string
  role: string
  team: string
  squad: string
}

export class Player {
  protected _server: GameServer
  protected _data: PlayerData

  constructor(server: GameServer, data: PlayerData) {
    this._server = server
    this._data = data
  }

  get steamid() {
    return this._data.steamid
  }

  get server() {
    return this._server
  }

  get name() {
    return this._data.name
  }

  get role() {
    return this._data.role
  }

  get team() {
    return this._data.team
  }

  get squad() {
    return this._data.squad
  }

  kick(reason = '') {
    this._server.kick(this, reason)
  }

  kill() {
    this._server.kill(this)
  }

  changeTeam() {
    this._server.changeTeam(this)
  }

  kickFromSquad() {
    this._server.kickFromSquad(this)
  }

  disbandSquad() {
    this._server.disbandPlayerSquad(this)
  }

  promoteToSquadLeader() {
    this._server.promoteSquadLeader(this)
  }

  warn(msg: string) {
    this._server.warnPlayer(this, msg)
  }

  message(msg: string) {
    this._server.messagePlayer(this, msg)
  }

  setNewRole(role: GameRole) {
    this._server.kill(this)
  }

  teleport() {
    //
  }

  toString() {
    return this._data.steamid
  }
}
