import { Entity, Column, PrimaryGeneratedColumn, ObjectId } from 'typeorm';

@Entity('produto') // Tabela do Banco
export class Produto {
  @PrimaryGeneratedColumn()
  id: ObjectId;

  @Column()
  codigo: string;

  @Column({ unique: true })
  nome: string;

  @Column()
  descricao: string;

  @Column({ default: true })
  preco: number;

  @Column()
  quantidade: number;

  @Column()
  categoriaID: ObjectId;
}
