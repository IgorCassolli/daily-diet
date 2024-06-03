import {
    Container,
    Form,
    FormRow,
    InputContainer
} from './styles';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Select from '../../components/Select';

export default function NewMeat() {
    return (
        <Container>
            <Header
                title="Nova refeição"
            />
            <Form>
                <Input
                    label='Nome'
                />
                <Input
                    label='Descrição'
                />
                <FormRow>
                    <InputContainer>
                        <Input
                            label='Data'
                        />
                    </InputContainer>
                    <InputContainer>
                        <Input
                            label='Hora'
                        />
                    </InputContainer>
                </FormRow>
                <FormRow>
                    <Select
                        label='Sim'
                        bg='green'
                        isSelected={false}
                    />
                    <Select
                        label='Não'
                        bg='red'
                        isSelected={false}
                    />

                </FormRow>
            </Form>

        </Container>

    )
}