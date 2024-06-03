import { TouchableOpacityProps } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import {
    Container,
    Title,
    Icon,
    ButtonTypeStyleProps
} from './styles';

type Props = TouchableOpacityProps & {
    title: string;
    type?: ButtonTypeStyleProps
    icon?: keyof typeof AntDesign.glyphMap;
}

export default function Button({ title, type = 'DEFAULT', icon, ...rest }: Props) {
    return (
        <Container
            type={type}
            {...rest}
        >
            <Icon name={icon} type={type} />
            <Title
                type={type}
            >{title}
            </Title>
        </Container>
    )
}