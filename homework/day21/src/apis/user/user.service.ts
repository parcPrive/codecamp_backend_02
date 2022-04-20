import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findOne({ email }) {
    return await this.userRepository.findOne({ email });
  }

  async create({ email, hashedPassword: pw, phone, address, person }) {
    const user = await this.userRepository.findOne({ email });
    if (!email.includes('@'))
      throw new ConflictException('이메일을 확인해주세요.');
    if (user) throw new ConflictException('이미 등록된 이메일입니다.');
    return await this.userRepository.save({
      email,
      pw,
      phone,
      address,
      person,
    });
  }
  async update({ email, pw }) {
    const user = await this.userRepository.findOne({
      where: { email },
    });
    const newUser = {
      ...user,
      pw,
    };
    return await this.userRepository.save(newUser);
  }
  async delete({ email }) {
    const result = await this.userRepository.softDelete({ email });
    return result.affected ? true : false;
  }
}
