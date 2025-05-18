import { API_ROUTES } from '../api';
import axios from '../axios';

export interface Produto {
  id: number;
  nome: string;
  descricao?: string;
  preco: number;
  quantidade: number;
  categoriaId: number;
  fornecedorId: number;
}

export class ProdutoService {
  async getAll() {
    const response = await axios.get(API_ROUTES.produto.getAll);
    return response.data;
  }

  async getOne(id: number) {
    const response = await axios.get(API_ROUTES.produto.getOne(id));
    return response.data;
  }

  async create(data: Omit<Produto, 'id'>) {
    const response = await axios.post(API_ROUTES.produto.create, data);
    return response.data;
  }

  async update(id: number, data: Partial<Produto>) {
    const response = await axios.patch(API_ROUTES.produto.update(id), data);
    return response.data;
  }

  async delete(id: number) {
    const response = await axios.delete(API_ROUTES.produto.delete(id));
    return response.data;
  }
} 