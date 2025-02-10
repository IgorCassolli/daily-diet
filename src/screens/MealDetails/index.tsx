import { useNavigation, useRoute } from '@react-navigation/native';
import { MealDTO } from '../../dtos/MealDTO';
import {
    Container,
    MealDetailsView,
    MealName,
    MealDescription,
    LabelDate,
    MealDate,
    StatusWrapper,
    Status,
    StatusText,
    Buttons
} from './styles';
import Header from '../../components/Header';
import Button from '../../components/Button';

type RouteParams = {
    meal: MealDTO;
}

export function MealDetails() {

    const navigator = useNavigation();
    const route = useRoute();
    const { meal } = route.params as RouteParams;

    function handleEditMeal() {
        navigator.navigate('new', { meal });
    }

    function handleDeleteMeal() {

    }

    return (
        <Container onDiet={meal.onDiet}>
            <Header title='Refeição' />
            <MealDetailsView>
                <MealName>{meal.name}</MealName>
                <MealDescription>{meal.description}</MealDescription>
                <LabelDate>Data e hora</LabelDate>
                <MealDate>{meal.date} às {meal.hour}</MealDate>
                <StatusWrapper>
                    <Status onDiet={meal.onDiet}></Status>
                    <StatusText>{meal.onDiet === 'yes' ? 'dentro da dieta' : 'fora da dieta'}</StatusText>
                </StatusWrapper>

                <Buttons>
                    <Button title='Editar Refeição' icon='edit' type='ACTIVE' onPress={handleEditMeal} />
                    <Button title='Excluir Refeição' icon='delete' onPress={handleDeleteMeal} />
                </Buttons>
            </MealDetailsView>

        </Container>
    )
}