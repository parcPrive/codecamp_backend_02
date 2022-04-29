import { Test } from '@nestjs/testing';
import { async } from 'rxjs';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//app.controller.spec.ts파일과의 형식이 같다
describe('AppController', () => {
  let appController: AppController;
  //let appService: AppService;

  beforeEach(async () => {
    const appModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    // appService = new AppService();
    // appController = new AppController(appService);
    appController = appModule.get<AppController>(AppController);
  });
  describe('getHello', () => {
    it('이 테스트의 검증 결과는 Hello World를 리턴해야함!!', () => {
      const result = appController.getHello();
      expect(result).toBe('Hello World!');
    });
  });
});
