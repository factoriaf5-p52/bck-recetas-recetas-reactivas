import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { ParseObjectIdPipe } from '../utilities/parse-object-id-pipe.pipe';
import { CreateCommentDto } from './dto/create-comment.dto';

@Controller('recipes')
@ApiTags('Recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  @UseGuards(JwtAuthGuard)
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
    return this.recipesService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('recipe/:id')
  async update(
    @Param('id') id: string,
    @Body() updateRecipeDto: UpdateRecipeDto,
  ) {
    return this.recipesService.update(id, updateRecipeDto);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id/ingredient/:ingredientId')
  async addIngredient(
    @Param('id') id: string,
    @Body() updateRecipeDto: UpdateRecipeDto,
  ) {
    return this.recipesService.addIngredient(id, updateRecipeDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('recipe/:id')
  async remove(@Param('id') id: string) {
    return this.recipesService.remove(id);
  }

  @Post(':id/comment')
  async addComment(
    @Param('id', ParseObjectIdPipe) id: string,
    @Body() comment: CreateCommentDto,
  ) {
    return this.recipesService.addComment(id, comment);
  }
}
