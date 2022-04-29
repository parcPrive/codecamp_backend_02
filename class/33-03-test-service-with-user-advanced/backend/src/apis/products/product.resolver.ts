import { ElasticsearchService } from '@nestjs/elasticsearch';
import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { CreateProductInput } from './dto/createProduct.input';
import { UpdateProductInput } from './dto/updateProduct.input';
import { Product } from './entities/product.entity';
import { ProductService } from './product.service';

@Resolver()
export class ProductResolver {
  constructor(
    private readonly productService: ProductService, //
    private readonly elasticsearchService: ElasticsearchService, //엘라스틱 사용하기 위해서 임포트해주다동동
  ) {}

  @Query(() => [Product])
  async fetchProducts() {
    //매분 mysql에 들어온 쿼리를 쏜다 쏜거를 엘라스틱스틱으로 다시쏜다 그게 logstash.conf안에 들가서 인풋이 아웃풋으로 ㅇㅋ?
    //엘라스틱서치에서 조회 연습하기!!!
    const result = await this.elasticsearchService.search({
      index: 'myproduct',
      query: {
        match_all: {}, //myprodut안에 있는 모든것을 가져온다.능능능
      },
    });
    console.log(JSON.stringify(result), null, '     ');
    //엘라스틱서치에서 조회해보기위해 임시로 주석!!
    // return this.productService.findAll()
    //localhost:9200/myproduct/_search?pretty 서치한거 확인 이쁘게
  }

  @Query(() => Product)
  fetchProduct(
    @Args('productId') productId: string, //
  ) {
    return this.productService.findOne({ productId });
  }

  @Mutation(() => Product)
  createProduct(
    @Args('createProductInput') createProductInput: CreateProductInput,
  ) {
    //엘라스틱서치에서 등록 연습하기!! => 연습일뿐, 실제로는 MySQL에 저장할 예정!!
    //this.elasticsearchService.create({
    //너도 주석이야 왜냐? 연습을위해서 ㅎㅎ
    // id: 'myid',
    // index: 'myproduct', //여기서의 인덱스는 테이블 이름을 말한다둥둥
    // document: {
    //   nama: '철수',
    //   age: 13,
    //   school: '다람쥐초등학교',
    //}, //뭘 등록할껀가용용용 그리공 ...createProductInput 또이또이랑께
    // });
    //엘라스틱서치에서 등록해보기위해 임시로 주석!!
    return this.productService.create({ createProductInput }); //여기서 mysql에서 한줄
  }

  @Mutation(() => Product)
  async updateProduct(
    @Args('productId') productId: string,
    @Args('updateProductInput') updateProductInput: UpdateProductInput,
  ) {
    // 판매 완료가 되었는지 확인해보기
    await this.productService.checkSoldout({ productId });

    // 수정하기
    return await this.productService.update({ productId, updateProductInput });
  }

  @Mutation(() => Boolean)
  deleteProduct(
    @Args('productId') productId: string, //
  ) {
    return this.productService.delete({ productId });
  }
}
