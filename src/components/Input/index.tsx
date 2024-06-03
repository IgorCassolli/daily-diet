import {
    ContainerBox,
    Label,
    Container
} from './styles';

type Props = {
    label: string
}

export default function Input({ label }: Props) {
    return (
        <ContainerBox>
            <Label>
                {label}
            </Label>
            <Container>

            </Container>
        </ContainerBox>

    )
}