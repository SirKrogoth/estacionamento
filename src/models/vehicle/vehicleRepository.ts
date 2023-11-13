import model from './vehicleModel';
import { iVehicle } from './iVehicle';

function add(vehicle: iVehicle){
    return model.create(vehicle);
}

function removeVehicle(id: string){
    return model.destroy({
        where: {
            id: id
        }
    });
}
// TODO: criar update

// TODO: criar patch

// TODO: criar select by placa

export default {
    add,
    removeVehicle
}