// Importamos las herramientas necesarias de Nest.js para testing
import { Test, TestingModule } from "@nestjs/testing";
import { AppService } from "./app.service";

// Definimos una suite de pruebas con `describe()`, donde agrupamos los tests de `AppService`
describe('AppService', () => { 
    let service: AppService; // Declaramos una variable para almacenar la instancia del servicio

    // `beforeEach()` se ejecuta antes de cada prueba dentro de esta suite.
    beforeEach(async () => {
        // Creamos un módulo de prueba en Nest.js con `Test.createTestingModule`
        const module: TestingModule = await Test.createTestingModule({
            providers: [AppService], // Indicamos que vamos a probar `AppService`
        }).compile(); // Compilamos el módulo de prueba

        // Obtenemos la instancia del servicio `AppService` para usarlo en las pruebas
        service = module.get<AppService>(AppService);
    });

    // Definimos un test con `it()`, el cual verifica el comportamiento de `getHello()`
    it('Debe retornar "¡La API está funcionando correctamente!"', () => {
        // Esperamos que `service.getHello()` devuelva exactamente el string esperado
        expect(service.getHello()).toBe('¡La API está funcionando correctamente!');
    });
});
