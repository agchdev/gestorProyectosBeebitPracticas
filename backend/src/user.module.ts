/* Este módulo junta todo (UserController, UserService, UserEntity) en un solo lugar*/
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";

@Module({
    imports: [TypeOrmModule.forFeature([User])], // Registramos la entidad en TypeORM
    controllers: [UserController],
    providers: [UserService],
})
export class UserModule {}