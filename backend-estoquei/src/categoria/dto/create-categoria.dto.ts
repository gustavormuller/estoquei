import { IsString, IsNumber } from "class-validator";


export class CreateCategoriaDto {
  @IsNumber()
  id: number;

  @IsString()
  nome: string;

  @IsString()
  descricao: string;

}
