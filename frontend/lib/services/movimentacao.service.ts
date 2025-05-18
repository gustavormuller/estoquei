import { API_ROUTES } from '../api';
import axios from '../axios';

export interface Movimentacao {
  id: number;
  tipo: 'ENTRADA' | 'SAIDA';
  quantidade: number;
  data: string;
  produtoId: number;
  usuarioId: number;
}

export class MovimentacaoService {
  async getAll() {
    const response = await axios.get(API_ROUTES.movimentacao.getAll);
    return response.data;
  }

  async getOne(id: number) {
    const response = await axios.get(API_ROUTES.movimentacao.getOne(id));
    return response.data;
  }

  async create(data: Omit<Movimentacao, 'id'>) {
    const response = await axios.post(API_ROUTES.movimentacao.create, data);
    return response.data;
  }

  async update(id: number, data: Partial<Movimentacao>) {
    const response = await axios.patch(API_ROUTES.movimentacao.update(id), data);
    return response.data;
  }

  async delete(id: number) {
    const response = await axios.delete(API_ROUTES.movimentacao.delete(id));
    return response.data;
  }
} 