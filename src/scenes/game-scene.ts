import { CONST } from '../const/const';
import { Block } from '../objects/block';

export class GameScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'GameScene'
        });
    }

    // Grid with tiles
    private blockGrid: Block[][];

    init(): void {
        // Init grid with tiles
        this.blockGrid = [];
        for (let y = 0; y < CONST.gridHeight; y++) {
            this.blockGrid[y] = [];
            for (let x = 0; x < CONST.gridWidth; x++) {
                this.blockGrid[y][x] = this.addBlock(x, y);
            }
        }
    }

    private addBlock(x: number, y: number): Block {
        // Get a random tile
        let randomBlockType: string =
            CONST.blockTypes[Phaser.Math.RND.between(0, CONST.blockTypes.length - 1)];

        // Return the created tile
        return new Block({
            scene: this,
            x: x * CONST.blockWidth,
            y: y * CONST.blockHeight,
            texture: randomBlockType
        });
    }
}
