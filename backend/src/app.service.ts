// Importamos el decorador `Injectable` desde '@nestjs/common'.
// Esto indica que esta clase puede ser inyectada en otros componentes de Nest.js.
import { Injectable } from '@nestjs/common';

// Decorador `@Injectable()`, que convierte esta clase en un servicio inyectable en Nest.js.
@Injectable()
export class AppService {
  // Método público `getHello()`, que devuelve un string cuando se llama.
  getHello(): string {
    return '¡La API está funcionando correctamente!';
  }
}
