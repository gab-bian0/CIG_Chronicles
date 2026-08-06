import { BaseScene } from './BaseScene';
import dialogues from '../data/dialogues.json';
import { GameState } from '../core/GameState';

export class PrologueScene extends BaseScene {
  constructor() { super('PrologueScene'); }

  create(): void {
    if (GameState.getFlag('prologue_seen')) {
      this.scene.start('TitleScene');
      return;
    }
    this.addBackdrop(0x0d0b09);
    const logo = this.add.text(480, 175, 'C I G', {
      fontFamily: 'Georgia', fontSize: '76px', color: '#d7a85b',
    }).setOrigin(0.5).setAlpha(0);
    this.tweens.add({ targets: logo, alpha: 1, duration: 1200 });
    this.time.delayedCall(700, () => {
      this.showDialogue(dialogues.prologue, () => {
        GameState.setFlag('prologue_seen');
        this.cameras.main.fadeOut(500, 0, 0, 0);
        this.time.delayedCall(520, () => this.scene.start('TitleScene'));
      });
    });
  }
}
