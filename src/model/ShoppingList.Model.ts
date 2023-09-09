import { Model, Table, Column, DataType, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { User } from './Users.Model';
import { ShoppingListItem } from './ShoppingListItem.Model';

@Table({
  tableName: 'ShoppingList',
})
export class ShoppingList extends Model {
  public static SHOPPING_LIST_ID = 'shopping_list_id' as string;
  public static USER_ID = 'user_id' as string;
  public static CREATION_DATE = 'creation_date' as string;
  public static IS_CUSTOM = 'is_custom' as string;

  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: ShoppingList.SHOPPING_LIST_ID,
  })
  shopping_list_id!: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    field: ShoppingList.USER_ID,
  })
  user_id!: number;

  @Column({
    type: DataType.DATE,
    allowNull: false,
    field: ShoppingList.CREATION_DATE,
  })
  creation_date!: Date;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    field: ShoppingList.IS_CUSTOM,
  })
  is_custom!: boolean;

  @BelongsTo(() => User)
  user!: User;

  @HasMany(() => ShoppingListItem)
  items!: ShoppingListItem[];
}
