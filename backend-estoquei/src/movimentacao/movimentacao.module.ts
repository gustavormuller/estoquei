import { Module } from '@nestjs/common';
import { MovimentacaoService } from './movimentacao.service';
import { MovimentacaoController } from './movimentacao.controller';
import { movimentacaoProviders } from './movimentacao';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [MovimentacaoController],
  providers: [MovimentacaoService,...movimentacaoProviders],
    imports: [DatabaseModule]
})
export class MovimentacaoModule {}
