import { Router, Request, Response } from "express";
import { CreateUserController } from "../controller/CreateUserController";
import { DeleteUserController } from "../controller/DeleteUserController";
import { GetAllUserController } from "../controller/GetAllUserController";
import { GetUserUniqueController } from "../controller/GetUserUniqueController";
import { UpdateUserController } from "../controller/UpdateUserController";

const router = Router();
const createUserController = new CreateUserController();
const getAllUserController = new GetAllUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();
const getUserUniqueController = new GetUserUniqueController();

router.get("/", (request: Request, response: Response) => {
  return response.json({ mensagem: "Bem vindo" });
});

router.post("/usuarios", createUserController.handle);
router.get("/usuarios", getAllUserController.handle);
router.get("/usuario", getUserUniqueController.handle);
router.patch("/usuario/:id", updateUserController.handle);
router.delete("/usuario/:id", deleteUserController.handle);

export { router };