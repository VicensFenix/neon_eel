// Se crea la clase para manejar la colisión de la comida
export class FoodCollisionHandler {
    // ✅ Constructor que recibe el jugador y la clase de comida
    constructor(player, foodClass) {
        this.player = player; 
        this.foodClass = foodClass;
    }

    // Método para verificar si el jugador colisiona con la comida
    checkCollision() {
        // Obtenemos todos los elementos de comida y  recorremos cada comida para verificar colisión
        const foods = document.querySelectorAll(`.${this.foodClass}`);
        const playerRect = this.player.element.getBoundingClientRect();

        // Recorremos cada comida para verificar colisión
        foods.forEach(food => {
            // Obtenemos el rectángulo de la comida
            const foodRect = food.getBoundingClientRect();
            
            // Verificamos si hay colisión entre el jugador y la comida
            const isColliding = !(
                // Verificamos si los bordes del jugador y la comida no se superponen
                playerRect.right < foodRect.left ||
                playerRect.left > foodRect.right ||
                playerRect.bottom < foodRect.top ||
                playerRect.top > foodRect.bottom
            );

            // Si hay colisión
            if (isColliding) {
                // Elimina la comida
                food.remove();

                // Aumentar tamaño del jugador
                this.growPlayer();
            }
        });
    }

    // Método para aumentar el tamaño del jugador al comer comida
    growPlayer() {
        // Aumentamos el tamaño del jugador en 5px
        const currentSize = this.player.element.offsetWidth;
        this.player.element.style.width = currentSize + 5 + 'px';
        this.player.element.style.height = currentSize + 5 + 'px';
    }
}
