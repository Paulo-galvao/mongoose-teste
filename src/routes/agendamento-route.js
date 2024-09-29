import e from "express";
import scheduling_controller from '../controllers/agendamento-controller.js'
const router = e.Router();

router.post('/', scheduling_controller.store);
router.get('/', scheduling_controller.show);
router.get('/:id', scheduling_controller.showById);
router.put('/:id', scheduling_controller.update);
router.delete('/:id', scheduling_controller.destroy);

export default router;