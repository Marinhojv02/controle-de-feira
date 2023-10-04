import { UserHouse } from "../model/UserHouse.Model";
import { UserHousesRepo } from "../repository/UserHouseRepo";

export class UserHouseUsecase {
    async create(user_id: number, house_id: number) {
        const new_user_house = new UserHouse();
        new_user_house.user_id = user_id;
        new_user_house.house_id = house_id;

        await new UserHousesRepo().save(new_user_house);
    }
    async createBulk(users_info:[user_id: number, house_id: number]) {
        const users_houses = users_info.map((user_id: number, house_id: number ) => {
            const new_user_house = new UserHouse();
            new_user_house.user_id = user_id;
            new_user_house.house_id = house_id;
          
            return new_user_house;
        });

        await new UserHousesRepo().saveBulk(users_houses);
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
        return await new UserHousesRepo().retrieveByHouseId(id);
    }
    async findByHouseId(id: number) {
        return await new UserHousesRepo().retrieveByUserId(id);
    }
    async findAll() {
        return await new UserHousesRepo().retrieveAll()
    }
}