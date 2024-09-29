import e from "express";
import animal_controller from '../controllers/animal-controller.js';
const router = e.Router();

router.post('/', animal_controller.store);
router.get('/', animal_controller.show);
router.get('/:id', animal_controller.showById);
router.put('/:id', animal_controller.update);
router.delete('/:id', animal_controller.destroy);

export default router;