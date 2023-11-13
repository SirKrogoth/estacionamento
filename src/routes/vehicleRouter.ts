import { Router } from 'express';
import vehicleController from '../controllers/vehicle/vehicleController';
import { validateCreateVehicle } from './middlewares/vehicleMiddleware';

const router = Router();

router.get('/health', vehicleController.apiHealth);
router.delete('/removeVehicle/:id', vehicleController.removeVehicle);
router.post('/add', validateCreateVehicle, vehicleController.add);

export default router;