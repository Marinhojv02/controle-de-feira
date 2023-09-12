import { Model, Table, Column, DataType, ForeignKey } from 'sequelize-typescript';
import { User } from './Users.Model';
import { House } from './House.Model';

@Table({
  tableName: 'UserHouse',
})
export class UserHouse extends Model {
  public static USER_ID = 'user_id' as string;
  public static HOUSE_ID = 'house_id' as string;

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
}