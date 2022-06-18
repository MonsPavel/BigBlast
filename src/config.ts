import { GameScene } from './scenes/game-scene';
import { LoadingScene } from './scenes/loading-scene';

export const GameConfig: Phaser.Types.Core.GameConfig = {
  title: 'Webpack-Boilerplate',
  url: 'https://github.com/MonsPavel/BigBlast',
  version: '1.0',
  width: 404,
  height: 550,
  backgroundColor: '#12ded7',
  type: Phaser.AUTO,
  parent: 'game',
  scene: [LoadingScene, GameScene],
  scale: {
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  render: { pixelArt: false, antialias: true }
};
