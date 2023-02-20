import { Test, TestingModule } from '@nestjs/testing';
import { MenusService } from './menus.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import mongoose from 'mongoose';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { getModelToken } from '@nestjs/mongoose';

const mockMenuModel = {
  create: jest.fn().mockImplementation(dto =>({
    _id: new mongoose.Types.ObjectId(),
  })),
  findOneAndUpdate: jest.fn().mockImplementation(({_id: id}, updateDto) =>({
    _id: new mongoose.Types.ObjectId(id),
    ...updateDto
  })),
  findByIdAndRemove: jest.fn().mockImplementation(({_id:id})=>(
    {
      exec: () => ({
        _id: new mongoose.Types.ObjectId(id)
      })
    }
    )),
    findOne: jest.fn().mockImplementation(({_id:id})=>(
      {
        populate: () => ({
          exec: () => ({
            _id: new mongoose.Types.ObjectId(id),
            title: "almuerzo",
            description: "almuerzo coders",
            type: [],
            user: new mongoose.Types.ObjectId("63d930dae8fed1f1c0a890d8"),
            recipes: [
                {
                    title: new mongoose.Types.ObjectId("63d9335fe8fed1f1c0a890e2"),
                },
            
            ],
          })
        })
      }
    ))
  }
  


describe('MenusService', () => {
  let service: MenusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MenusService,
        {
        provide: getModelToken('Menu'),
        useValue:mockMenuModel
      }
      ],
    }).compile();

    service = module.get<MenusService>(MenusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });


  it('should create a menu', async ()=>{
    const createMenuDto: CreateMenuDto = {
      title: "almuerzo",
      description: "almuerzo coders",
      type: [],
      user: new mongoose.Types.ObjectId('63d930dae8fed1f1c0a890d8'),
      recipes: [
        {
            title: new mongoose.Types.ObjectId("63d9335fe8fed1f1c0a890e2"),
        },
  ]};

  expect(await service.create(createMenuDto)).toMatchObject({
    _id: expect.any(mongoose.Types.ObjectId),
    ...createMenuDto
  })
  });


it('should update a menu', async ()=>{
  const updateMenuDto: UpdateMenuDto = {
    title: "almuerzo",
    description: "almuerzo coders",
    type: [],
    user: new mongoose.Types.ObjectId("63d930dae8fed1f1c0a890d8"),
    recipes: [
      {
          title: new mongoose.Types.ObjectId("63d9335fe8fed1f1c0a890e2"),
      },
]};

  const id = '63eb9a07e1b46b5d48193c82';
  expect(await service.update(id, updateMenuDto)).toMatchObject({
    _id: new mongoose.Types.ObjectId(id)
  })
})

it('should delete a menu', async ()=>{
  const id = '63eb9a07e1b46b5d48193c82';
  expect(await service.removeMenu(id)).toMatchObject({
    _id: new mongoose.Types.ObjectId(id)
  })
});
it('should find one menu', async ()=>{
  const recipeId = '63f32fd1a058ec7751d7da08';
  expect(await service.findOne(recipeId)).toMatchObject({
    _id:new mongoose.Types.ObjectId(recipeId)
  })
})
});
