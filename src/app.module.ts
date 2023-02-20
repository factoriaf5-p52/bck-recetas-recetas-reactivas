import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipesModule } from './recipes/recipes.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthService } from './auth/auth.service';
import { LoginController } from './auth/login.controller';
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';
import { AuthModule } from './auth/auth.module';
import { ToolsModule } from './tools/tools.module';
import { IngredientsModule } from './ingredients/ingredients.module';
import { BadgesModule } from './badges/badges.module';
import { EncryptService } from './tools/encrypt.service';
import { MenusModule } from './menus/menus.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://admin:factoriaf5@back-recette-social.c9q8fgj.mongodb.net/LaRecette"),
    RecipesModule,
    UsersModule,
    AuthModule,
    ToolsModule,
    IngredientsModule,
    ShoppingListModule,
    BadgesModule,
    MenusModule,
 ],
  controllers: [AppController ],
  providers: [AppService],
})
export class AppModule {}
