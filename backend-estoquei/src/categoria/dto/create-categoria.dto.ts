import { IsString, IsObject } from "class-validator";
import { ObjectId } from "typeorm";

export class CreateCategoriaDto {
  @IsObject()
  id: ObjectId;

  @IsString()
  nome: string;

  @IsString()
  descricao: string;

}
