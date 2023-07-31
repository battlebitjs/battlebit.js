import type { Attachment } from './Attachment'
import { AttachmentType } from '../consts'
import { AttachmentsMap } from '../data/Attachments'

import type { Weapon } from './Weapon'
import { WeaponsMap } from '../data/Weapons'

export class WeaponItem {
  public toolName: string | null = null
  public mainSightName: string | null = null
  public topSightName: string | null = null
  public cantedSightName: string | null = null
  public barrelName: string | null = null
  public sideRailName: string | null = null
  public underRailName: string | null = null
  public boltActionName: string | null = null

  public skinIndex: number | null = null
  public magazineIndex: number | null = null

  public get tool() {
    return this.toolName ? WeaponsMap.get(this.toolName) || null : null
  }

  public set tool(value: Weapon | null) {
    this.toolName = value ? value.name : null
  }

  public get mainSight() {
    return this.mainSightName ? AttachmentsMap.get(this.mainSightName) || null : null
  }

  public set mainSight(value: Attachment | null) {
    this.mainSightName = value ? value.name : null
  }

  public get topSight() {
    return this.topSightName ? AttachmentsMap.get(this.topSightName) || null : null
  }

  public set topSight(value: Attachment | null) {
    this.topSightName = value ? value.name : null
  }

  public get cantedSight() {
    return this.cantedSightName ? AttachmentsMap.get(this.cantedSightName) || null : null
  }

  public set cantedSight(value: Attachment | null) {
    this.cantedSightName = value ? value.name : null
  }

  public get barrel() {
    return this.barrelName ? AttachmentsMap.get(this.barrelName) || null : null
  }

  public set barrel(value: Attachment | null) {
    this.barrelName = value ? value.name : null
  }

  public get sideRail() {
    return this.sideRailName ? AttachmentsMap.get(this.sideRailName) || null : null
  }

  public set sideRail(value: Attachment | null) {
    this.sideRailName = value ? value.name : null
  }

  public get underRail() {
    return this.underRailName ? AttachmentsMap.get(this.underRailName) || null : null
  }

  public set underRail(value: Attachment | null) {
    this.underRailName = value ? value.name : null
  }

  public get boltAction() {
    return this.boltActionName ? AttachmentsMap.get(this.boltActionName) || null : null
  }

  public set boltAction(value: Attachment | null) {
    this.boltActionName = value ? value.name : null
  }

  public hasAttachment(attachment: Attachment) {
    switch (attachment.attachmentType) {
      case AttachmentType.MainSight:
        return this.mainSight == attachment
      case AttachmentType.TopSight:
        return this.topSight == attachment
      case AttachmentType.CantedSight:
        return this.cantedSight == attachment
      case AttachmentType.Barrel:
        return this.barrel == attachment
      case AttachmentType.UnderRail:
        return this.barrel == attachment
      case AttachmentType.SideRail:
        return this.sideRail == attachment
      case AttachmentType.Bolt:
        return this.boltAction == attachment
    }
    return false
  }

  public SetAttachment(attachment: Attachment) {
    switch (attachment.attachmentType) {
      case AttachmentType.MainSight:
        this.mainSight = attachment
        break
      case AttachmentType.TopSight:
        this.topSight = attachment
        break
      case AttachmentType.CantedSight:
        this.cantedSight = attachment
        break
      case AttachmentType.Barrel:
        this.barrel = attachment
        break
      case AttachmentType.UnderRail:
        this.barrel = attachment
        break
      case AttachmentType.SideRail:
        this.sideRail = attachment
        break
      case AttachmentType.Bolt:
        this.boltAction = attachment
        break
    }
  }

  public write() {
    //
  }

  public read() {
    //
  }
}
