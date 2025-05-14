import { IsString, IsObject } from "class-validator";
import { ObjectId } from "typeorm";

export class CreateFornecedorDto {
  @IsObject()
  id: ObjectId;

  @IsString()
  nome: string;

  @IsString()
  contato: string;

  @IsString()
  telefone: string;

  @IsString()
  endereco: string;
}