// Importa la clase desde tu archivo FoodManager.js
import { FoodManager } from './food_respawn.js';

// Asegúrate de que el DOM esté cargado antes de ejecutar
window.addEventListener('DOMContentLoaded', () => {
    // Inicia la clase pasando el id del contenedor (game-space)
    const foodManager = new FoodManager('game-space', {
        foodSize: 30,
        foodCount: 5,
        spawnInterval: 3000,
        lifespan: 6000,
        foodClass: 'food'
    });
});
