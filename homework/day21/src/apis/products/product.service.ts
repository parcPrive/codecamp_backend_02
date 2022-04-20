import {
  ConsoleLogger,
  HttpException,
  HttpStatus,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Console } from 'console';
import { Repository } from 'typeorm';
import { ProductDetail } from '../productsDetail/entities/productDetail.entity';
import { ProductMainCategory } from '../productsMainCategory/entities/productMainCategory.entity';
import { ProductOrder } from '../productsOrder/entities/productOrder.entity';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,

    @InjectRepository(ProductMainCategory)
    private readonly productMainCategoryRepository: Repository<ProductMainCategory>,
    @InjectRepository(ProductDetail)
    private readonly productDetailRepository: Repository<ProductDetail>,
    @InjectRepository(ProductOrder)
    private readonly productOrderRepository: Repository<ProductOrder>,
  ) {}

  async findAll() {
    return await this.productRepository.find();
  }

  async findOne({ productId }) {
    return await this.productRepository.findOne({ where: { id: productId } }); //where을 넣어줘서 더정확하게 할수있다.
  }

  async create({ createProductInput }) {
    //상품을 데이터베이스에 저장
    const {
      productMainCategory,
      productDetail,
      productCartId,
      productOrder,
      ...product
    } = createProductInput;
    const result = await this.productMainCategoryRepository.save({
      ...productMainCategory,
    });
    const result2 = await this.productDetailRepository.save({
      ...productDetail,
    });
    console.log(productOrder)
    const result3 = [];
    for (let i = 0; i < productOrder.length; i++) {
      console.log(productOrder[i]);
      const productid = productOrder[i];

      const prevId = await this.productOrderRepository.findOne({
        id: productid,
      });

      if (prevId) {
        result3.push(prevId);
      } else {
        const newId = await this.productOrderRepository.save({
          id: productid,
        });
        result3.push(newId);
      }
    }

    return await this.productRepository.save({
      ...product,
      productMainCategory: result,
      productDetail: result2,
      productCartId: { id: productCartId },
      productOrder: result3,
    });
  }

  async update({ productId, updateProductInput }) {
    const product = await this.productRepository.findOne({
      where: { id: productId },
    });
    const newProduct = {
      ...product,
      ...updateProductInput,
      // id: product.id,
      // name: product.name,
      // description: product.description,
      // price: product.price,
      // isSoldout: product.isSoldout,
    };
    return await this.productRepository.save(newProduct);
  }
  async checkSoldout({ productId }) {
    const product = await this.productRepository.findOne({
      where: { id: productId },
    });
    if (product.isSoldout)
      throw new UnprocessableEntityException('이미 판매 완료된 상품입니다.');
    // if (productId.isSoldout) {
    //   throw new HttpException('이미 판매 완료된 상품입니다.',
    //   HttpStatus.UNPROCESSABLE_ENTITY,
    //   );
    // }
  }
  async delete({ productId }) {
    const result = await this.productRepository.softDelete({ id: productId });
    return result.affected ? true : false;
  }
}
