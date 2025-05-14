import { Inject, Injectable } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { Repository } from 'typeorm';
import { Categoria } from './entities/categoria.entity';

@Injectable()
export class CategoriaService {
  constructor(
    @Inject('CATEGORIA_REPOSITORY')
    private readonly categoriaRepository: Repository<Categoria>,
  ) {}

  async create(CreateCategoriaDto: CreateCategoriaDto) {
    try {
      await this.categoriaRepository.save(CreateCategoriaDto);
      return {
        code: 200,
        message: 'categoria cadastrado com sucesso',
      };
    } catch (error) {
      console.error(error);
      return {
        code: 500,
        message: 'Erro ao cadastrar categoria',
        error: error.message,
      };
    }
  }

  async findAll() {
    try {
      const categorias = await this.categoriaRepository.find();
      return categorias;
    } catch (error) {
      console.error(error);
      return {
        code: 500,
        message: 'Erro ao buscar categorias',
        error: error.message,
      };
    }
  }

  async findOne(id: object) {
    try {
      const categoria = await this.categoriaRepository.findOne({ id });
      if (!categoria) {
        return { code: 404, message: 'categoria não encontrado' };
      }
      return categoria;
    } catch (error) {
      console.error(error);
      return {
        code: 500,
        message: 'Erro ao buscar categoria',
        error: error.message,
      };
    }
  }

  async update(id: number, updateCategoriaDto: UpdateCategoriaDto) {
    try {
      const result = await this.categoriaRepository.update(id, updateCategoriaDto);
      if (result.affected === 0) {
        return { code: 404, message: 'categoria não encontrado para atualização' };
      }
      return { code: 200, message: 'categoria atualizado com sucesso' };
    } catch (error) {
      console.error(error);
      return {
        code: 500,
        message: 'Erro ao atualizar categoria',
        error: error.message,
      };
    }
  }

  async remove(id: number) {
    try {
      const result = await this.categoriaRepository.delete(id);
      if (result.affected === 0) {
        return { code: 404, message: 'categoria não encontrado para remoção' };
      }
      return { code: 200, message: 'categoria removido com sucesso' };
    } catch (error) {
      console.error(error);
      return {
        code: 500,
        message: 'Erro ao remover categoria',
        error: error.message,
      };
    }
  }
}
