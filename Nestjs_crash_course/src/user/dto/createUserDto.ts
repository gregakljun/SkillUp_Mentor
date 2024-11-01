import { IsEmail, IsNumberString, IsPhoneNumber, IsString } from "class-validator";

export class CreateUserDto{
    @IsString()
    name:string;

    @IsEmail()
    email:string;

    @IsNumberString()
    phone:string;
}