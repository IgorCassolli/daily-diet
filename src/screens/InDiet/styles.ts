import styled, { css } from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`
export const Title = styled.Text`
    ${({theme}) => css`
        font-size: ${theme.FONT_SIZE.XL};
        color: ${theme.COLORS.GREEN_DARK};
        font-family: ${theme.FONT_FAMILY.BOLD};
    `};
    margin-bottom: 8px;
`
export const Text = styled.Text`
    ${({theme}) => css`
        font-size: ${theme.FONT_SIZE.MD};
        color: ${theme.COLORS.GRAY_1};
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `};
    margin-bottom: 18px;
`
export const Image = styled.Image`
    margin: 18px 0 18px 0;
`
export const TextBold = styled.Text`
     ${({theme}) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
    `};
`