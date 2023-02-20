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

  @Get(':id')
  async findOne(@Param('id') id: ObjectId) {
    return this.menusService.findOne(id);
  }
  
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(@Param('id') id: ObjectId, @Body() updateMenuDto: UpdateMenuDto) {
    return this.menusService.update(id, updateMenuDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async removeMenu(@Param('id') id: ObjectId) {
    return this.menusService.removeMenu(id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async removeRecipeFromMenu(@Param('id') menuId: ObjectId, recipeId: ObjectId) {
    return this.menusService.removeRecipeFromMenu(menuId, recipeId);
  }
}
