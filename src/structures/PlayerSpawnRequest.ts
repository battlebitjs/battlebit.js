import type { Vector3 } from './Vector'
import type { PlayerLoadout } from './PlayerLoadout'
import type { PlayerWearings } from './PlayerWearings'

import type { PlayerSpawningPosition, PlayerStand } from '../consts'

export class PlayerSpawnRequest {
  public requestedPoint: PlayerSpawningPosition | null = null
  public loadout: PlayerLoadout | null = null
  public wearings: PlayerWearings | null = null
  public spawnPosition: Vector3 | null = null
  public lookDirection: Vector3 | null = null
  public spawnStand: PlayerStand | null = null
  public spawnProtection: number | null = null

  public write() {
    //
  }

  public read() {
    //
  }
}
