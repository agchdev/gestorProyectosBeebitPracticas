// Importamos los decoradores y herramientas necesarias de Nest.js
import { Controller, Get, Post, Body, Param } from '@nestjs/common';

// Importamos las cosas necesarias para poder trabajar con swagger
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

// Importamos el servicio `UserService`, que maneja la lógica de usuarios
import { UserService } from './user.service';

// Importamos la entidad `User`, que representa la tabla en la base de datos
import { User } from './user.entity';

// Esto es para añadir mas personalizacion al Swagger
import { CreateUserDto } from './user.dto';

@ApiTags('users') // Grupo de endpoints en Swagger
// Definimos que este controlador manejará rutas bajo `/users`
@Controller('users')
export class UserController {
    // Inyectamos el servicio de usuarios en el constructor
  constructor(private readonly userService: UserService) {}

  /**
 * Endpoint para crear un usuario
 * Ruta: POST /users
 * @param body Datos del usuario (name, role)
 * @returns Devuelve el usuario recién creado
 */
/*Explicacion del ApiResponse
status: 201 -> Indica que la respuesta tiene un código de estado HTTP 201 (Created)
description: 'El usuario ha sido creado correctamente' -> Descripción de la respuesta
type: User -> Indica que la respuesta es de tipo User
*/
@Post()
@ApiOperation({summary: 'Crear un usuario' }) // Esto es para documentar el endpoint en Swagger
@ApiResponse({ status: 201, description: 'El usuario ha sido creado correctamente', type: User })
@ApiResponse({ status: 404, description: 'Datos inválidos.' })
  async createUser(@Body() body: CreateUserDto): Promise<User> { // El CreateUserDto viene del archivo user.dto e indica que el body debe contener name y role
    return await this.userService.createUser(body.name, body.role);
  }

    /**
   * Endpoint para crear un usuario
   * Ruta: POST /users
   * @param body Datos del usuario (name, role)
   * @returns Devuelve el usuario recién creado
   */
  @ApiOperation({summary: 'Obtener todos los usuarios' })
  @ApiResponse({ status: 200, description: 'Todos los usuarios', type: [User] })
  /*Explicacion del ApiResponse
        status: 200 -> Indica que la respuesta tiene un código de estado HTTP 200 (OK)
        description: 'Todos los usuarios' -> Descripción de la respuesta
        type: [User] -> Indica que la respuesta es de tipo User
  */
  @Get()
  async getAllUsers(): Promise<User[]> {
    return await this.userService.findAllUsers();
  }

    /**
   * 📌 Endpoint para obtener un usuario por su ID
   * Ruta: GET /users/:id
   * @param id ID del usuario a buscar
   * @returns Devuelve el usuario encontrado o `null` si no existe
   */
  @ApiOperation({summary: 'Obtener un usuario por su ID' })
  @ApiResponse({ status: 200, description: 'El usuario ha sido creado correctamente', type: User })
  @ApiResponse({ status: 404, description: 'Usuario no encontrado.' })
  /* Explicacion del ApiResponse
        status: 200 -> Indica que la respuesta tiene un código de estado HTTP 200 (OK)
        description: 'El usuario ha sido creado correctamente' -> Descripción de la respuesta
        type: User -> Indica que la respuesta es de tipo User
  */
  @Get(':id')
  async getUserById(@Param('id') id:number): Promise<User | null> {
    return await this.userService.findUserById(id);
  }
}