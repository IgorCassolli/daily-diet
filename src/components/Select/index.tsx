import {
    ContainerBox,
    Container,
    Label,
    Button,
    Status,
    ButtonText
} from './styles';

type Props = {
    label: string;
    bg: 'green' | 'red';
    isSelected: boolean;
}

export default function Select({ label, bg, isSelected }: Props) {
    return (
        <ContainerBox>
            <Label>
                {label}
            </Label>
            <Container>
                <Button>
                    <Status bg={bg} isSelected={isSelected} />
                    <ButtonText>Sim</ButtonText>
                </Button>
            </Container>
        </ContainerBox>

    )
}