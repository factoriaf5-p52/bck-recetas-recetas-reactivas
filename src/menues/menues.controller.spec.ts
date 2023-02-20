import { Test, TestingModule } from '@nestjs/testing';
import { MenuesController } from './menues.controller';
import { MenuesService } from './menues.service';

describe('MenuesController', () => {
  let controller: MenuesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MenuesController],
      providers: [MenuesService],
    }).compile();

    controller = module.get<MenuesController>(MenuesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
