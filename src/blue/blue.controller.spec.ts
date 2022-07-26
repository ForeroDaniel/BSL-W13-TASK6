import { Test, TestingModule } from '@nestjs/testing';
import { BlueController } from './blue.controller';

describe('BlueController', () => {
  let controller: BlueController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlueController],
    }).compile();

    controller = module.get<BlueController>(BlueController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
