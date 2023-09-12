import { Model, Table, Column, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'House',
})
export class House extends Model {
  public static HOUSE_ID = 'house_id' as string;
  public static HOUSE_NAME = 'house_name' as string;

  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: House.HOUSE_ID,
  })
  house_id!: number;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
    field: House.HOUSE_NAME,
  })
  house_name!: string;
}
