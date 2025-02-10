import {
    Container,
    Title,
    Text,
    TextBold,
    Image
} from './styles';

import InDietImage from '../../assets/indiet.png';

import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';

export function InDiet() {

    const navigator = useNavigation();

    return (
        <Container>
            <Title>Continue assim!</Title>
            <Text>Você continua <TextBold>dentro da dieta</TextBold>. Muito bem!</Text>
            <Image source={InDietImage}></Image>
            <Button
                onPress={() => navigator.navigate('home')}
                title='Ir para a página inicial'
                style={{ width: 192 }}
            />
        </Container>
    )
}