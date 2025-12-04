import { inventory } from '../inventory.js';

function problem4(inventory) {
    const years = inventory.map((car) => {
        return car.car_year;
    });
    
    return years;
}

export { problem4 };