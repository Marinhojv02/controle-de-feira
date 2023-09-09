import { User } from "../model/Users.Model";

interface IUsers {
    save(user: User): Promise<void>;
    update(user: User): Promise<void>;
    delete(userId: number): Promise<void>;
    retrieveById(userId: number): Promise<User>;
    retrieveAll(): Promise<User[]>;
}

export class UsersRepo implements IUsers {
    async save(user: User): Promise<void> {
        try {
            await User.create({
                name: user.name,
                username: user.username,
                password: user.password,
                email: user.email,
                type: user.type,
                created_date: user.created_date,
                last_login_date: user.last_login_date,
            });
        } catch (error) {
             throw new Error("Failed to create user!");
        }
    }
    async update(user: User): Promise<void> {
        try {
          const new_user = await User.findOne({
            where: {
                user_id: user.id,
            },
          });
          if (!new_user) {
            throw new Error("User not found!");
          }
          new_user.name = user.name;
          new_user.username = user.password,
          new_user.email = user.email,
          new_user.type = user.type,

          await new_user.save();
        } catch (error) {
            console.log(error)
          throw new Error("Failed to update user!");
        }
      }
      async delete(userId: number): Promise<void> {
        try {
          const new_user = await User.findOne({
            where: {
                user_id: userId,
            },
          });
          if (!new_user) {
            throw new Error("User not found!");
          }
    
          await new_user.destroy();
        } catch (error) {
          throw new Error("Failed to delete user!");
        }
      }
      async retrieveById(userId: number): Promise<User> {
        try {
          const new_user = await User.findOne({
            where: {
                user_id: userId,
            },
          });
          if (!new_user) {
            throw new Error("Users not found!");
          }
          return new_user;
        } catch (error) {
          throw new Error("Failed to retrieve users!");
        }
      }
      async retrieveAll(): Promise<User[]> {
        try {
         return await User.findAll();
        } catch (error) {
          throw new Error("Failed to retrieve user!");
        }
      }
}