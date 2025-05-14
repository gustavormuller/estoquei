import { Produto } from 'src/produto/entities/produto.entity';
import { Entity, Column, PrimaryGeneratedColumn, ObjectId, OneToMany } from 'typeorm';

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

  @OneToMany(() => Produto, (produto) => produto.categoriaID)
  produto: Produto[];
}

