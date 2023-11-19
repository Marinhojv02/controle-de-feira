import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({
  tableName: User.USER_TABLE_NAME,
})
export class User extends Model {
  public static USER_TABLE_NAME = "User" as string;
  public static USER_ID = 'user_id' as string;
  public static NAME = 'name' as string;
  public static USERNAME = 'username' as string;
  public static PASSWORD = 'password' as string;
  public static EMAIL = 'email' as string;
  public static TYPE = 'type' as string;
  public static CREATED_DATE = 'created_date' as string;
  public static LAST_LOGIN_DATE = 'last_login_date' as string;

  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: User.USER_ID,
  })
  user_id!: number;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
    field: User.NAME,
  })
  name!: string;

  @Column({
    type: DataType.STRING(50),
    unique: true,
    allowNull: false,
    field: User.USERNAME,
  })
  username!: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
    field: User.PASSWORD,
  })
  password!: string;

  @Column({
    type: DataType.STRING(100),
    unique: true,
    allowNull: false,
    field: User.EMAIL,
  })
  email!: string;

  @Column({
    type: DataType.STRING(50),
    allowNull: false,
    field: User.TYPE,
  })
  type!: string;
  
  @Column({
    type: DataType.DATE,
    allowNull: false,
    field: User.CREATED_DATE,
  })
  created_date!: Date;

  @Column({
    type: DataType.DATE,
    field: User.LAST_LOGIN_DATE,
  })
  last_login_date!: Date;

}