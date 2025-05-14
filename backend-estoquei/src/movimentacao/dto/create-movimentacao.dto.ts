import { IsString, IsInt, IsNumber} from "class-validator";

export class CreateMovimentacaoDto {
  @IsNumber()
  id: number;

  @IsString()
  tipo: string;

  @IsInt()
  quantidade: number;

  @IsString()
  observacao: string; 
}