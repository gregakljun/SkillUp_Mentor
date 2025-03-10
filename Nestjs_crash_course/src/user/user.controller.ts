import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/createUserDto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService:UserService){}
    @Get(":id")
    findOne(@Param("id") id:string){
        return this.userService.findOne(id);
    }


    @Post()
    create(@Body() createUserDto: CreateUserDto ){
        return this.userService.create(createUserDto);
    }
}
