import { TextInput, TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';
import {
    ContainerBox,
    Label,
    Container
} from './styles';

type Props = TextInputProps & {
    label: string;
    height?: string;
    inputRef?: React.RefObject<TextInput>;
}

export default function Input({ label, height = "48px", inputRef, ...rest }: Props) {
    const { COLORS } = useTheme();
    return (
        <ContainerBox>
            <Label>
                {label}
            </Label>
            <Container
                {...rest}
                height={height}
                placeholderTextColor={COLORS.GRAY_5}
            >

            </Container>
        </ContainerBox>

    )
}