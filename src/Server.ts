import type { Socket } from 'net'
import { createServer } from 'net'

import { OPCODES } from './packet/Packet'
import { PlayerConnected } from './packet/PlayerConnected'
import { PlayerDisconnected } from './packet/PlayerDisconnected'
import { PlayerKilledPlayer } from './packet/PlayerKilledPlayer'
import { PlayerMessage } from './packet/PlayerMessage'
import { PlayerRoleChange } from './packet/PlayerRoleChange'
import { PlayerSpawnRequest } from './packet/PlayerSpawnRequest'
import { PlayerSquadChange } from './packet/PlayerSquadChange'
import { PlayerStats } from './packet/PlayerStats'
import { PlayerTeamChanged } from './packet/PlayerTeamChanged'
import { ServerAccepted } from './packet/ServerAccepted'
import { ServerCommand } from './packet/ServerCommand'
import { ServerConnect } from './packet/ServerConnect'
import { ServerDenied } from './packet/ServerDenied'

export class ServerListener {
  protected _server = createServer(
    {
      keepAlive: true,
      keepAliveInitialDelay: 0,
    },
    this._handleConnection.bind(this),
  )

  listen(port?: number, callback?: () => void): this
  listen(port?: number, hostname?: string, callback?: () => void): this
  listen(port?: number, hostname?: string | (() => void), callback?: () => void) {
    this._server.listen(port, hostname as any, callback)
    return this
  }

  close(callback?: (err?: Error) => void) {
    this._server.close(callback)
    return this
  }

  protected async onConnection(socket: Socket): Promise<boolean> {
    console.log(`[${socket.remoteAddress}:${socket.remotePort}] new connection`)
    return true
  }

  protected async onError(error: Error) {
    console.error(error)
  }

  protected async onPlayerConnected(socket: Socket, packet: PlayerConnected) {
    console.log(
      `[${socket.remoteAddress}:${socket.remotePort}] Player ${packet.steamId} <${packet.username}> connected on team ${packet.team} on squad ${packet.squad} with role ${packet.role}`,
    )
  }

  protected async onPlayerDisconnected(socket: Socket, packet: PlayerDisconnected) {
    console.log(`[${socket.remoteAddress}:${socket.remotePort}] Player ${packet.steamId} disconnected`)
  }

  protected async onPlayerKilledPlayer(socket: Socket, packet: PlayerKilledPlayer) {
    console.log(
      `[${socket.remoteAddress}:${socket.remotePort}] ${packet.killerSteamId}<${packet.killerPosition[0]},${packet.killerPosition[1]},${packet.killerPosition[2]}> killed ${packet.victimSteamId}<${packet.victimPosition[0]},${packet.victimPosition[1]},${packet.victimPosition[2]}> with a ${packet.tool}`,
    )
  }

  protected async onPlayerMessage(socket: Socket, packet: PlayerMessage) {
    console.log(`[${socket.remoteAddress}:${socket.remotePort}] ${packet.steamId}: ${packet.message}`)
  }

  protected async onPlayerRoleChange(socket: Socket, packet: PlayerRoleChange) {
    if (packet.requesting) {
      console.log(`[${socket.remoteAddress}:${socket.remotePort}] Player ${packet.steamId} wants to change role to ${packet.role}`)
      socket.write(new ServerCommand(`setrole ${packet.steamId} ${packet.role}`).toBuffer())
    } else {
      console.log(`[${socket.remoteAddress}:${socket.remotePort}] Player ${packet.steamId} changed role to ${packet.role}`)
    }
  }

  protected async onPlayerSpawn(socket: Socket, packet: PlayerSpawnRequest) {
    console.log(`[${socket.remoteAddress}:${socket.remotePort}] Player ${packet.steamId} spawning`) // todo
    socket.write(packet.toBuffer())
  }

  protected async onPlayerSquadChange(socket: Socket, packet: PlayerSquadChange) {
    if (packet.joined) {
      console.log(`[${socket.remoteAddress}:${socket.remotePort}] Player ${packet.steamId} joined squad ${packet.squad}`)
    } else {
      console.log(`[${socket.remoteAddress}:${socket.remotePort}] Player ${packet.steamId} left squad ${packet.squad}`)
    }
  }

  protected async onPlayerStats(socket: Socket, packet: PlayerStats) {
    if (packet.save) {
      console.log(`[${socket.remoteAddress}:${socket.remotePort}] Saving player ${packet.steamId} stats`)
    } else {
      console.log(`[${socket.remoteAddress}:${socket.remotePort}] Requesting player ${packet.steamId} stats`)
      socket.write(packet.toBuffer())
    }
  }

  protected async onPlayerTeamChanged(socket: Socket, packet: PlayerTeamChanged) {
    console.log(`[${socket.remoteAddress}:${socket.remotePort}] Player ${packet.steamId} changed to team ${packet.team}`)
  }

  protected async onServerConnected(socket: Socket, packet: ServerConnect) {
    console.log(`[${socket.remoteAddress}:${socket.remotePort}] Server "${packet.name}" connected`)
    socket.write(new ServerAccepted().toBuffer())
  }

  private async _handleConnection(socket: Socket) {
    if (!(await this.onConnection(socket))) {
      socket.destroy()
      return
    }

    socket.on('data', (buffer) => {
      const opcode = buffer.readInt8()

      try {
        switch (opcode) {
          case OPCODES.ServerConnect:
            this.onServerConnected(socket, ServerConnect.fromBuffer(buffer))
            break
          case OPCODES.PlayerConnected:
            this.onPlayerConnected(socket, PlayerConnected.fromBuffer(buffer))
            break
          case OPCODES.PlayerDisconnected:
            this.onPlayerDisconnected(socket, PlayerDisconnected.fromBuffer(buffer))
            break
          case OPCODES.PlayerKilledPlayer:
            this.onPlayerKilledPlayer(socket, PlayerKilledPlayer.fromBuffer(buffer))
            break
          case OPCODES.PlayerMessage:
            this.onPlayerMessage(socket, PlayerMessage.fromBuffer(buffer))
            break
          case OPCODES.PlayerRoleChangeRequest:
          case OPCODES.PlayerRoleChanged:
            this.onPlayerRoleChange(socket, PlayerRoleChange.fromBuffer(buffer))
            break
          case OPCODES.PlayerStatsGet:
          case OPCODES.PlayerStatsSave:
            this.onPlayerStats(socket, PlayerStats.fromBuffer(buffer))
            break
          case OPCODES.PlayerTeamChanged:
            this.onPlayerTeamChanged(socket, PlayerTeamChanged.fromBuffer(buffer))
            break
          default:
            throw new RangeError(`unknown opcode(${opcode})`)
        }
      } catch (reason) {
        if (opcode == OPCODES.ServerConnect) {
          socket.write(new ServerDenied().toBuffer())
        }
        this.onError(reason as Error)
      }
    })

    socket.on('close', (hadError) => {
      //
    })

    socket.on('error', (error) => this.onError(error))
  }
}
