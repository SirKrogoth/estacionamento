import { Router } from 'express';
import vehicleController from '../controllers/vehicle/vehicleController';

const router = Router();

router.get('/health', vehicleController.apiHealth);

router.post('/add', vehicleController.add);

export default router;