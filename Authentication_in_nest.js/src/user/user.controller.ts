import { Body, Controller, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto/createUserDto';
import { UserService } from './user.service';
import { CommentService } from 'src/comment/comment.service';
import { JwtGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('user')
export class UserController {
    constructor(private readonly userService:UserService, private readonly commentService: CommentService){}
    @Get(":id")
    findOne(@Param("id") id:number){
        return this.userService.findOne(id);
    }


    @Post()
    create(@Body() createUserDto: CreateUserDto ){
        return this.userService.create(createUserDto);
    }

    @UseGuards(JwtGuard)
    @Get(':id/comments')
    getUserComment(@Param("id") id:string){
        return this.commentService.findUserComment(id);
    }

    @Put(':id')
    update(@Param("id") id:number, @Body() updateUserDto:UpdateUserDto){
        return this.userService.update(id, updateUserDto);
    }
}
