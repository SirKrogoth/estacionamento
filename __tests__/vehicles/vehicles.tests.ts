import request from 'supertest';
import app from '../../src/app';
import { v4 as uuidv4 } from 'uuid';
import { iVehicle } from '../../src/models/vehicle/iVehicle';
import vehicleRepository from '../../src/models/vehicle/vehicleRepository';

let vehicleId: string;
let vehicleGlobal: iVehicle;

beforeAll(async () => {
    vehicleGlobal = {
        id: "9c1b1e95-19a8-4000-ba15-456c0ba39a1f",
        placa: "TES1234",
        marca: "Marca TESTE",
        modelo: "Modelo TESTE",
        cor: "Cor TESTE"
    };

    await vehicleRepository.add(vehicleGlobal);

    vehicleId = vehicleGlobal.id;
});

describe('Testando a saúde da API vehicles.', () => {

    it('GET /health - Deverá retornar status code 200', async () => {
        const result = await request(app).get('/health');

        expect(result.status).toEqual(200);
    });

    it('POST /add - Deverá inserir um novo vehiculo no sistema: status 201', async () => {
        const payload: iVehicle = {
            id: uuidv4(),
            placa: "ABC9871",
            marca: "Volvo Teste",
            modelo: "C4 Teste",
            cor: "Preto"
        }

        const result = await request(app).post('/add').send(payload);

        expect(result.status).toEqual(201);
    });

    it('POST /add - Deverá tentar inserir em vehicle com valores vazios: status 422', async () => {
        const payload: iVehicle = {
            id: uuidv4(),
            placa: "",
            marca: "",
            modelo: "",
            cor: ""
        }

        const result = await request(app).post('/add').send(payload);

        expect(result.status).toEqual(422);
    });

    it('DELETE /removeVehicle - Deverá remover um vehicle: status 200', async () => {
        const result = await request(app).delete('/removeVehicle/'+ vehicleId);
        
        expect(result.status).toEqual(200);
    });

    it('UPDATE /updateVehicle - Deverá atualizar um vehicle: status 200', async () => {
        const result = await vehicleRepository.updateVehicle(vehicleGlobal);

        expect(result.status).toEqual(200);
    });
});