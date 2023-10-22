import { Model, Table, Column, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from './Users.Model';
import { House } from './House.Model';

@Table({
  tableName: 'UserHouse',
})
export class UserHouse extends Model {
  public static USER_HOUSE_ID = 'user_house_id' as string;
  public static USER_ID = 'user_id' as string;
  public static HOUSE_ID = 'house_id' as string;

  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: UserHouse.USER_HOUSE_ID,
  })
  user_house_id!: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    field: UserHouse.USER_ID,
  })
  user_id!: number;

  @ForeignKey(() => House)
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    field: UserHouse.HOUSE_ID,
  })
  house_id!: number;

  @BelongsTo(() => House) // Define the association with House
  house!: House;

  @BelongsTo(() => User) // Define the association with User
  user!: User;
}