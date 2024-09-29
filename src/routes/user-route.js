import e from "express";
import cep_endereco from "../middlewares/cep-endereco.js";
const router = e.Router();
import userControllers from "../controllers/user-controllers.js";
import check_token from "../middlewares/check-token.js";
import check_role from "../middlewares/check-role.js"

router.post('/',check_token, cep_endereco, check_role(["ADM"]), check_role(["REC"]), userControllers.store);
router.get('/', check_token, userControllers.show);
router.get('/:id', check_token,  userControllers.showById);
router.put('/:id', check_token, check_role(["TOSA"]), cep_endereco, userControllers.update);
router.delete('/:id', check_token, userControllers.destroy);
router.post('/signup', userControllers.signup);
router.post('/login', userControllers.login);

export default router;
