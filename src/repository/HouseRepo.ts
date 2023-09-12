import { Op, Sequelize } from "sequelize";
import { House } from "../model/House.Model";

interface IHouses {
    save(house: House): Promise<House>;
    update(house: House): Promise<void>;
    delete(houseId: number): Promise<void>;
    retrieveById(houseId: number): Promise<House>;
    retrieveAll(): Promise<House[]>;
}

export class HousesRepo implements IHouses {
    
    async save(house: House): Promise<House> {
      try {
          const created_house = await House.create({
            house_name: house.house_name,
          });

          return created_house
      } catch (error) {
            throw new Error("Failed to create house!");
      }
    }

    async update(house: House): Promise<void> {
      try {
        const new_house = await House.findOne({
          where: {
              house_id: house.id,
          },
        });
        if (!new_house) {
          throw new Error("House not found!");
        }
        
        new_house.house_name = house.house_name

        await new_house.save();
      } catch (error) {
          console.log(error)
        throw new Error("Failed to update house!");
      }
    }
    
    async delete(houseId: number): Promise<void> {
      try {
        const new_house = await House.findOne({
          where: {
              house_id: houseId,
          },
        });
        if (!new_house) {
          throw new Error("House not found!");
        }
  
        await new_house.destroy();
      } catch (error) {
        throw new Error("Failed to delete house!");
      }
    }
    
    async retrieveById(houseId: number): Promise<House> {
      try {
        const new_house = await House.findOne({
          where: {
              house_id: houseId,
          },
        });
        if (!new_house) {
          throw new Error("Houses not found!");
        }
        return new_house;
      } catch (error) {
        throw new Error("Failed to retrieve houses!");
      }
    }

    async retrieveAll(): Promise<House[]> {
      try {
        return await House.findAll();
      } catch (error) {
        throw new Error("Failed to retrieve house!");
      }
    }    
}