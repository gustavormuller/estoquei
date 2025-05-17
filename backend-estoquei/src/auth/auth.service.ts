import { Injectable } from '@nestjs/common';
import { UsuarioService } from 'src/usuario/usuario.service';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';



@Injectable()
export class AuthService {

    constructor(
        private readonly usuarioService: UsuarioService,
        private readonly jwtService: JwtService,
    ) {}

    async login(loginDto:LoginDto) {
        const usuario = await this.usuarioService.findByEmail(loginDto.email);
        if (!usuario) {
            return {
                statusCode: 401,
                message: 'Usuario não encontrado',
            }
        }

        const validaSenha = await bcrypt.compare(loginDto.senha, usuario.senha);
        if (!validaSenha) {
            return {
                statusCode: 402,
                message: 'Senha incorreta',
            }
        }

        const payload = {id: usuario.id, email:usuario.email, tipo: usuario.tipo};

        return {
            statusCode: 200,
            token: this.jwtService.sign(payload),
        }
    }
}
