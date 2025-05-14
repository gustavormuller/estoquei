import { IsString, IsNumber } from "class-validator";


export class CreateFornecedorDto {
  @IsNumber()
  id: number;

  @IsString()
  nome: string;

  @IsString()
  contato: string;

  @IsString()
  telefone: string;

  @IsString()
  endereco: string;
}