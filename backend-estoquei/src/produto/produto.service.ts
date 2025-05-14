import { Inject, Injectable } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { Repository } from 'typeorm';
import { Produto } from './entities/produto.entity';

@Injectable()
export class ProdutoService {
  constructor(
    @Inject('PRODUTO_REPOSITORY')
    private readonly produtoRepository: Repository<Produto>,
  ) {}

  async create(createProdutoDto: CreateProdutoDto) {
    try {
      await this.produtoRepository.save(createProdutoDto);
      return {
        code: 200,
        message: 'Produto cadastrado com sucesso',
      };
    } catch (error) {
      console.error(error);
      return {
        code: 500,
        message: 'Erro ao cadastrar Produto',
        error: error.message,
      };
    }
  }

  async findAll() {
    try {
      const produtos = await this.produtoRepository.find();
      return produtos;
    } catch (error) {
      console.error(error);
      return {
        code: 500,
        message: 'Erro ao buscar produtos',
        error: error.message,
      };
    }
  }

  async findOne(id: number) {
    try {
      const produto = await this.produtoRepository.findOne({ where: { id } });
      if (!produto) {
        return { code: 404, message: 'Produto não encontrado' };
      }
      return produto;
    } catch (error) {
      console.error(error);
      return {
        code: 500,
        message: 'Erro ao buscar produto',
        error: error.message,
      };
    }
  }

  async update(id: number, updateProdutoDto: UpdateProdutoDto) {
    try {
      const result = await this.produtoRepository.update(id, updateProdutoDto);
      if (result.affected === 0) {
        return { code: 404, message: 'Produto não encontrado para atualização' };
      }
      return { code: 200, message: 'Produto atualizado com sucesso' };
    } catch (error) {
      console.error(error);
      return {
        code: 500,
        message: 'Erro ao atualizar produto',
        error: error.message,
      };
    }
  }

  async remove(id: number) {
    try {
      const result = await this.produtoRepository.delete(id);
      if (result.affected === 0) {
        return { code: 404, message: 'Produto não encontrado para remoção' };
      }
      return { code: 200, message: 'Produto removido com sucesso' };
    } catch (error) {
      console.error(error);
      return {
        code: 500,
        message: 'Erro ao remover produto',
        error: error.message,
      };
    }
  }
}
