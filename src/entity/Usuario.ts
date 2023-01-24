import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('usuarios')
class Usuario {
    @PrimaryColumn()
    id: string | undefined;

    @Column()
    nome: string | undefined

    @Column()
    email: string | undefined
}

export { Usuario }