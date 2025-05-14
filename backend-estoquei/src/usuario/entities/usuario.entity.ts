import { Movimentacao } from 'src/movimentacao/entities/movimentacao.entity';
import { Entity, Column, PrimaryGeneratedColumn, ObjectId, ManyToMany } from 'typeorm';

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

  @ManyToMany(() => Movimentacao, (movimentacao) => movimentacao.usuarioId)
  movimentacao: Movimentacao[];
}
