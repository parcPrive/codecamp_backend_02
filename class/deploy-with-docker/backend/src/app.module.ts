import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { BoardModule } from './apis/boards/boards.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductCategoryModule } from './apis/productsCategory/productCategory.module';
import { ProductModule } from './apis/products/product.module';
import { UserModule } from './apis/users/user.module';
import { AuthModule } from './apis/auth/auth.module';
import { PointTransactionModule } from './apis/pointTransaction/pointTransaction.module';
import { FileModule } from './apis/file/file.module';

// import { AppController } from './app.controller';
// import { AppService } from './app.service';

@Module({
  imports: [
    AuthModule,
    FileModule,
    BoardModule,
    PointTransactionModule,
    ProductModule,
    ProductCategoryModule,
    UserModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/commons/graphql/schema.gql',
      context: ({ req, res }) => ({ req, res }),
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      //host: 'my-database',
      host: '10.62.160.6',
      //host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      //database: 'homework2',
      //database: 'mydocker02',
      database: 'myserver02',
      entities: [__dirname + '/apis/**/*.entity.*'],
      synchronize: true,
      logging: true,
    }),
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
