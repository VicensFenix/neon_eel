// Importamos los módulos necesarios
import { FoodManager } from './js/food_respawn.js';
import { PlayerController } from './js/player_movement.js';
import { FoodCollisionHandler } from './js/food_collision.js';
import { MusicController } from './js/music_controller.js';

// Espera a que el DOM esté completamente cargado antes de iniciar el juego
window.addEventListener('DOMContentLoaded', () => {
    // Inicializa el controlador de música
    const musicController = new MusicController();
    
    // Selecciona el espacio de juego y crea instancias de los manejadores
    const gameSpace = document.getElementById('game-space');

    // Crea el manejador de comida con las configuraciones deseadas
    const foodManager = new FoodManager('game-space', {
        foodSize: 30,
        foodCount: 5,
        spawnInterval: 3000,
        lifespan: 6000,
        foodClass: 'food'
    });

    // Crea el controlador del jugador
    const playerController = new PlayerController('game-space');

    // Espera 100ms y crea el detector de colisión
    setTimeout(() => {
        new FoodCollisionHandler(playerController.player, gameSpace);
    }, 100);

    // Opcional: Reproducir música al primer click si está pausada
    gameSpace.addEventListener('click', () => {
        if (!musicController.isPlaying) {
            musicController.playMusic();
        }
    }, { once: true }); // Solo se ejecuta una vez
});