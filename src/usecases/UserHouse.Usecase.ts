import { UserHouse } from "../model/UserHouse.Model";
import { UserHousesRepo } from "../repository/UserHouseRepo";
import { User } from "../model/Users.Model";
import { UsersRepo } from "../repository/UsersRepo";

class UserHouseUsecase {
    async create(user_id: number, house_id: number) {
        const new_user_house = new UserHouse();
        new_user_house.user_id = user_id;
        new_user_house.house_id = house_id;

        await new UserHousesRepo().save(new_user_house);
    }
    async createBulk(users_info:[{user_id: number, house_id: number}]) {
        const newUserHouseArray = users_info.map(item => {
            const new_user_house = new UserHouse();
            new_user_house.user_id = item.user_id;
            new_user_house.house_id = item.house_id;
            return new_user_house;
        });

        await new UserHousesRepo().saveBulk(newUserHouseArray);
    }

    async addUserToHouse(username: string, house_id: number) {
        const user:User = await new UsersRepo().retrieveByUsername(username)

        if(!user){
            console.log('not found')
            throw new Error("USER_NOT_FOUND");
        }

        const new_user_house = new UserHouse();
        new_user_house.user_id = user.user_id;
        new_user_house.house_id = house_id;

        await new UserHousesRepo().save(new_user_house);
    }

    async delete(id: number) {
        await new UserHousesRepo().delete(id);
    }
    async deleteBulk(id: number) {
        await new UserHousesRepo().delete(id);
    }
    async findById(id: number) {
        return await new UserHousesRepo().retrieveByUserHouseId(id);
    }
    async findByUserId(id: number) {
        return await new UserHousesRepo().retrieveByUserId(id);
    }
    async findByHouseId(id: number) {
        return await new UserHousesRepo().retrieveByUserId(id);
    }
    async findAll() {
        return await new UserHousesRepo().retrieveAll()
    }
}

export default new UserHouseUsecase()