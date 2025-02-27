import { TextInputProps } from 'react-native';
import {
    Container,
    MealHours,
    Divider,
    MealName,
    Status
} from './styles';
import { MealDTO } from '../../dtos/MealDTO';

type Props = {
    meal: MealDTO;
}


export default function MealItem({ meal }: Props) {
    return (
        <Container>
            <MealHours>{meal.hour}</MealHours>
            <Divider></Divider>
            <MealName>{meal.name}</MealName>
            <Status onDiet={meal.onDiet}></Status>
        </Container>
    )

}