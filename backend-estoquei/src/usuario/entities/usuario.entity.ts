import { Entity, Column, PrimaryGeneratedColumn, ObjectId } from 'typeorm';

@Entity('usuario') // Tabela do Banco
export class Usuario {
  @PrimaryGeneratedColumn()
  id: ObjectId;

  @Column()
  nome: string;

  @Column({ unique: true })
  email: string;

  @Column()
  senha: string;

  @Column({ default: true })
  tipo: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  datacriacao: Date;
}
