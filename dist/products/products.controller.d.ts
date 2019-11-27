import { ProductsService } from './products.service';
interface ProductDto {
    id: string;
    name: string;
}
export declare class ProductsController {
    private productsService;
    constructor(productsService: ProductsService);
    getProducts(): {
        id: number;
        name: string;
    }[];
    createProducts(product: ProductDto): void;
    updateProducts(product: ProductDto): void;
    deleteProduct(product: ProductDto): void;
}
export {};
