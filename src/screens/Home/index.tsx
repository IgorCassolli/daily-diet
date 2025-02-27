import React, { useCallback, useState } from "react";
import { useFocusEffect, useNavigation } from '@react-navigation/native';

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
    NewMeatTitle,
    MealContainerList,
    MealTitleList

} from "./styles";

import Button from "../../components/Button";
import LogoImg from "../../assets/logo.png";
import { getMeals } from "../../storage/mealDTO"
import { MealDTO } from "../../dtos/MealDTO";
import { FlatList, Pressable } from "react-native";
import MealItem from "../../components/MealItem";
import { Loading } from "../../components/Loading";

export function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const navigator = useNavigation();
    const [meals, setMeals] = useState<MealDTO[]>([]);

    async function handleGetMeals() {
        try {
            setIsLoading(true);
            const meals = await getMeals();
            setMeals(meals);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    useFocusEffect(
        useCallback(() => {
            handleGetMeals();
        }, [])
    );

    function handleGoToDetailScreen(meal: MealDTO) {
        navigator.navigate('details', { meal })
    }

    const groupedMeals = meals.reduce((acc, meal) => {
        (acc[meal.date] = acc[meal.date] || []).push(meal);
        return acc;
    }, {});

    const data = Object.entries(groupedMeals).map(([date, meals]) => ({ date, meals }));

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
                        onPress={() => navigator.navigate('new')}
                        title="Nova refeição"
                        type="ACTIVE"
                        icon="plus"
                    />
                </NewMeat>
                {
                    isLoading ? <Loading /> :
                        <FlatList
                            data={data}
                            keyExtractor={item => item.date}
                            renderItem={({ item }) => (
                                <MealContainerList>
                                    <MealTitleList>{item.date}</MealTitleList>
                                    <FlatList
                                        data={item.meals}
                                        keyExtractor={meal => meal.name}
                                        renderItem={({ item }) => (
                                            <Pressable onPress={() => handleGoToDetailScreen(item)}>
                                                <MealItem meal={item} />
                                            </Pressable>

                                        )}
                                    />
                                </MealContainerList>
                            )}
                            contentContainerStyle={data.length === 0 ? { flex: 1 } : undefined}
                        />
                }
            </Meats>
        </Container>
    )
}