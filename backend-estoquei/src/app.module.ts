import { Module } from '@nestjs/common';
import { ProdutoModule } from './produto/produto.module';
import { UsuarioModule } from './usuario/usuario.module';
import { FornecedorModule } from './fornecedor/fornecedor.module';
import { MovimentacaoModule } from './movimentacao/movimentacao.module';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { CategoriaModule } from './categoria/categoria.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    DatabaseModule,
    ProdutoModule,
    UsuarioModule,
    CategoriaModule,
    FornecedorModule,
    MovimentacaoModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
