import styled, { css } from "styled-components/native"; 
import { ArrowLeft } from 'phosphor-react-native';
import { TouchableOpacity } from "react-native";

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`
export const ReturnButton = styled(TouchableOpacity)`
    height: 20px;
    width: 20px;
    position: absolute;
    left: 24px;
`;
export const ReturnIcon = styled(ArrowLeft).attrs(({ theme }) => ({
    size: 24,
    color: theme.COLORS.GRAY_1,
}))``;
export const Title = styled.Text`
    flex: 1;
    font-size: 18px;
    text-align: center;
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.LG};
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_1};
    `};
`