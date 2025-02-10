import {
    Container,
    Title,
    Text,
    TextBold,
    Image
} from './styles';

import Button from "../../components/Button";

import OutDietImage from '../../assets/outdiet.png';
import { useNavigation } from '@react-navigation/native';

export function OutDiet() {

    const navigator = useNavigation();

    return (
        <Container>
            <Title>Que pena!</Title>
            <Text>Você <TextBold>saiu da dieta</TextBold> dessa vez, mas continue{'\n'} se esforçando e não desista!</Text>
            <Image source={OutDietImage}></Image>
            <Button
                onPress={() => navigator.navigate('home')}
                title='Ir para a página inicial'
                style={{ width: 192 }}
            />
        </Container>
    )
}