import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Movimentacao {
  @PrimaryGeneratedColumn()
  id: number; 

  @Column()
  tipo: string;

  @Column()
  quantidade: number;

  @Column({ nullable: true })
  observacao: string;

}