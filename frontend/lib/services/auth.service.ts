import axios from '../axios';
import Cookies from 'js-cookie';
import { API_ROUTES } from '../api';

export interface LoginDto {
  email: string;
  senha: string;
}

export interface AuthResponse {
  statusCode: number;
  message: string;
  token?: string;
}

export class AuthService {
  private readonly TOKEN_KEY = "token";

  async login(loginDto: LoginDto): Promise<AuthResponse> {
    try {
      const response = await axios.post<AuthResponse>(
        API_ROUTES.auth.login,
        loginDto
      );
      return response.data;
    } catch (error: any) {
      return error.response?.data || {
        statusCode: 500,
        message: "Erro ao fazer login",
      };
    }
  }

  async register(registerDto: LoginDto & { nome: string }): Promise<AuthResponse> {
    try {
      const response = await axios.post<AuthResponse>(
        API_ROUTES.usuario.create,
        registerDto
      );
      return {
        statusCode: response.data.code || 200,
        message: response.data.message
      };
    } catch (error: any) {
      return error.response?.data || {
        statusCode: 500,
        message: "Erro ao cadastrar usuário",
      };
    }
  }

  setToken(token: string) {
    Cookies.set(this.TOKEN_KEY, token, { expires: 7 }); // Expira em 7 dias
  }

  getToken(): string | undefined {
    return Cookies.get(this.TOKEN_KEY);
  }

  removeToken() {
    Cookies.remove(this.TOKEN_KEY);
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
} 