import request from 'supertest';
import app from '../../src/app';
import { v4 as uuidv4 } from 'uuid';
import { iVehicle } from '../../src/models/vehicle/iVehicle';
import vehicleRepository from '../../src/models/vehicle/vehicleRepository';

describe('Testando a saúde da API vehicles.', () => {
    let vehicleGlobal: iVehicle;

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

    it('POST /add - Deverá tentar inserir em vehicle com valores vazios: status 404', async () => {
        const payload: iVehicle = {
            id: uuidv4(),
            placa: "",
            marca: "",
            modelo: "",
            cor: ""
        }

        vehicleGlobal.id = payload.id;

        const result = await request(app).post('/add').send(payload);

        expect(result.status).toEqual(404); 
    });

    it('DELETE /delete - Deverá remover um vehicle: status 200', async () => {
        const result = await request(app).delete('/delete/'+vehicleGlobal.id);

        expect(result.status).toEqual(200);
    })
});

