import { MealDTO } from "../dtos/MealDTO";

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            home: underfined;
            new: underfined;
            indiet: undefined,
            outdiet: undefined,
            details: {
                meal: MealDTO
            }
        }
    }
}