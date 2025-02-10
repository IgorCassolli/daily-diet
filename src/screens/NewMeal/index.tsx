import { useState } from 'react';
import { Alert } from 'react-native';
import TextInputMask from 'react-native-text-input-mask';

import {
    Container,
    Form,
    FormRow,
    SelectLabel,
    InputContainer
} from './styles';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Button from '../../components/Button';

import { addMeal } from '../../storage/mealDTO';
import { MealDTO } from '../../dtos/MealDTO';
import { useNavigation } from '@react-navigation/native';


export function NewMeal() {

    const [newMeat, setNewMeat] = useState<MealDTO>({} as MealDTO);
    const [onDiet, setOnDiet] = useState('');

    const navigator = useNavigation();

    function handleAddNewMeal() {
        try {
            if (!newMeat.name || !newMeat.description || !newMeat.date || !newMeat.hour || !onDiet) {
                Alert.alert('Por favor, preencha todos os campos.');
                return;
            }

            setNewMeat({ ...newMeat, onDiet });
            addMeal(newMeat);
            if (onDiet === 'yes') {
                return navigator.navigate('indiet')
            }

            return navigator.navigate('outdiet');
        } catch (error) {
            Alert.alert(error);
        }
    }

    return (
        <Container>
            <Header
                title="Nova refeição"
            />
            <Form>
                <Input
                    label='Nome'
                    onChangeText={(value: string) => setNewMeat({ ...newMeat, name: value })}
                    placeholder='Nome da refeição'
                />
                <Input
                    label='Descrição'
                    onChangeText={(value: string) => setNewMeat({ ...newMeat, description: value })}
                    height='120px'
                    placeholder='Descrição da refeição'
                />
                <FormRow>
                    <InputContainer>
                        <Input
                            label='Data'
                            onChangeText={(value: string) => setNewMeat({ ...newMeat, date: value })}
                            placeholder='01/01/1990'
                        />
                    </InputContainer>
                    <InputContainer>
                        <Input
                            label='Hora'
                            onChangeText={(value: string) => setNewMeat({ ...newMeat, hour: value })}
                            placeholder='00:00'
                        />
                    </InputContainer>
                </FormRow>
                <SelectLabel>
                    Está dentro da dieta?
                </SelectLabel>
                <FormRow>
                    <InputContainer>
                        <Select
                            label='Sim'
                            bg='GREEN'
                            isSelected={onDiet === 'yes'}
                            onPress={() => {
                                setNewMeat({ ...newMeat, onDiet: 'yes' });
                                setOnDiet('yes');
                            }}
                        />
                    </InputContainer>
                    <InputContainer>
                        <Select
                            label='Não'
                            bg='RED'
                            isSelected={onDiet === 'no'}
                            onPress={() => {
                                setNewMeat({ ...newMeat, onDiet: 'no' });
                                setOnDiet('no');
                            }}
                        />
                    </InputContainer>
                </FormRow>
                <Button
                    onPress={handleAddNewMeal}
                    title='Cadastrar refeição'
                    type="ACTIVE"
                    style={{ width: "100%", marginTop: "auto" }}
                />
            </Form>

        </Container>

    )
}