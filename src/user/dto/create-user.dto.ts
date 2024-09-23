import { IsBoolean, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty({ message: "El nombre es requerido" })
    @IsString({ message: "El nombre debe ser un texto" })
    @MinLength(2, { message: "El nombre debe tener al menos 2 caracteres" })
    firstName: string;

    @IsNotEmpty({ message: "El apellido es requerido" })
    @IsString({ message: "El apellido debe ser un texto" })
    @MinLength(2, { message: "El apellido debe tener al menos 2 caracteres" })
    lastName: string;

    @IsNotEmpty({ message: "isActive es requerido" })
    @IsBoolean({ message: "isActive debe ser un booleano" })
    isActive: boolean;
}
