// Clase que define al jugador
export class Player {
    // ✅ Definimos las propiedades del jugador
    // El constructor recibe un id de contenedor y opciones para personalizar el jugador
    constructor(containerId, options = {}) {
        this.container = document.getElementById(containerId);
        this.size = options.size || 30;
        this.color = options.color || '#21a7b1ff';
        this.speed = options.speed || 6;

        // Crea al jugador como un div
        this.element = document.createElement('div');
        this.element.classList.add('player');
        this.element.style.width = `${this.size}px`;
        this.element.style.height = `${this.size}px`;
        this.element.style.backgroundColor = this.color;
        this.element.style.position = 'absolute';
        this.element.style.left = '100px';
        this.element.style.top = '100px';

        // Posición inicial
        this.x = 100;
        this.y = 100;

        // Agrega al DOM
        this.container.appendChild(this.element);
    }

    // Método para mover al jugador
    move(dx, dy) {
        // Actualiza la posición del jugador
        this.x += dx * this.speed;
        this.y += dy * this.speed;

        // Evita que salga del contenedor
        const maxX = this.container.clientWidth - this.size;
        const maxY = this.container.clientHeight - this.size;

        // Asegura que el jugador no se salga de los bordes
        if (this.x < 0) this.x = 0;
        if (this.y < 0) this.y = 0;
        if (this.x > maxX) this.x = maxX;
        if (this.y > maxY) this.y = maxY;

        // Actualiza la posición del elemento en el DOM
        this.element.style.left = `${this.x}px`;
        this.element.style.top = `${this.y}px`;
    }
}