import { Inject, Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuarioService {
  constructor(
    @Inject('USUARIO_REPOSITORY')
    private usuarioRepository: Repository<Usuario>,
  ) {}

  
  async create(createUsuarioDto: CreateUsuarioDto) {

    createUsuarioDto.senha = await bcrypt.hash(createUsuarioDto.senha, 10);

    try{
        await this.usuarioRepository.save(createUsuarioDto);
        return {
          code: 200,
          message: 'Usuario cadastrado com sucesso',
        }

    }catch (error) {
      console.error(error);
      return {
        code: 500,
        message: 'Erro ao cadastrar usuario',
        error: error.message,
      }
    }
    ;
  }

  findAll() {
    return `This action returns all usuario`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usuario`;
  }

  update(id: number, _updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario with data: ${JSON.stringify(_updateUsuarioDto)}`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
