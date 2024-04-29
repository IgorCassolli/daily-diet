import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

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
    border-radius: 50%;
`
export const CardResult = styled.View`

`
export const CardResultLabelIcon = styled.Icon`

`
export const CardResultTotalPercent = styled.Text`
`
export const CardResultLabel = styled.Text`
`
export const TextLabel = styled.Text`

`