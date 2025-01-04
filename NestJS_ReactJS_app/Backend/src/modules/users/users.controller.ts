import { ClassSerializerInterceptor, Controller, Get, HttpCode, HttpStatus, Query, UseInterceptors, Param, Patch, Delete, UploadedFile, BadRequestException, Post, Body } from '@nestjs/common';
import { join } from 'path';
import { isFileExtensionSafe, saveImageToStorage } from 'helpers/imageStorage';
import { UsersService } from './users.service';
import { PaginatedResult } from 'interfaces/paginated-result.interface';
import { User } from 'entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { ExpressAdapter, FileInterceptor } from '@nestjs/platform-express';
import { removeFile } from 'helpers/imageStorage';
import { HasPermission } from 'decorators/has-permission.decorator';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
@UseInterceptors(ClassSerializerInterceptor)
export class UsersController {
    constructor(private readonly usersService: UsersService) {}


    @ApiCreatedResponse({ description: 'List all users' })
    @ApiBadRequestResponse({ description: 'Error for list of users.' })
    @Get()
    @HasPermission('users')
    @HttpCode(HttpStatus.OK)
    async findAll(@Query('page') page:number): Promise<PaginatedResult> {
        return this.usersService.paginate(page, ['role'])
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    async findOne(@Param('id') id:string): Promise<User> {
        return this.usersService.findById(id)
    }

    @ApiCreatedResponse({ description: 'Creates new user' })
    @ApiBadRequestResponse({ description: 'Error for creating a new user.' })
    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.usersService.create(createUserDto)
    }
    
    @Post('upload/:id')
    @UseInterceptors(FileInterceptor('avatar', saveImageToStorage))
    @HttpCode(HttpStatus.CREATED)
    async upload(@UploadedFile() file: Express.Multer.File, @Param('id') id: string): Promise<User> {
        const filename = file?.filename

        if(!filename) throw new BadRequestException('File must be a png, jpg/jpeg')

        const imagesFolderPath = join(process.cwd(), 'files')
        const fullImagePath = join(imagesFolderPath + '/' + filename)
        removeFile(fullImagePath)
        throw new BadRequestException('File content does not match extension!')
    }

    @Patch(':id')
    @HttpCode(HttpStatus.OK)
    async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): Promise<User> {
        return this.usersService.update(id, updateUserDto)
    }

    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    async remove(@Param('id') id: string): Promise<User> {
        return this.usersService.remove(id)
    }


}
