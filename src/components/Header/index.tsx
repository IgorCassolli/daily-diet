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
    return (
        <Container>
            <ReturnButton>
                <ReturnIcon />
            </ReturnButton>

            <Title>
                {title}
            </Title>
        </Container>
    )
}