import { Inject, Injectable } from '@nestjs/common';
import { CreateMovimentacaoDto } from './dto/create-movimentacao.dto';
import { UpdateMovimentacaoDto } from './dto/update-movimentacao.dto';
import { Repository } from 'typeorm';
import { Movimentacao } from './entities/movimentacao.entity';

@Injectable()
export class MovimentacaoService {
  constructor(
    @Inject('MOVIMENTACAO_REPOSITORY')
    private readonly MovimentacaoRepository: Repository<Movimentacao>,
  ) {}

  async create(createMovimentacaoDto: CreateMovimentacaoDto) {
    try {
      await this.MovimentacaoRepository.save(createMovimentacaoDto);
      return {
        code: 200,
        message: 'Movimentacao efetuada com sucesso',
      };
    } catch (error) {
      console.error(error);
      return {
        code: 500,
        message: 'Erro ao efetuar Movimentacao',
        error: error.message,
      };
    }
  }

  async findAll() {
    try {
      const Movimentacao = await this.MovimentacaoRepository.find();
      return Movimentacao;
    } catch (error) {
      console.error(error);
      return {
        code: 500,
        message: 'Erro ao buscar Movimentacaos',
        error: error.message,
      };
    }
  }

  async findOne(id: number) {
    try {
      const Movimentacao = await this.MovimentacaoRepository.findOne({ where: { id } });
      if (!Movimentacao) {
        return { code: 404, message: 'Movimentacao não encontrado' };
      }
      return Movimentacao;
    } catch (error) {
      console.error(error);
      return {
        code: 500,
        message: 'Erro ao buscar Movimentacao',
        error: error.message,
      };
    }
  }

  async update(id: number, updateMovimentacaoDto: UpdateMovimentacaoDto) {
    try {
      const result = await this.MovimentacaoRepository.update(id, updateMovimentacaoDto);
      if (result.affected === 0) {
        return { code: 404, message: 'Movimentacao não encontrado para atualização' };
      }
      return { code: 200, message: 'Movimentacao atualizado com sucesso' };
    } catch (error) {
      console.error(error);
      return {
        code: 500,
        message: 'Erro ao atualizar Movimentacao',
        error: error.message,
      };
    }
  }

  async remove(id: number) {
    try {
      const result = await this.MovimentacaoRepository.delete(id);
      if (result.affected === 0) {
        return { code: 404, message: 'Movimentacao não encontrado para remoção' };
      }
      return { code: 200, message: 'Movimentacao removido com sucesso' };
    } catch (error) {
      console.error(error);
      return {
        code: 500,
        message: 'Erro ao remover Movimentacao',
        error: error.message,
      };
    }
  }
}
