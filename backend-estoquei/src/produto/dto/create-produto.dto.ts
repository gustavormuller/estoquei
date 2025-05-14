import { IsString, IsInt } from "class-validator";

export class CreateProdutoDto {
  @IsString()
  nome: string;

  @IsString()
  descricao: string;

  @IsInt()
  preco: number;
  
  @IsInt()
  quantidade: number;
}