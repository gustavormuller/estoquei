import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ProdutoModule } from './produto/produto.module';
import { UsuarioModule } from './usuario/usuario.module';
import { CategoriaModule } from './categoria/categoria.module';
import { FornecedorModule } from './fornecedor/fornecedor.module';
import { MovimentacaoModule } from './movimentacao/movimentacao.module';

@Module({
  imports: [
    DatabaseModule,
    ProdutoModule,
    UsuarioModule,
    CategoriaModule,
    FornecedorModule,
    MovimentacaoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
