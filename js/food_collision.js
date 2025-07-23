// Clase FoodCollisionHandler que maneja las colisiones entre el jugador y la comida
export class FoodCollisionHandler {
    // El constructor recibe el elemento del jugador y el contenedor de la comida
    constructor(playerElement, foodContainer) {
        this.playerElement = playerElement;
        this.foodContainer = foodContainer;

        // Iniciar verificación constante de colisiones
        this.checkCollisionLoop();
    }

    // Método que inicia un bucle para verificar colisiones
    checkCollisionLoop() {
        // Verifica colisiones cada 100 ms
        setInterval(() => {
            this.checkCollisions();
        }, 100); // Revisa cada 100 ms
    }

    // Método que verifica si el jugador colisiona con la comida
    checkCollisions() {
        // Obtiene los rectángulos de colisión del jugador y de cada comida
        const playerRect = this.playerElement.getBoundingClientRect();
        const foods = this.foodContainer.querySelectorAll('.food');

        // Recorre cada comida y verifica si hay colisión
        foods.forEach(food => {
            const foodRect = food.getBoundingClientRect();

            // Verifica si el rectángulo del jugador colisiona con el de la comida
            if (this.isColliding(playerRect, foodRect)) {
                // Si hay colisión, remueve la comida
                food.remove();

                // Opcional: hacer crecer al jugador
                this.growPlayer();
            }
        });
    }

    // Método que verifica si dos rectángulos colisionan
    isColliding(rect1, rect2) {
        // Verifica si los rectángulos no se superponen
        return !(
            rect1.right < rect2.left ||
            rect1.left > rect2.right ||
            rect1.bottom < rect2.top ||
            rect1.top > rect2.bottom
        );
    }

    // Método que hace crecer al jugador al comer comida
    growPlayer() {
        // Aumenta el tamaño del jugador en 5px
        const currentWidth = this.playerElement.offsetWidth;
        const currentHeight = this.playerElement.offsetHeight;

        // Ajusta el tamaño del jugador
        this.playerElement.style.width = `${currentWidth + 5}px`;
        this.playerElement.style.height = `${currentHeight + 5}px`;
    }
}
