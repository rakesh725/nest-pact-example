import { Controller, Get, Post, Body, Put, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';


interface ProductDto {
    id: string,
    name: string
}

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService) {}

    @Get()
    getProducts() {
        return this.productsService.getProducts();
    }

    @Post()
    createProducts(@Body() product: ProductDto) {
        this.productsService.createProduct(product)
    }

    @Put()
    updateProducts(@Body() product: ProductDto) {
        this.productsService.updateProduct(product)
    }

    @Delete()
    deleteProduct(@Body() product: ProductDto) {
        this.productsService.deleteProduct(product.id)
    }

}
