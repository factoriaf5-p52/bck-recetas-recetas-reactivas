import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix("api/v1")
  const options = new DocumentBuilder()
    .setTitle("LA RECETTE API")
    .setDescription("API rest para la recipe en mongodb")
    .setVersion("1.0")
    .build()
    const document = SwaggerModule.createDocument(app, options)
    SwaggerModule.setup("docs", app, document);

  await app.listen(3000);
}
bootstrap();
