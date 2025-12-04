import { inventory } from '../inventory.js';

function problem5(inventory) {
    const olderCars = inventory.filter((car) => {
        return car.car_year < 2000;
    });
    
    return olderCars.length;
}

export { problem5 };