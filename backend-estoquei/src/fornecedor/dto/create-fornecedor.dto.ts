import { IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateFornecedorDto {
  @ApiProperty({ description: 'ID do fornecedor' })
  @IsNumber()
  id: number;

  @ApiProperty({ description: 'Nome do fornecedor' })
  @IsString()
  nome: string;

  @ApiProperty({ description: 'Contato do fornecedor' })
  @IsString()
  contato: string;

  @ApiProperty({ description: 'Telefone do fornecedor' })
  @IsString()
  telefone: string;

  @ApiProperty({ description: 'Endereço do fornecedor' })
  @IsString()
  endereco: string;
}