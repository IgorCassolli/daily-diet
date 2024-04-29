import React from "react";
import {
    Container,
    Header,
    Logo,
    UserPhoto,
    CardResult,
    TextLabel,
    CardResultLabelIcon,
    CardResultTotalPercent,
    CardResultLabel
} from "./styles";
import LogoImg from "../../assets/logo.png";

export default function Home() {
    return (
        <Container>
            <Header>
                <Logo source={LogoImg} />
                <UserPhoto
                    source={{ uri: "https://avatars.githubusercontent.com/u/37945750?v=4" }}
                />
            </Header>
            <CardResult>
                <CardResultLabelIcon></CardResultLabelIcon>
                <CardResultTotalPercent></CardResultTotalPercent>
                <CardResultLabel></CardResultLabel>
            </CardResult>
            <TextLabel></TextLabel>
        </Container>
    )
}