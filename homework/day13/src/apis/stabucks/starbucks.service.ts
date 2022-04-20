import { Injectable } from '@nestjs/common';

@Injectable()
export class StarbucksService {
  findAll() {
    // DB에 접속해서 데이터를 꺼내오는 로직

    return [
      {
        menu: '아메리카노',
        price: '30000원',
        kcal: '99999kcal',
        fat: '0g',
        protein: '0g',
        sodium: '0g',
        sugar: '0g',
        caffeine: '200mg',
      },
    ];
  }

  create() {
    // DB에 접속해서 데이터를 등록하는 로직

    return '등록에 성공했습니다.';
  }
}
