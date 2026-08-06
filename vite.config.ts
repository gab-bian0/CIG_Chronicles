import Phaser from 'phaser';

export const GameEvents = {
  FLAG_CHANGED: 'flag-changed',
  INVENTORY_CHANGED: 'inventory-changed',
  GAME_SAVED: 'game-saved',
} as const;

/** Bus condiviso per disaccoppiare scene, UI e stato persistente. */
export const EventBus = new Phaser.Events.EventEmitter();
