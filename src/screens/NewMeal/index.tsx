import { useState } from 'react';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Button from '../../components/Button';

import {
    Container,
    Form,
    FormRow,
    SelectLabel,
    InputContainer
} from './styles';


import { handleAddMeal } from '../../storage/configStorage';
import { MeatDTO } from '../../components/dto/MeatDTO';
import { Alert } from 'react-native';

export default function NewMeal() {

    const [newMeat, setNewMeat] = useState<MeatDTO>({} as MeatDTO);
    const [onDiet, setOnDiet] = useState(true);

    function handleAddNewMeal() {
        setNewMeat({ ...newMeat, onDiet });
        try {
            handleAddMeal(newMeat);
            if (onDiet) {

            }

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
                            isSelected={onDiet}
                            onPress={() => setOnDiet(true)}
                        />
                    </InputContainer>
                    <InputContainer>
                        <Select
                            label='Não'
                            bg='RED'
                            isSelected={!onDiet}
                            onPress={() => setOnDiet(false)}
                        />
                    </InputContainer>
                </FormRow>
                <Button
                    onPress={handleAddNewMeal}
                    title='Cadastrar refeição'
                    style={{ width: "100%", marginTop: "auto" }}
                />
            </Form>

        </Container>

    )
}