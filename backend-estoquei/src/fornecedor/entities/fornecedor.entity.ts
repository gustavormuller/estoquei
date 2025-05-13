import { Entity, Column, PrimaryGeneratedColumn, ObjectId } from 'typeorm';

@Entity('forncedor') // Tabela do Banco
export class Fornecedor {
  @PrimaryGeneratedColumn()
  id: ObjectId;

  @Column()
  nome: string;

  @Column()
  contato: string;

  @Column()
  email: string;

  @Column()
  telefone: string;
  
  @Column()
  endereco: string;

}

