import { Model, Table, Column, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'Product',
  indexes: [
    {
      name: 'product_name_unique',
      unique: true,
      fields: ['product_name'],
    },
  ],
})
export class Product extends Model {
  public static PRODUCT_ID = 'product_id' as string;
  public static PRODUCT_NAME = 'product_name' as string;
  public static DESCRIPTION = 'description' as string;
  public static CATEGORY = 'category' as string;

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
    allowNull: false,
    field: Product.CATEGORY,
  })
  category!: string;
}
