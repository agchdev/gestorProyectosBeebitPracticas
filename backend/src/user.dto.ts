import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto{
    @ApiProperty({example: 'Alejandro', description: 'El nombre del usuario'})
    name: string;

    @ApiProperty({example: 'admin', description: 'El rol del usuario'})
    role: string;
}