import { Entity, Column, PrimaryGeneratedColumn, ObjectId } from 'typeorm';

@Entity('categoria') // Tabela do Banco
export class Categoria {
  @PrimaryGeneratedColumn()
  id: ObjectId;

  @Column()
  nome: string;

  @Column()
  descricao: string;
  
  @Column()
  ativa: boolean;
}

