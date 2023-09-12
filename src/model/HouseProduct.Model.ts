import { Model, Table, Column, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Product } from './Product.Model';
import { House } from './House.Model';

@Table({
  tableName: 'HouseProduct',
})
export class HouseProduct extends Model {
  public static HOUSE_PRODUCT_ID = 'house_product_id' as string;
  public static PRODUCT_ID = 'product_id' as string;
  public static HOUSE_ID = 'house_id' as string;
  public static QUANTITY_IN_STOCK= 'quantity_in_stock' as  string;
  public static REORDER_POINT = 'reorder_point' as  string;
  public static RECOMMENDED_QUANTITY = 'recommended_quantity' as  string;

  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: HouseProduct.HOUSE_PRODUCT_ID,
  })
  house_product_id!: number;

  @ForeignKey(() => Product)
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    field: HouseProduct.PRODUCT_ID,
  })
  product_id!: number;

  @ForeignKey(() => House)
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    field: HouseProduct.HOUSE_ID,
  })
  house_id!: number;

  @Column({
    type: DataType.INTEGER,
    field: HouseProduct.QUANTITY_IN_STOCK,
  })
  quantity_in_stock!: number;

  @Column({
    type: DataType.INTEGER,
    field: HouseProduct.REORDER_POINT,
  })
  reorder_point!: number;

  @Column({
    type: DataType.INTEGER,
    field: HouseProduct.RECOMMENDED_QUANTITY,
  })
  recommended_quantity!: number;

  @BelongsTo(() => Product)
  product!: HouseProduct;

  @BelongsTo(() => House)
  house!: HouseProduct;
}
