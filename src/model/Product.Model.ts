import { Model, Table, Column, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'Product',
  indexes: [
    {
      name: 'product_name_category_unique',
      unique: true,
      fields: ['product_name', 'category'],
    },
  ],
})
export class Product extends Model {
  public static PRODUCT_ID = 'product_id' as string;
  public static PRODUCT_NAME = 'product_name' as string;
  public static DESCRIPTION = 'description' as string;
  public static CATEGORY = 'category' as string;
  public static QUANTITY_IN_STOCK = 'quantity_in_stock' as string;
  public static REORDER_POINT = 'reorder_point' as string;

  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: Product.PRODUCT_ID,
  })
  product_id!: number;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
    field: Product.PRODUCT_NAME,
  })
  product_name!: string;

  @Column({
    type: DataType.TEXT,
    field: Product.DESCRIPTION,
  })
  description!: string;

  @Column({
    type: DataType.STRING(100),
    field: Product.CATEGORY,
  })
  category!: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    field: Product.QUANTITY_IN_STOCK,
  })
  quantity_in_stock!: number;

  @Column({
    type: DataType.INTEGER,
    field: Product.REORDER_POINT,
  })
  reorder_point!: number;
}
