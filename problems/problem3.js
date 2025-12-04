import { inventory } from '../inventory.js';

function problem3(inventory) {
    const models = inventory.map((car) => {
        return car.car_model;
    });
    
    models.sort();
    
    return models;
}

export { problem3 };