import model from './vehicleModel';
import { iVehicle } from './iVehicle';

function add(vehicle: iVehicle){
    return model.create(vehicle);
}

// TODO: criar delete

// TODO: criar update

// TODO: criar patch

// TODO: criar select by placa

export default {
    add
}