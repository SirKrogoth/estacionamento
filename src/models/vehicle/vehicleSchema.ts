import joi from "joi";

const createdVehicleSchema = joi.object({
    id: joi.string(),
    placa: joi.string()
            .min(7)
            .max(7)
            .required(),
    marca: joi.string()
            .min(3)
            .max(255)
            .required(),
    modelo: joi.string()
            .min(3)
            .max(255)
            .required(),
    cor: joi.string()
            .min(3)
            .max(255)
            .required()
});

export {
    createdVehicleSchema
}