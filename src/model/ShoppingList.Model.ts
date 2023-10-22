import { Model, Table, Column, DataType, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { House } from './House.Model';
import { ShoppingListItem } from './ShoppingListItem.Model';

@Table({
  tableName: 'ShoppingList',
})
export class ShoppingList extends Model {
  public static SHOPPING_LIST_ID = 'shopping_list_id' as string;
  public static HOUSE_ID = 'house_id' as string;
  public static CREATION_DATE = 'creation_date' as string;
  public static IS_CUSTOM = 'is_custom' as string;
  public static IS_COMPLETE = 'is_complete' as string;
  public static IS_ACTIVE = 'is_active' as string;

  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: ShoppingList.SHOPPING_LIST_ID,
  })
  shopping_list_id!: number;

  @ForeignKey(() => House)
  @Column({
    type: DataType.INTEGER,
    field: ShoppingList.HOUSE_ID,
  })
  house_id!: number;

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

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    field: ShoppingList.IS_COMPLETE,
  })
  is_complete!: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    field: ShoppingList.IS_ACTIVE,
    defaultValue:true
  })
  is_active!: boolean;

  @BelongsTo(() => House)
  house!: House;

  @HasMany(() => ShoppingListItem)
  items!: ShoppingListItem[];
}
