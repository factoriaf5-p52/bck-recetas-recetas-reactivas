import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { MenusService } from './menus.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { ApiTags } from '@nestjs/swagger';
import { ObjectId } from 'mongoose';

@Controller('menus')
@ApiTags('Menus')

export class MenusController {
  constructor(private readonly menusService: MenusService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createMenuDto: CreateMenuDto) {
    return this.menusService.create(createMenuDto);
  }

  @Get()
  async findAll() {
    return this.menusService.findAll();
  }

  @Get('menu/:id')
  async findOne(@Param('id') id: string) {
    return this.menusService.findOne(id);
  }
  
  @UseGuards(JwtAuthGuard)
  @Patch('menu/:id')
  async update(@Param('id') id: string, @Body() updateMenuDto: UpdateMenuDto) {
    return this.menusService.update(id, updateMenuDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async removeMenu(@Param('id') id: string) {
    return this.menusService.removeMenu(id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id/recipe/:id')
  async removeRecipeFromMenu(@Param('menuId, recipeId') menuId: string, recipeId: string) {
    return this.menusService.removeRecipeFromMenu(menuId, recipeId);
  }
}
