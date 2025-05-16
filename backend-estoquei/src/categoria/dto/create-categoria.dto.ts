import { IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoriaDto {
  @ApiProperty({ description: 'ID da categoria' })
  @IsNumber()
  id: number;

  @ApiProperty({ description: 'Nome da categoria' })
  @IsString()
  nome: string;

  @ApiProperty({ description: 'Descrição da categoria' })
  @IsString()
  descricao: string;
}
