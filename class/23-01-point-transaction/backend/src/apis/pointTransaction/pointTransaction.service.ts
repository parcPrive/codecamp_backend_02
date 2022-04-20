import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import {
  PointTransaction,
  POINT_TRANSACTION_STATUS_ENUM,
} from './antities/pointTranscation.entity';

@Injectable()
export class PointTransactionService {
  constructor(
    @InjectRepository(PointTransaction)
    private readonly pointTransactionRepository: Repository<PointTransaction>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create({ impUid, amount, currentUser }) {
    // 1. pointTransaction 테이블에 거래기록 1줄 생성
    // const pointTransaction = this.pointTransactionRepository.creat({
    //   impUid: impUid,
    //   amount: amount,
    //   user: currentUser,
    //   status: POINT_TRANSACTION_STATUS_ENUM.PAYMENT,
    // });
    // await this.pointTransactionRepository.save();
    console.log('====================================');
    const pointTransaction = await this.pointTransactionRepository.save({
      impUid: impUid,
      amount: amount,
      user: currentUser.id,
      status: POINT_TRANSACTION_STATUS_ENUM.PAYMENT,
    });

    // 2. 유저의 돈 찾아오기
    const user = await this.userRepository.findOne({ id: currentUser.id });
    console.log('====================================');
    // 3. 유저의 돈 업데이트
    await this.userRepository.update(
      { id: user.id }, //조건
      { point: user.point + amount }, //변경내용
    );

    // 4. 최종결과 프론트엔드에 돌려주기
    return pointTransaction;
  }
}
