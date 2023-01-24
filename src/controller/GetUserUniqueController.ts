import { Request, Response } from "express";
import { GetUserUniqueService } from "../services/GetUserUniqueService";

class GetUserUniqueController {
  async handle(request: Request, response: Response) {
    const getUserUniqueService = new GetUserUniqueService();
    const { email } = request.body;
    const user = await getUserUniqueService.execute(email);
    return response.status(200).json(user);
  }
}

export { GetUserUniqueController };
