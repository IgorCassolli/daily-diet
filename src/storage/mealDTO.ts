
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MealDTO } from "../dtos/MealDTO";

const COLLECTION = '@daily-diet';

export async function addMeal(newMeal: MealDTO){
    try {
        const storedMeals = await getMeals();
        const mealsArray = Array.isArray(storedMeals) ? storedMeals : [];
        const storage = JSON.stringify([...mealsArray, newMeal]);
        await AsyncStorage.setItem(COLLECTION, storage);
    } catch (error) {
        throw error;
    }
}

export async function getMeals(){
    try {
        const storage = await AsyncStorage.getItem(COLLECTION);
        const meals: MealDTO[] = storage ? JSON.parse(storage) : [];
        return meals;
    } catch (error) {
        throw error;
    }  
}