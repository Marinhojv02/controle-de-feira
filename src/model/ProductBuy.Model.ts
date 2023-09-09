import { Model, Table, Column, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Product } from './Product.Model';

@Table({
  tableName: 'ProductBuy',
})
export class ProductBuy extends Model<ProductBuy> {
  public static PURCHASE_ID = 'purchase_id' as string;
  public static PRODUCT_ID = 'product_id' as string;
  public static PRICE = 'price' as string;
  public static QUANTITY = 'quantity' as string;
  public static PURCHASE_DATE = 'purchase_date' as string;

  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: ProductBuy.PURCHASE_ID,
  })
  purchase_id!: number;

  @ForeignKey(() => Product)
  @Column({
    type: DataType.INTEGER,
    field: ProductBuy.PRODUCT_ID,
  })
  product_id!: number;

  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false,
    field: ProductBuy.PRICE,
  })
  price!: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    field: ProductBuy.QUANTITY,
  })
  quantity!: number;

  @Column({
    type: DataType.DATE,
    allowNull: false,
    field: ProductBuy.PURCHASE_DATE,
  })
  purchase_date!: Date;

  @BelongsTo(() => Product)
  product!: Product;
}
