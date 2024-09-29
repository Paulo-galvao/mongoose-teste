import e from "express";
import cep_endereco from "../middlewares/cep-endereco.js";
const router = e.Router();
import userControllers from "../controllers/user-controllers.js";
import check_token from "../middlewares/check-token.js";
import check_role from "../middlewares/check-role.js"

// router.post('/',check_token, cep_endereco, check_role(["ADM"]), check_role(["REC"]), userControllers.store);
router.post('/', cep_endereco, userControllers.store)
router.get('/', userControllers.show);
router.get('/:id', userControllers.showById);
router.put('/:id', cep_endereco, userControllers.update);
router.delete('/:id', userControllers.destroy);
router.post('/signup', userControllers.signup);
router.post('/login', userControllers.login);

export default router;
