// Importa las clases necesarias
import { FoodManager } from './js/food_respawn.js';
import { PlayerController } from './js/player_movement.js';
import { FoodCollisionHandler } from './js/food_collision.js';

// Espera a que el DOM esté completamente cargado antes de iniciar el juego
window.addEventListener('DOMContentLoaded', () => {
    // Obtiene el contenedor del juego
    const gameSpace = document.getElementById('game-space');

    // Crea una instancia de FoodManager para manejar la comida en el juego
    const foodManager = new FoodManager('game-space', {
        foodSize: 30,
        foodCount: 5,
        spawnInterval: 3000,
        lifespan: 6000,
        foodClass: 'food'
    });

    // Crea una instancia de PlayerController para manejar el movimiento del jugador
    const playerController = new PlayerController('game-space');

    // Espera un poco para que el jugador se cree (por seguridad)
    setTimeout(() => {
        new FoodCollisionHandler(playerController.player, gameSpace);
    }, 100);
});
