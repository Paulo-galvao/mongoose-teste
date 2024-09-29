import e from "express";
const router = e.Router();
import userControllers from "../controllers/user-controllers.js";

router.post('/', userControllers.store);
router.get('/', userControllers.show);

export default router;
