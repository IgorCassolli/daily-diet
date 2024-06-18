import {
    Container,
    Title,
    Text,
    TextBold,
    Image
} from './styles';

import InDietImage from '../../assets/indiet.png';

import Button from '../../components/Button';

export default function InDiet() {
    return (
        <Container>
            <Title>Continue assim!</Title>
            <Text>Você continua <TextBold>dentro da dieta</TextBold>. Muito bem!</Text>
            <Image source={InDietImage}></Image>
            <Button
                title='Ir para a página inicial'
                style={{ width: 192 }}
            />
        </Container>
    )
}