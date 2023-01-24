import { getRepository } from "typeorm";
import { Usuario } from "../entity/Usuario";

class GetUserUniqueService {
  async execute(email) {
    console.log("Email no service: ", email);
    const usuarios = await getRepository(Usuario)
      .createQueryBuilder("usuarios")
      .select()
      .where("email = :email", { email })
      .getOne();

    return usuarios;
  }
}

export { GetUserUniqueService };
