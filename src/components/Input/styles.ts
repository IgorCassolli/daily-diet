import { TextInput } from "react-native";
import styled from "styled-components/native";


export const ContainerBox = styled.View`
    flex-direction: column;
`

export const Label = styled.Text`
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_2};
    font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR}; 
    margin-bottom: 4px;
`

export const Container = styled(TextInput)`
    width: 100%;
    min-height: 56px;
    max-height: 56px;
    padding: 14px;
    border-radius: 6px;
    margin-bottom: 8px;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_1};
    color: ${({ theme }) => theme.COLORS.GRAY_1};
    font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR}; 
`