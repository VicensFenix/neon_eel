import { FoodManager } from './js/food_respawn.js';
import { PlayerController } from './js/player_movement.js';
import { FoodCollisionHandler } from './js/food_collision.js';

window.addEventListener('DOMContentLoaded', () => {
    const foodManager = new FoodManager('game-space', {
        foodSize: 30,
        foodCount: 5,
        spawnInterval: 3000,
        lifespan: 6000,
        foodClass: 'food'
    });

    const playerController = new PlayerController('game-space');

    const collisionHandler = new FoodCollisionHandler(playerController, foodManager);

    setInterval(() => {
        collisionHandler.checkCollisions();
    }, 100); // verifica cada 100 ms
});
