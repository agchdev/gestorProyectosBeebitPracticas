import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../src/user.entity';

describe('UserController (e2e)', () => {
  let app: INestApplication;
  let userRepository: Repository<User>;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule], // Cargamos toda la aplicación
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    userRepository = moduleFixture.get<Repository<User>>(getRepositoryToken(User));
  });

  afterEach(async () => {
    await userRepository.clear(); // Limpia los usuarios después de cada test
  });

  afterAll(async () => {
    await app.close(); // Cerramos la app al finalizar las pruebas
  });

  it('/users (POST) → Debe crear un usuario', async () => {
    const response = await request(app.getHttpServer())
      .post('/users')
      .send({ name: 'Alejandro', role: 'admin' })
      .expect(201);

    expect(response.body).toMatchObject({
      id: expect.any(Number),
      name: 'Alejandro',
      role: 'admin',
    });
  });

  it('/users/:id (GET) → Debe obtener un usuario por ID', async () => {
    const user = await userRepository.save({ name: 'Alejandro', role: 'admin' });

    const response = await request(app.getHttpServer())
      .get(`/users/${user.id}`)
      .expect(200);

    expect(response.body).toEqual({
      id: user.id,
      name: 'Alejandro',
      role: 'admin',
    });
  });
});
