import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

type Props = {
    height: string;
}

export const ContainerBox = styled.View`
    flex-direction: column;
`

export const Label = styled.Text`
    ${({theme}) => css`
        font-size: ${theme.FONT_SIZE.SM};
        color: ${theme.COLORS.GRAY_2};
        font-family: ${theme.FONT_FAMILY.BOLD};
    `};
    margin-bottom: 4px;
`

export const Container = styled(TextInput)<Props>`
    width: 100%;
    min-height: ${({height}) => height};
    max-height: ${({height}) => height};
    padding: 14px;
    text-align-vertical: top;
    border-radius: 6px;
    margin-bottom: 12px;
    ${({theme}) => css`
        font-size: ${theme.FONT_SIZE.MD};
        border: ${theme.COLORS.GRAY_5};
        color: ${theme.COLORS.GRAY_1};
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `};
`