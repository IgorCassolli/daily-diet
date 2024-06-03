import {
    Container,
    Icon,
    Title
} from './styles'

type Props = {
    title: string
}

export default function Header({ title }: Props) {
    return (
        <Container>
            <Icon

            />
            <Title>
                {title}
            </Title>
        </Container>
    )
}