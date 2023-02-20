import { Test, TestingModule } from '@nestjs/testing';
import { MenuesService } from './menues.service';

describe('MenuesService', () => {
  let service: MenuesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MenuesService],
    }).compile();

    service = module.get<MenuesService>(MenuesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
