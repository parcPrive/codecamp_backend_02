import { ProductMainCategory } from 'src/apis/productsMainCategory/entities/productMainCategory.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProductSubCategory {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  subcategory: string;

  @ManyToOne(() => ProductMainCategory)
  productMainCategory: ProductMainCategory;
}
