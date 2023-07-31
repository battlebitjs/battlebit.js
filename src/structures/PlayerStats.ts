import { Roles } from '../consts'
import { PlayerProgress } from './PlayerProgress'

export class PlayerStats {
  public isBanned = false
  public roles = Roles.None
  public progress = new PlayerProgress()
  public toolProgress: number[] = []
  public achievements: number[] = []
  public selections: number[] = []

  public write() {
    //
  }

  public static read() {
    //
  }
}
