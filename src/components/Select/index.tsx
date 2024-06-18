import { TextInputProps } from 'react-native';
import {
    Container,
    Button,
    Status,
    ButtonText
} from './styles';

type Props = TextInputProps & {
    label: string;
    bg: 'GREEN' | 'RED';
    isSelected: boolean;
}

export default function Select({ label, bg, isSelected, ...rest }: Props) {
    return (
        <Container isSelected={isSelected} bg={bg} >
            <Button {...rest}>
                <Status bg={bg} />
                <ButtonText>{label}</ButtonText>
            </Button>
        </Container>
    )
}