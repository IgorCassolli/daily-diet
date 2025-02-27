import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowUpRight } from 'phosphor-react-native';

export const Container = styled(SafeAreaView)`
    flex: 1;
    padding-top: 64px;
    padding-right: 24px;
    padding-left: 24px;
`
export const Header = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const Logo = styled.Image`
    width: 82px;
    height: 37px;
`
export const UserPhoto = styled.Image`
    height: 40px;
    width: 40px;
    border: 2px solid ${({theme}) => theme.COLORS.GRAY_2};
    border-radius: 20px;
`
export const CardResult = styled.View`
    background-color: ${({theme}) => theme.COLORS.GREEN_LIGHT};
    margin-top: 40px;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;
    padding: 20px 16px;
`
export const CardResultInfo = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`
export const CardResultIcon = styled(ArrowUpRight).attrs(({theme}) => ({
    size: 24,
    color: theme.COLORS.GREEN_DARK
}))`
    align-self: flex-end;
`
export const CardResultTotalPercent = styled.Text`
    font-size: 32px;
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    color: ${({theme}) => theme.COLORS.GRAY_1};
`
export const CardResultText = styled.Text`
    font-size: 14px;
    margin-top: 4px;
    color: ${({theme}) => theme.COLORS.GRAY_2};
`
export const Meats = styled.View`
    flex: 1;
    flex-direction: column;
    margin-top: 32px;
`
export const NewMeat = styled.View`
    width: 100%;
    flex-direction: column;
    gap: 4px;
  
`
export const NewMeatTitle = styled.Text`
    font-size: 16px;
    font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
    color: ${({theme}) => theme.COLORS.GRAY_1};
`
export const NewMeatButton = styled.View`
    width: 100%;
    border-radius: 6px;
`
export const MealContainerList = styled.View`
    width: 100%;
    margin-top: 32px;
`
export const MealTitleList = styled.Text`
    color: ${({theme}) => theme.COLORS.GRAY_1};
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    font-size: ${({theme}) => theme.FONT_SIZE.LG};
    margin-bottom: 8px;
`

