export declare class ProductsService {
    products: {
        id: number;
        name: string;
    }[];
    getProducts(): {
        id: number;
        name: string;
    }[];
    createProduct(product: any): void;
    updateProduct(product: any): void;
    deleteProduct(id: any): void;
}
