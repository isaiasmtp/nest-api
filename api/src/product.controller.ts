import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Product } from "./product.model";

@Controller('product')
export class ProductController {
    products : Product[] = [
        new Product("Livro1","Livro um", 100),
        new Product("Livro2","Livro dois", 200),
        new Product("Livro3","Livro tres", 300),
    ]

    @Get()
    all(): Product[] {
        return this.products;
    }

    @Get(':id')
    find(@Param() params): Product {
        return this.products[0]
    }

    @Post()
    create(@Body() product: Product) {
        console.log(product);
        product.id = Math.random() * 10
        this.products.push(product)
        return product
    }

    @Put()
    update(@Body() product): string {
        console.log(product);
        return product
    }

    @Delete(':id')
    remove(@Param() params): string {
        return 'Delete product with id '+params.id
    }
}