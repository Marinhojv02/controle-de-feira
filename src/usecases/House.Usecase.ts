import { House } from "../model/House.Model";
import { HousesRepo } from "../repository/HouseRepo";

class HouseUsecase {
    async create(house_name: string) {
        const new_house = new House();
        new_house.house_name = house_name

        return await new HousesRepo().save(new_house);
    }

    async findById(id:number) {
        return await new HousesRepo().retrieveById(id);
    }

    async findAll() {
        return await new HousesRepo().retrieveAll();
    }
    async update(id:number, house_name:string) {
        const new_house = new House();

        new_house.id = id;
        new_house.house_name = house_name;

        await new HousesRepo().update(new_house);
    }
}

export default new HouseUsecase()