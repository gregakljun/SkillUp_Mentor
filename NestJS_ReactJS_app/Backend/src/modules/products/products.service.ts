import { BadRequestException, Body, Injectable, InternalServerErrorException } from '@nestjs/common';
import { Permission } from 'entities/permission.entity';
import { AbstractService } from 'modules/common/abstract.service';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import Logging from 'library/Logging'; 
import { Product } from 'entities/product.entity';
import { CreateUpdateProductDto } from './dto/create-update-product.dto';

@Injectable()
export class ProductsService extends AbstractService {
        constructor(@InjectRepository(Product) private readonly productsRepository: Repository<Product>) {
            super(productsRepository)
        }

    async create(createProductDto: CreateUpdateProductDto): Promise<Product> {
        try {
            const product = this.productsRepository.create(createProductDto)
            return this.productsRepository.save(product)
        } catch (error) {
            Logging.error(error)
            throw new BadRequestException('Something went wrong while creating a new product.')
        }
    }

    async update(productId: string, updateProductDto: CreateUpdateProductDto): Promise<Product> {
        const product = ( await this.findById(productId) ) as Product
        try {
            product.title = updateProductDto.title
            product.description = updateProductDto.desciption
            product.price = updateProductDto.price
            product.image = updateProductDto.image
            return this.productsRepository.save(product)
        } catch (error) {
            Logging.error(error)
            throw new InternalServerErrorException('Something went wrong while updating the product.')
        }
    }

    async updateProductImage(id: string, image: string): Promise<Product> {
        const product = await this.findById(id)
        return this.update(product.id, {...product, image})
    }
}
