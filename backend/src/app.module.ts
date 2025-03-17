import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  controllers: [AppController],
  providers: [AppService], // Agregamos AppService aquí
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'database',
      port: Number(process.env.DB_PORT) || 5432, // Asegurar el puerto correcto
      username: process.env.DB_USER || 'admin',
      password: process.env.DB_PASSWORD || 'admin',
      database: process.env.DB_NAME || 'beebitGP',
      autoLoadEntities: true,
      synchronize: true, // Solo en desarrollo, en producción usar migraciones
      retryAttempts: 10, // Intentos de conexión si falla
      retryDelay: 5000, // Tiempo entre intentos
    }),
  ],
})
export class AppModule {}
