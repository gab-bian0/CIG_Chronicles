import Phaser from 'phaser';
import { SaveManager } from '../core/SaveManager';

export class BootScene extends Phaser.Scene {
  constructor() { super('BootScene'); }

  create(): void {
    this.createCharacterTexture('pastenone', 0xd6a85f, 0x315679);
    this.createCharacterTexture('ciollo', 0xc77a50, 0x762f36);
    SaveManager.load();
    this.scene.start('PrologueScene');
  }

  private createCharacterTexture(key: string, skin: number, coat: number): void {
    const g = this.make.graphics({ x: 0, y: 0 });
    g.fillStyle(0x000000, 0.25).fillEllipse(16, 30, 24, 8);
    g.fillStyle(coat).fillRoundedRect(5, 12, 22, 18, 5);
    g.fillStyle(skin).fillCircle(16, 9, 8);
    g.fillStyle(0x261b16).fillRect(9, 2, 14, 4);
    g.generateTexture(key, 32, 36);
    g.destroy();
  }
}
