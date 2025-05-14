import { Entity, Column, PrimaryGeneratedColumn, ObjectId } from 'typeorm';

@Entity('fornecedor') // Corrigido o nome da tabela
export class Fornecedor {
  @PrimaryGeneratedColumn()
  id: number;

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
