import { DataType, DataTypes, Model, CreationOptional, InferAttributes, InferCreationAttributes } from 'sequelize';
import { iVehicle } from './iVehicle';
import database from '../../database/database';

//interface iVehicleCreationAttributes extends Optional<iVehicle, "id">{}

interface vehiclesModel extends Model<InferAttributes<vehiclesModel>, InferCreationAttributes<vehiclesModel>> {
    id: CreationOptional<string>;
    placa: string;
    marca: string;
    modelo: string;
    cor: string;
}

const model = database.define<vehiclesModel>('vehicles', {
    id: {
        type: DataTypes.STRING(255),
        primaryKey: true,
        allowNull: false
    },
    placa: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    marca: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    modelo: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    cor: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
});

export default model;