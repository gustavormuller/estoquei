import { Entity, Column, PrimaryGeneratedColumn, ObjectId } from 'typeorm';

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

  @Column()
  produtoId: ObjectId;
    
  @Column()
  usuarioId: ObjectId;
    
  @Column()
  observacao: string;
}

