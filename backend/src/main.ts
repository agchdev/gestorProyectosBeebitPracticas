import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configurar Swagger
  const config = new DocumentBuilder()
    .setTitle('Gestor de Proyectos API') // Titulo
    .setDescription('Documentación de la API del gestor de proyectos') // Una descripcion
    .setVersion('1.0') // Version
    .build(); // Que se mande a construir

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3001, '0.0.0.0');
}
bootstrap();
