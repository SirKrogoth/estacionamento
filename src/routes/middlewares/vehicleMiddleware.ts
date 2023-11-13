import { Request, Response } from 'express';
import joi from 'joi';
import { createdVehicleSchema } from '../../models/vehicle/vehicleSchema';

function validateCreateVehicle(req: Request, res: Response, next: any){
    const { error } = createdVehicleSchema.validate(req.body);

    if(error == null) return next();

    const { details } = error;
    const message = details.map(item => item.message).join(',');

    res.status(422).end(message);
}

export{
    validateCreateVehicle
}