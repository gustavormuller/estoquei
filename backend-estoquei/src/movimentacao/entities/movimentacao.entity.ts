import { Produto } from 'src/produto/entities/produto.entity';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { Entity, Column, PrimaryGeneratedColumn, ObjectId, ManyToOne, ManyToMany } from 'typeorm';

@Entity('movimentacao') // Tabela do Banco
export class Movimentacao {
  @PrimaryGeneratedColumn()
  id: ObjectId;

  @Column()
  tipo: string;

  @Column()
  quantidade: number;

  @Column()
  data: Date;

  @ManyToMany(() => Produto, (produto) => produto.movimentacao)
  produtoId: ObjectId;
    
  @ManyToMany(()=> Usuario, (usuario) => usuario.movimentacao)
  usuarioId: number;
    
  @Column()
  observacao: string;
}

