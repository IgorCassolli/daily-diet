
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MeatDTO } from "../components/dto/MeatDTO";

export async function handleAddMeal(newMeal: MeatDTO){
    const COLLECTION = '@daily-diet';
    try {
        await AsyncStorage.setItem(COLLECTION, JSON.stringify(newMeal));
    } catch (error) {
        throw error;
    }
}