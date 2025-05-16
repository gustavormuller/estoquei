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
                code: 401,
                message: 'Usuario não encontrado',
            }
        }

        const validaSenha = await bcrypt.compare(loginDto.senha, usuario.senha);
        if (!validaSenha) {
            return {
                code: 402,
                message: 'Senha incorreta',
            }
        }

        const payload = {id: usuario.id, email:usuario.email}

        return {
            code: 200,
            token: this.jwtService.sign(payload),
        }
    }
}
