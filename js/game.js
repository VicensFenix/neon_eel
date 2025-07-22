// Importamos modulos
import { FoodManager } from "./food_respawn";

// Iniciar cuando la página esta cargada
window.addEventListener('DOMContentLoaded', () => {
    const manager = new FoodManager('game-space', {
        foodClass: 'food',
        foodSize: 20,
        spawnInterval: 3000, // cada 3 segundos
        lifespan: 6000,      // desaparece a los 6 segundos
        foodCount: 6         // 6 comidas a la vez
    });
});