// La clase FoodManager se encarga de gestionar la creación y el manejo de la comida en el juego
export class FoodManager {
    // ✅ Constructor que inicializa el contenedor y las opciones
    constructor(containerId, options = {}) {
    // ✅ Definimos opciones con valores por defecto
    this.container = document.getElementById(containerId);
    this.foodClass = options.foodClass || 'food';
    this.foodSize = options.foodSize || 20;
    this.spawnInterval = options.spawnInterval || 3000;
    this.lifespan = options.lifespan || 8000;
    this.foodCount = options.foodCount || 8;

    // 🏁 Iniciamos el proceso de creación de comida
    this.startSpawning();
    }


    // Método para crear una sola comida
    createFood() {
        const food = document.createElement('div');
        food.classList.add(this.foodClass);
        food.style.width = `${this.foodSize}px`;
        food.style.height = `${this.foodSize}px`;
        food.style.position = 'absolute';

        // 🧮 Posición aleatoria dentro del contenedor
        const { width, height } = this.container.getBoundingClientRect();
        const maxX = width - this.foodSize;
        const maxY = height - this.foodSize;
        const x = Math.floor(Math.random() * maxX);
        const y = Math.floor(Math.random() * maxY);

        // 🗺️ Asignamos la posición aleatoria
        food.style.left = `${x}px`;
        food.style.top = `${y}px`;

        // 🥗 Añadimos la comida al contenedor
        this.container.appendChild(food);

        // ⏱️ Borrar comida después del tiempo de vida
        setTimeout(() => {
            if (food.parentElement) {
                food.remove();
            }
        }, this.lifespan);
    }


    
    // 🔁 Método que crea múltiples comidas cada cierto tiempo
    startSpawning() {
        // Crea el primer grupo inmediatamente
        this.spawnMultipleFoods();

        // Luego sigue creando cada intervalo
        setInterval(() => {
            this.spawnMultipleFoods();
        }, this.spawnInterval);
    }


    // 🍽️ Genera varias comidas al mismo tiempo
    spawnMultipleFoods() {
        for (let i = 0; i < this.foodCount; i++) {
            this.createFood();
        }
    }
}