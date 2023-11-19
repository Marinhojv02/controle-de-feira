import { UserHouse } from "../model/UserHouse.Model";
import { House } from "../model/House.Model";
import { User } from "../model/Users.Model";

interface IUserHouses {
    save(userHouse: UserHouse): Promise<UserHouse>;
    saveBulk(userHouse: UserHouse[]): Promise<UserHouse[]>;
    delete(userHouseId: number): Promise<void>;
    deleteBulk(userHouseId: number): Promise<void>;
    retrieveByUserHouseId(user_house_id: number): Promise<UserHouse[]>;
    retrieveByUserId(userId: number): Promise<UserHouse[]>;
    retrieveByHouseId(houseId: number): Promise<UserHouse[]>;
    retrieveAll(): Promise<UserHouse[]>;
}

export class UserHousesRepo implements IUserHouses {
    async deleteBulk(userHouseId: number): Promise<void> {
        try {
            const condition_to_delete = {
                where: {
                    user_house_id: userHouseId,
                },
            };

            await UserHouse.destroy(condition_to_delete);
        } catch (err) {

        }
        throw new Error("Method not implemented.");
    }

    async save(userHouse: UserHouse): Promise<UserHouse> {
        try {
            const created_user_house = await UserHouse.create({
                user_id: userHouse.user_id,
                house_id: userHouse.house_id,
            });
            return created_user_house;
        } catch (error) {
            throw new Error("Failed to create userHouse!");
        }
    }

    async saveBulk(userHouse: UserHouse[]): Promise<UserHouse[]> {
        try {
            const userHousesData = userHouse.map((item) => ({
                user_id: item.user_id,
                house_id: item.house_id,
            }))
            return await UserHouse.bulkCreate(userHousesData)
        } catch (error) {
            console.log(error)
            throw new Error("Failed to create userHouse!");
        }
    }

    async delete(userHouseId: number): Promise<void> {
        try {
            const new_userHouse = await UserHouse.findOne({
                where: {
                    user_house_id: userHouseId,
                },
            });

            if (!new_userHouse) {
                throw new Error("UserHouse not found!");
            }

            await new_userHouse.destroy();
        } catch (error) {
            throw new Error("Failed to delete userHouse!");
        }
    }

    async retrieveByUserId(userId: number): Promise<UserHouse[]> {
        try {
            const new_userHouse = await UserHouse.findAll({
                where: {
                    user_id: userId,
                },
                include: [{
                    model: House
                }]
            });
            if (!new_userHouse) {
                return []
            }
            return new_userHouse;
        } catch (error) {
            console.log(error)
            throw new Error("Failed to retrieve userHouses!");
        }
    }

    async retrieveByUserHouseId(user_house_id: number): Promise<UserHouse[]> {
        try {
            const new_userHouse = await UserHouse.findAll({
                where: {
                    user_house_id: user_house_id,
                },
            });
            if (!new_userHouse) {
                return []
            }
            return new_userHouse;
        } catch (error) {
            throw new Error("Failed to retrieve userHouses!");
        }
    }

    async retrieveByHouseId(houseId: number): Promise<UserHouse[]> {
        try {
            const new_userHouse = await UserHouse.findAll({
                where: {
                    house_id: houseId,
                },
                include: [{
                    model: User,
                    attributes: ['name', 'username']
                }]
            });
            if (!new_userHouse) {
                return []
            }
            return new_userHouse;
        } catch (error) {
            throw new Error("Failed to retrieve userHouses!");
        }
    }

    async retrieveAll(): Promise<UserHouse[]> {
        try {
            return await UserHouse.findAll();
        } catch (error) {
            throw new Error("Failed to retrieve userHouse!");
        }
    }
}