import React from "react";
import {
    Container,
    Header,
    Logo,
    UserPhoto,
    CardResult,
    CardResultIcon,
    CardResultTotalPercent,
    CardResultText,
    Meats,
    NewMeat,
    NewMeatTitle
} from "./styles";

import Button from "../../components/Button";
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
                <CardResultIcon />
                <CardResultTotalPercent>90,86%</CardResultTotalPercent>
                <CardResultText>das refeições dentro da dieta</CardResultText>
            </CardResult>
            <Meats>
                <NewMeat>
                    <NewMeatTitle>Refeições</NewMeatTitle>
                    <Button
                        title="Nova refeição"
                        type="DEFAULT"
                        icon="plus"
                    />
                </NewMeat>

            </Meats>
        </Container>
    )
}