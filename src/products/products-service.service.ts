import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {

  private products = []

  getAll() {
    return this.products
  }

  getById(id: string) {
    return this.products.find(p => p.id === id)
  }

  create(product: CreateProductDto) {
    this.products.push({
      ...product,
      _id: Date.now().toString()
    })
  }
}
