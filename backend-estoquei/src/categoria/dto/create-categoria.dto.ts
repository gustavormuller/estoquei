import { IsString, IsObject } from "class-validator";


export class CreateCategoriaDto {
  @IsObject()
  id: number;

  @IsString()
  nome: string;

  @IsString()
  descricao: string;

}
