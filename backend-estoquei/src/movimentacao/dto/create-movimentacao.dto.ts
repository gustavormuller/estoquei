import { IsString, IsInt, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMovimentacaoDto {
  @ApiProperty({ description: 'ID da movimentação' })
  @IsNumber()
  id: number;

  @ApiProperty({ description: 'Tipo da movimentação' })
  @IsString()
  tipo: string;

  @ApiProperty({ description: 'Quantidade movimentada' })
  @IsInt()
  quantidade: number;

  @ApiProperty({ description: 'Observação da movimentação' })
  @IsString()
  observacao: string;
}