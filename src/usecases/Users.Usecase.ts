import { UsersRepo } from "../repository/UsersRepo";
import { User } from "../model/Users.Model";
import bcrypt from "bcrypt";
import config from "../utils/config";
import jwt from "jsonwebtoken";

export class UserUsecases{
    async createUser(name:string, username:string, password:string, email:string, type:string){
        const new_user = new User();
        new_user.name = name;
        (new_user.username = username),
        (new_user.password = await bcrypt.hash(password, 10)),
        (new_user.email = email),
        (new_user.type = type),
        (new_user.created_date = new Date()),
        await new UsersRepo().save(new_user);
    }
    async login(username: string, password: string){
        const user = await new UsersRepo().retrieveByUsername(username);

        if (!user) {
          throw Error("Authentication failed");
        }
        
        const passwordMatch = await bcrypt.compare(password, user.password);
  
        if (!passwordMatch) {
            throw Error("Authentication failed");
        }
  
        const token = jwt.sign(
          { userId: user.user_id, userType: user.type },
          config.jwt_secret_key,
          { expiresIn: "1h" }
        );
        return token;
    }
    async delete(){

    }
    async findById(id: number){
        return await new UsersRepo().retrieveById(id);
    }

    async findByUsername(username: string){
        return await new UsersRepo().retrieveByUsername(username);
    }

    async findAll(){
        const new_user = await new UsersRepo().retrieveAll();
    }
    async update(id:number, name: string, username: string, password: string, email: string, type: string){
        const new_user = new User();
  
        new_user.id = id;
        new_user.name = name;
        (new_user.username = username),
        (new_user.password = password),
        (new_user.email = email),
        (new_user.type = type),
        await new UsersRepo().update(new_user);
    }
}