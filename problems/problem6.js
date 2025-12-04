import { inventory } from '../inventory.js';

function problem6(inventory) {
    const bmwAndAudi = inventory.filter((car) => {
        return car.car_make === 'BMW' || car.car_make === 'Audi';
    });
    
    return bmwAndAudi;
}

export { problem6 };