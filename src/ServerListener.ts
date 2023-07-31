import type { Server, Socket } from 'net'
import { EventEmitter } from 'stream'
import { createServer } from 'net'

import { GameServer } from './GameServer'

export interface ListenerOptions {
  //
}

export interface ServerListener {
  on(event: 'GameServerConnected', listener: (server: GameServer) => void): this
}

export class ServerListener extends EventEmitter {
  protected _server: Server
  public connections = new Map<string, GameServer>()

  constructor(options: ListenerOptions) {
    super()
    this._server = createServer(this._handleConnection.bind(this))
  }

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

  protected async onGameServerConnecting(ip: string, port: number): Promise<boolean> {
    return true
  }

  private async _handleConnection(socket: Socket) {
    if (!(await this.onGameServerConnecting(socket.remoteAddress!, socket.remotePort!))) {
      socket.destroy()
      return
    }

    const server = new GameServer(this, socket, {
      address: '0.0.0.0',
      port: 0,
      isPasswordProtected: false,
      serverName: 'server',
      gamemode: '',
      map: 0,
      mapSize: 0,
      dayNight: 0,
      currentPlayers: 0,
      inQueuePlayers: 0,
      maxPlayers: 0,
      loadingScreenText: '',
      serverRulesText: '',
    })

    socket.on('data', (buffer) => {
      const type = buffer.readInt8()
    })

    try {
    } catch (error) {
      this.emit('error', error)
    }
  }
}
