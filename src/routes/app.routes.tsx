import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { NewMeal } from '../screens/NewMeal';
import { InDiet } from '../screens/InDiet';
import { OutDiet } from '../screens/OutDiet';
import { MealDetails } from '../screens/MealDetails';

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
                name='home'
                component={Home}
            />
            <Screen
                name='new'
                component={NewMeal}
            />
            <Screen
                name='indiet'
                component={InDiet}
            />
            <Screen
                name='outdiet'
                component={OutDiet}
            />
            <Screen
                name='details'
                component={MealDetails}
            />
        </Navigator>
    )
}
