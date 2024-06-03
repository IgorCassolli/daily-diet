import styled from "styled-components/native";

export const ContainerBox = styled.View`

`

export const Label = styled.Text`
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_2};
    font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR}; 
    margin-bottom: 4px;
`

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 12px;
`
export const Button = styled.TouchableOpacity`
    flex: 1;
    align-items: center;
    flex-direction: row;
    gap: 4px;
    justify-content: center;
    padding: 16px;
    border-radius: 6px;
`
export const ButtonText = styled.Text`
    color: ${({ theme }) => theme.COLORS.GRAY_1};
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD}; 
    font-size: 14px;
` 
export const Status = styled.View`
    width: 8px;
    height: 8px;
    border-radius: 8px;
    background-color: black;
`
