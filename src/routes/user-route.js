import e from "express";
const router = e.Router();
import userControllers from "../controllers/user-controllers.js";

router.post('/', userControllers.store);
router.get('/', userControllers.show);
router.get('/:id', userControllers.showById);
router.put('/:id', userControllers.update);
router.delete('/:id', userControllers.destroy);

export default router;
