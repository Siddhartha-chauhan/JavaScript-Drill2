import { inventory } from '../inventory.js';

function problem1(inventory) {
    const car = inventory.filter((car) => {
        return car.id === 33;
    })[0];
    
    return `Car 33 is a ${car.car_year} ${car.car_make} ${car.car_model}`;
}

export { problem1 };