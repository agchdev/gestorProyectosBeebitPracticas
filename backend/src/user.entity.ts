import { ApiProperty } from "@nestjs/swagger";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity() // Esto indica que esta clase será una tabla en la BD
export class User {
    @ApiProperty({example: 1, description: 'El ID del usuario'})
    @PrimaryGeneratedColumn() // Genera un ID autoincremental
    id: number;


    @ApiProperty({example: 'Alejandro', description: 'El nombre del usuario'})
    @Column() // Crea una comlumna "name" em la BD
    name: string;


    @ApiProperty({example: 'Admin', description: 'El rol del usuario'})
    @Column() // Crea una columna "role" en la BD
    role: string;
}