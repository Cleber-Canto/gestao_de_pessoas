import { Request, Response } from 'express';
import { UpdateUserService } from '../services/UpdateUserService';

class UpdateUserController{
    async handle(request: Request, response: Response){
        const updateUserService = new UpdateUserService();
        const { id } = request.params;
        const { nome, email } = request.body
        
        if(id === ''){
            return response.status(400).json({mensagem: 'Id não informado'})
        }

        if(nome === 0){
            return response.status(400).json({mensagem: 'Informe um nome'})
        }
        console.log(id, nome, email)
        await updateUserService.execute({ id, nome, email })

        return response.status(204).json()
    }
}

export { UpdateUserController }