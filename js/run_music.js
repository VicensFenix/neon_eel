// Botón para escuchar o pausar la música del juego
// Se usara programación orientada a eventos para manejar el botón de pausa
// El botón tiene el id id="runMusic"
// La música se reproducira en bucle y en cualquier momento se puede pausar o reanudar
// La música se escuchare en todo momento del juego y en varias páginas del juego, no solo en el menú

// Clase para manejar la música del juego
export class MusicController {
    // Constructor de la clase
    constructor() {
        this.audio = new Audio('assets/music/game_music.mp3'); // Ruta al archivo de música
        this.audio.loop = true; // Reproduce la música en bucle
        this.isPlaying = false; // Estado de la música

        // Configuración inicial de la música
        this.audio.volume = 0.8; // Ajusta el volumen de la música
        this.loadMusicState();
        this.setupButton();
    }

    // Configura el botón para reproducir o pausar la música
    loadMusicState() {
        // Carga el estado de la música desde localStorage
        const savedState = localStorage.getItem('musicState');
        // Si hay un estado guardado, establece la música en ese estado
        if (savedState === 'playing') {
            this.playMusic();
        } 
    }

    // Método para reproducir la música
    setupButton() {
        // Configura el botón para manejar la reproducción y pausa de la música
        this.musicButton = document.getElementById('runMusic');
        // Si el botón existe, añade un evento de clic
        if (this.musicButton) {
            this.musicButton.addEventListener('click', () => this.toggleMusic());
            this.updateButton();
        }
    }

    // Método para reproducir la música
    toggleMusic() {
        // Alterna entre reproducir y pausar la música y guarda el estado actual de la música en localStorage
        this.isPlaying ? this.pauseMusic() : this.playMusic();
        this.updateButton();
    }

    // Actualiza el texto del botón según el estado de la música
    playMusic() {
        // Solo intenta reproducir si no está ya reproduciéndose
        if (!this.isPlaying) {
            this.audio.play().catch(e => {
                console.warn('Autoplay bloqueado:', e);
                // Muestra alerta al usuario para que interactúe
                alert('Por favor haz click en el juego para activar la música');
            });
            this.isPlaying = true;
            localStorage.setItem('musicState', 'playing');
        }
    }

    // Actualiza el texto del botón según el estado de la música
    pauseMusic() {
        this.audio.pause();
        this.isPlaying = false;
        localStorage.setItem('musicState', 'paused');
    }

    // Actualiza el texto del botón según el estado de la música
    updateButton() {
        // Actualiza el texto del botón según si la música está reproduciéndose o no
        if (this.musicButton) {
            this.musicButton.innerHTML = this.isPlaying 
                ? '<i class="fas fa-pause"></i> Pausar Música' 
                : '<i class="fas fa-music"></i> Reanudar Música';
        }
    }

    // Método para ajustar volumen (opcional)
    setVolume(level) {
        this.audio.volume = Math.min(1, Math.max(0, level));
    }

}