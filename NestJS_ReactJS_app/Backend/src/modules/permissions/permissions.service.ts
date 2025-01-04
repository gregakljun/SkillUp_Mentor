import { BadRequestException, Body, Injectable } from '@nestjs/common';
import { Permission } from 'entities/permission.entity';
import { AbstractService } from 'modules/common/abstract.service';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePermissionDto } from './dto/create-permission.dto';
import Logging from 'library/Logging';

@Injectable()
export class PermissionsService extends AbstractService{
    constructor(@InjectRepository(Permission) private readonly permissionsRepository: Repository<Permission>) {
        super(permissionsRepository)
    }

    async create(createPermissionDto: CreatePermissionDto): Promise<Permission> {
        try {
            const permission = this.permissionsRepository.create(createPermissionDto)
            return this.permissionsRepository.save(permission)
        } catch (error) {
            Logging.error(error)
            throw new BadRequestException('Something went wrong while creating a new permission.')
        }
    }
}
