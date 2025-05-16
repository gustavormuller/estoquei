import { IsString, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProdutoDto {
  @ApiProperty({ description: 'Nome do produto' })
  @IsString()
  nome: string;

  @ApiProperty({ description: 'Descrição do produto' })
  @IsString()
  descricao: string;

  @ApiProperty({ description: 'Preço do produto' })
  @IsInt()
  preco: number;

  @ApiProperty({ description: 'Quantidade do produto em estoque' })
  @IsInt()
  quantidade: number;
}