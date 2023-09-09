import { Model, Table, Column, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { ShoppingList } from './ShoppingList.Model';
import { Product } from './Product.Model';

@Table({
  tableName: 'ShoppingListItem',
})
export class ShoppingListItem extends Model<ShoppingListItem> {
  public static ITEM_ID = 'item_id' as string;
  public static SHOPPING_LIST_ID = 'shopping_list_id' as string;
  public static PRODUCT_ID = 'product_id' as string;
  public static QUANTITY = 'quantity' as string;

  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: ShoppingListItem.ITEM_ID,
  })
  item_id!: number;

  @ForeignKey(() => ShoppingList)
  @Column({
    type: DataType.INTEGER,
    field: ShoppingListItem.SHOPPING_LIST_ID,
  })
  shopping_list_id!: number;

  @ForeignKey(() => Product)
  @Column({
    type: DataType.INTEGER,
    field: ShoppingListItem.PRODUCT_ID,
  })
  product_id!: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    field: ShoppingListItem.QUANTITY,
  })
  quantity!: number;

  @BelongsTo(() => ShoppingList)
  shoppingList!: ShoppingList;

  @BelongsTo(() => Product)
  product!: Product;
}
