import { Categoria } from 'src/categoria/entities/categoria.entity';
import { Movimentacao } from 'src/movimentacao/entities/movimentacao.entity';
import { Entity, Column, PrimaryGeneratedColumn, ObjectId, ManyToOne, ManyToMany } from 'typeorm';

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

  @Column({ nullable: false })
  preco: number;

  @Column()
  quantidade: number;

  @ManyToOne(() => Categoria, (categoria) => categoria.produto)
  categoriaID: number;

  @ManyToMany(()=> Movimentacao, (movimentacao) => movimentacao.produtoId)
  movimentacao: Movimentacao[];
}
