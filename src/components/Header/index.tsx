
import { useNavigation } from '@react-navigation/native';
import {
    Container,
    ReturnButton,
    ReturnIcon,
    Title
} from './styles'

type Props = {
    title: string
}

export default function Header({ title }: Props) {

    const navigator = useNavigation();

    function handleGoBack() {
        navigator.goBack();
    }

    return (
        <Container>
            <ReturnButton onPress={handleGoBack}>
                <ReturnIcon />
            </ReturnButton>
            <Title>
                {title}
            </Title>
        </Container>
    )
}