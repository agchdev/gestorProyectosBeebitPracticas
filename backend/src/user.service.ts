/* EJEMPLO DE TYPEORM */
// Importamos los decoradores y herramientas de Nest.js
import { Injectable } from '@nestjs/common';
// Importamos herramientas de TypeORM para trabajar con la base de datos
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// Importamos la entidad `User`, que representa la tabla en la base de datos
import { User } from './user.entity';

@Injectable() // Permite que `UserService` pueda ser inyectado en otros módulos de Nest.js
export class UserService {
  constructor(
    @InjectRepository(User) // Inyectamos el repositorio de TypeORM para `User`
    private readonly userRepository: Repository<User>, // Repositorio que interactúa con la BD
  ) {}

  /**
   * Método para crear un usuario en la base de datos
   * @param name Nombre del usuario
   * @param role Rol del usuario (ej: 'admin' o 'user')
   * @returns Devuelve el usuario recién creado
   */
  async createUser(name: string, role: string): Promise<User> {
    const newUser = this.userRepository.create({ name, role }); // Crea un usuario en memoria
    return await this.userRepository.save(newUser); // Guarda el usuario en la base de datos
  }

  /**
   * Método para obtener todos los usuarios de la base de datos
   * @returns Devuelve un array con todos los usuarios
   */
  async findAllUsers(): Promise<User[]> {
    return await this.userRepository.find(); // Busca todos los usuarios en la tabla `user`
  }

  /**
   * Método para encontrar un usuario por su ID
   * @param id ID del usuario a buscar
   * @returns Devuelve el usuario encontrado o `null` si no existe
   */
  async findUserById(id: number): Promise<User | null> {
    return await this.userRepository.findOne({ where: { id } }); // Busca un usuario por ID
  }
}



/* amos a agregar un nuevo método a UserService llamado isAdmin(id: number), que verifica si un usuario es administrador.

Si el usuario tiene el rol "admin", el método debe devolver true.
Si el usuario tiene otro rol, debe devolver false. 

import { Injectable } from "@nestjs/common"

@Injectable()
export class UserService {
    findUser(id: number){
        return { id, name: 'Alejandro', role: id === 1 ? 'admin' : 'user' }; // Simulamos un usuario
    }

    isAdmin(id: number): boolean {
        const user = this.findUser(id);
        return user.role === 'admin'; // Devuelve true si el usuario es admin, false si no lo es
    }
}
*/