import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({
  tableName: Note.NOTE_TABLE_NAME,
})
export class Note extends Model {
  public static NOTE_TABLE_NAME = "note" as string;
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
    field: Note.USER_ID,
  })
  id!: number;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
    field: Note.NAME,
  })
  name!: string;

  @Column({
    type: DataType.STRING(100),
    field: Note.USERNAME,
  })
  username!: string;

  @Column({
    type: DataType.STRING(255),
    field: Note.PASSWORD,
  })
  password!: string;

  @Column({
    type: DataType.STRING(255),
    field: Note.EMAIL,
  })
  email!: string;

  @Column({
    type: DataType.STRING(50),
    field: Note.TYPE,
  })
  type!: string;

  @Column({
    type: DataType.DATE,
    field: Note.CREATED_DATE,
  })
  created_date!: Date;

  @Column({
    type: DataType.DATE,
    field: Note.LAST_LOGIN_DATE,
  })
  last_login_date!: Date;
}