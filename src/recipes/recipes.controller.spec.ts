import { Test, TestingModule } from '@nestjs/testing';
import { RecipesController } from './recipes.controller';
import { RecipesService } from './recipes.service';
import { Recipe } from './schemas/recipe.schema';
import { getModelToken } from '@nestjs/mongoose';

const data: Recipe []= [{
  title: 'a',
  description: 'a',
  // author: {type:ObjectId },
  ingredients: [],
  time: 2,
  is_private: false,
  tags: [],
  score: 3,
  views: 3,
  comments: [],
  photo: ''
}]

const mockRecipeModel = {
  findOne: jest.fn(),
  find: jest.fn().mockImplementationOnce(() => ({
    exec: jest.fn().mockResolvedValue({ data }),
  })),
  create: jest.fn(),
};


describe('RecipesController', () => {
  let controller: RecipesController;
  let service: RecipesService;
  let model: typeof mockRecipeModel;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecipesController],
      providers: [RecipesService, 
      {
        provide: getModelToken('Recipe'),
        useValue: mockRecipeModel
      }
      ],
    }).compile();

    controller = module.get<RecipesController>(RecipesController);
    service= module.get<RecipesService>(RecipesService);
    model = module.get(getModelToken('Recipe'));
  });
  describe('findAll controller',()=>{
    it('should return all recipes list', async () => {
      const result = await controller.findAll();
      expect(result).toMatchObject({data});
    });
  })
});
