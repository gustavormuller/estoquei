import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Injectable()
export class UsuarioService {
  create(createUsuarioDto: CreateUsuarioDto) {
    return `This action adds a new usuario with data: ${JSON.stringify(createUsuarioDto)}`;
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
