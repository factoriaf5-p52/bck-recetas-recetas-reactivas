import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipeModule } from './recipe/recipe.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthService } from './auth/auth.service';
import { LoginController } from './auth/login.controller';
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';
import { AuthModule } from './auth/auth.module';
import { ToolsModule } from './tools/tools.module';
import { IngredientsModule } from './ingredients/ingredients.module';
import { EncryptService } from './tools/encrypt.service';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://127.0.0.1:27017/LaRecetteSocial"),
    RecipeModule,
    UsersModule,
    AuthModule,
    ToolsModule,
    IngredientsModule,
  ],
  controllers: [AppController ],
  providers: [AppService],
})
export class AppModule {}
