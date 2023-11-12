import { Request, Response } from "express";
import vehicleRepository from "../../models/vehicle/vehicleRepository";
import { StatusCodes } from 'http-status-codes';
import { iVehicle } from "../../models/vehicle/iVehicle";
import { v4 as uuidv4 } from 'uuid';

function apiHealth(req: Request, res: Response, next: any){
    res.status(StatusCodes.OK).json({
        "Message": "A API de veículos está online.",
        "StatusCode": "200"
    });
}

async function add(req: Request, res: Response, next: any){
    try {
        const vehicle = req.body as iVehicle;
        vehicle.id = uuidv4();

        const success = await vehicleRepository.add(vehicle);

        console.log(success);
        
        if(!success) res.status(StatusCodes.BAD_REQUEST).end();

        res.status(StatusCodes.CREATED).end();


    } catch (error) {
        console.error(`Error Message: ${error}`);
        res.status(StatusCodes.BAD_REQUEST).end();
    }
}

export default {
    apiHealth,
    add
}