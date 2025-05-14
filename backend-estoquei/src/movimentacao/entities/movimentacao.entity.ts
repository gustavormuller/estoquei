import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Produto } from 'src/produto/entities/produto.entity';

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

  @ManyToMany(() => Produto, (produto) => produto.movimentacao)
  produtos: Produto[];
}
