import { BaseScene } from './BaseScene';
import { GameState } from '../core/GameState';
import { SaveManager } from '../core/SaveManager';

export class TitleScene extends BaseScene {
  constructor() { super('TitleScene'); }

  create(): void {
    this.addBackdrop();
    this.add.text(480, 155, 'CIG', {
      fontFamily: 'Georgia', fontSize: '112px', color: '#d7a85b',
      stroke: '#5d3b1d', strokeThickness: 3,
    }).setOrigin(0.5);
    this.add.text(480, 238, 'LE DUE CIOLE', {
      fontFamily: 'Georgia', fontSize: '25px', color: '#f5ead2', letterSpacing: 7,
    }).setOrigin(0.5);
    const hasSave = SaveManager.exists();
    const start = this.add.text(480, 350, hasSave ? 'CONTINUA' : 'NUOVA PARTITA', {
      fontFamily: 'Arial', fontSize: '21px', color: '#17130f',
      backgroundColor: '#d7a85b', padding: { x: 24, y: 12 },
    }).setOrigin(0.5).setInteractive({ useHandCursor: true });
    const launch = (): void => {
      if (!hasSave) GameState.reset();
      this.scene.start('WorldScene', { map: GameState.snapshot().player.map });
    };
    start.on('pointerdown', launch);
    this.input.keyboard?.once('keydown-ENTER', launch);
    this.addPrompt('INVIO oppure clic per iniziare  •  Frecce/WASD per muoversi');
  }
}
