import { inventory } from '../inventory.js';

function problem2(inventory) {
    const lastCar = inventory.filter((car, index, arr) => {
        return index === arr.length - 1;
    })[0];
    
    return `Last car is a ${lastCar.car_make} ${lastCar.car_model}`;
}

export { problem2 };