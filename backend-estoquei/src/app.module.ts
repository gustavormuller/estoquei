import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';

// -------- Categoria Módulo --------
import { CategoriaService } from './categoria/categoria.service';
import { CategoriaController } from './categoria/categoria.controller';
import { CategoriaProviders } from './categoria/categoria';
import { DatabaseModule } from './database/database.module';

@Module({
  controllers: [CategoriaController],
  providers: [CategoriaService, ...CategoriaProviders],
  imports: [DatabaseModule],
})
export class CategoriaModule {}

// -------- AppModule --------
import { ProdutoModule } from './produto/produto.module';
import { UsuarioModule } from './usuario/usuario.module';
import { FornecedorModule } from './fornecedor/fornecedor.module';
import { MovimentacaoModule } from './movimentacao/movimentacao.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: parseInt(configService.get('DB_PORT') ?? '5432', 10),
        username: configService.get('DB_USER'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [join(process.cwd(), 'dist/**/*.entity.{js,ts}')],
        synchronize: true,
      }),
    }),
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
