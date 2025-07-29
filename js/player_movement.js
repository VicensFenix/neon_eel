// Importamos los modulos necesarios
import { Player } from './player_pj.js';

// Creamos la clase PlayerController que maneja el movimiento del jugador
export class PlayerController {
    // El constructor recibe el id del contenedor donde se moverá el jugador y crea una instancia del jugador
    constructor(containerId) {
        // Instanciamos al jugador
        this.player = new Player(containerId);
        // Inicializamos la dirección del jugador
        this.dx = 0;
        this.dy = 0;

        // Inicializamos el estado del juego y el bucle de juego
        this.setupControls();
        this.gameLoop();
    }


    // Configuramos los controles del teclado para mover al jugador
    setupControls() {
        // Escuchamos los eventos de teclado para mover al jugador
        document.addEventListener('keydown', (e) => {
            // Cambiamos la dirección según la tecla presionada
            switch (e.key) {
                // Usamos las flechas del teclado para mover al jugador
                case 'ArrowUp':    this.dx = 0;  this.dy = -1; break;
                case 'ArrowDown':  this.dx = 0;  this.dy = 1;  break;
                case 'ArrowLeft':  this.dx = -1; this.dy = 0;  break;
                case 'ArrowRight': this.dx = 1;  this.dy = 0;  break;
            }
        });
    }


    // Bucle de juego que actualiza la posición del jugador
    gameLoop() {
        // Llamamos al método move del jugador cada cierto tiempo
        setInterval(() => {
            this.player.move(this.dx, this.dy);
        }, 100); // Cada 100 ms se mueve
    }
}