export type AttachmentType = (typeof AttachmentType)[keyof typeof AttachmentType]

export const AttachmentType = {
  MainSight: 'MainSight',
  TopSight: 'TopSight',
  CantedSight: 'CantedSight',
  Barrel: 'Barrel',
  UnderRail: 'UnderRail',
  SideRail: 'SideRail',
  Bolt: 'Bolt',
} as const

export type ChatChannel = (typeof ChatChannel)[keyof typeof ChatChannel]

export const ChatChannel = {
  AllChat: 'AllChat',
  TeamChat: 'TeamChat',
  SquadChat: 'SquadChat',
} as const

export type GameRole = (typeof GameRole)[keyof typeof GameRole]

export const GameRole = {
  Assault: 0,
  Medic: 1,
  Support: 2,
  Engineer: 3,
  Recon: 4,
  Leader: 5,
} as const

export type MapDayNight = (typeof MapDayNight)[keyof typeof MapDayNight]

export const MapDayNight = {
  Day: 0,
  Night: 1,
} as const

export type MapSize = (typeof MapSize)[keyof typeof MapSize]

export const MapSize = {
  None: 0,
  '8v8': 8,
  '16vs16': 16,
  '32vs32': 32,
  '64vs64': 64,
  '127vs127': 90,
} as const

export type PlayerSpawningPosition = (typeof PlayerSpawningPosition)[keyof typeof PlayerSpawningPosition]

export const PlayerSpawningPosition = {
  SpawnAtPoint: 'SpawnAtPoint',
  SpawnAtRally: 'SpawnAtRally',
  SpawnAtFriend: 'SpawnAtFriend',
  SpawnAtVehicle: 'SpawnAtVehicle',
  Null: 'Null',
} as const

export type PlayerStand = (typeof PlayerStand)[keyof typeof PlayerStand]

export const PlayerStand = {
  Standing: 0,
  Crouching: 1,
  Proning: 2,
} as const

export type Roles = (typeof Roles)[keyof typeof Roles]

export const Roles = {
  None: 0,
  Admin: 1 << 0,
  Moderator: 1 << 1,
  Special: 1 << 2,
  Vip: 1 << 3,
} as const

export type Squads = (typeof Squads)[keyof typeof Squads]

export const Squads = {
  NoSquad: 0,
  Alpha: 1,
  Bravo: 2,
  Charlie: 3,
  Delta: 4,
  Echo: 5,
  Foxtrot: 6,
  Golf: 7,
  Hotel: 8,
  India: 9,
  Juliett: 10,
  Kilo: 11,
  Lima: 12,
  Mike: 13,
  November: 14,
  Oscar: 15,
  Papa: 16,
  Quebec: 17,
  Romeo: 18,
  Sierra: 19,
  Tango: 20,
  Uniform: 21,
  Whiskey: 22,
  Xray: 23,
  Yankee: 24,
  Zulu: 25,
  Ash: 26,
  Baker: 27,
  Cast: 28,
  Diver: 29,
  Eagle: 30,
  Fisher: 31,
  George: 32,
  Hanover: 33,
  Ice: 34,
  Jake: 35,
  King: 36,
  Lash: 37,
  Mule: 38,
  Neptune: 39,
  Ostend: 40,
  Page: 41,
  Quail: 42,
  Raft: 43,
  Scout: 44,
  Tare: 45,
  Unit: 46,
  William: 47,
  Xaintrie: 48,
  Yoke: 49,
  Zebra: 50,
  Ace: 51,
  Beer: 52,
  Cast2: 53,
  Duff: 54,
  Edward: 55,
  Freddy: 56,
  Gustav: 57,
  Henry: 58,
  Ivar: 59,
  Jazz: 60,
  Key: 61,
  Lincoln: 62,
  Mary: 63,
  Nora: 64,
} as const

export type Team = (typeof Team)[keyof typeof Team]

export const Team = {
  TeamA: 0,
  TeamB: 1,
  None: 2,
} as const

export type WeaponType = (typeof WeaponType)[keyof typeof WeaponType]

export const WeaponType = {
  Rifle: 'Rifle',
  DMR: 'DMR',
  SniperRifle: 'SniperRifle',
  LightSupportGunLSG: 'LightSupportGun_LSG',
  LightMachineGunLMG: 'LightMachineGun_LMG',
  SubmachineGunSMG: 'SubmachineGun_SMG',
  Pistol: 'Pistol',
  AutoPistol: 'AutoPistol',
  HeavyPistol: 'HeavyPistol',
  Carbine: 'Carbine',
  PersonalDefenseWeaponPDW: 'PersonalDefenseWeapon_PDW',
} as const

export type ReportReason = (typeof ReportReason)[keyof typeof ReportReason]

export const ReportReason = {
  CheatingWallHack: 0,
  CheatingAimbot: 1,
  CheatingSpeedhack: 2,
  RacismDiscriminationText: 3,
  RacismDiscriminationVoice: 4,
  SpammingText: 5,
  SpammingVoice: 6,
  BadLanguageText: 7,
  BadLanguageVoice: 8,
  Griefing: 9,
  Exploiting: 10,
  OtherToxicBehavior: 11,
  UserProfileNamePicture: 12,
}
