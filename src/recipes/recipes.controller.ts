import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('recipes')
@ApiTags ('RECIPES')

export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  @Post()
  async create(@Body() createRecipeDto: CreateRecipeDto) {
    return this.recipesService.create(createRecipeDto);
  }

  @Get()
  async findAll() {
    return this.recipesService.findAll();
  }

  @Get('recipe/:id')
  async findOne(@Param('id') id: string) {
    return this.recipesService.findOne(+id);
  }

  @Patch('recipe/:id')
  async update(
    @Param('id') id: string,
    @Body() updateRecipeDto: UpdateRecipeDto,
  ) {
    return this.recipesService.update(+id, updateRecipeDto);
  }
  
  @Patch(':id/ingredient/:ingredientId')
  async addIngredient( 
    @Param('id') id: string,
    @Body() updateRecipeDto: UpdateRecipeDto,
  ) {
    return this.recipesService.addIngredient (id, updateRecipeDto);
  }

  @Delete('recipe/:id')
  async remove(@Param('id') id: string) {
    return this.recipesService.remove(+id);
  }
}
