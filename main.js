// Importa las clases necesarias
import { FoodManager } from './js/food_respawn.js';
import { PlayerController } from './js/player_movement.js';

// Asegúrate de que el DOM esté listo antes de ejecutar el juego
window.addEventListener('DOMContentLoaded', () => {
    // Inicia el manejador de comida
    const foodManager = new FoodManager('game-space', {
        foodSize: 30,
        foodCount: 5,
        spawnInterval: 3000,
        lifespan: 6000,
        foodClass: 'food'
    });

    // Inicia el controlador del jugador
    const playerController = new PlayerController('game-space');
});
