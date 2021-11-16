import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ProductsModule } from './products/products.module';

@Module({
  imports: [MongooseModule.forRoot(`mongodb+srv://alyona:alyona@cluster0.tkd9u.mongodb.net/nest-rest-api?retryWrites=true&w=majority`), ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
