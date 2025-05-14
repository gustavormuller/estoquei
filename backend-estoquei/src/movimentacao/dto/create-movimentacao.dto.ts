import { IsString, IsInt, IsObject } from "class-validator";
import { ObjectId } from "typeorm";

export class CreateMovimentacaoDto {
  @IsObject()
  id: ObjectId;

  @IsString()
  tipo: string;

  @IsInt()
  quantidade: number;

  @IsString()
  observacao: string; 
}