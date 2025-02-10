import { SafeAreaView } from 'react-native-safe-area-context';
import { css } from 'styled-components';
import styled from 'styled-components/native';

type Props = {
    onDiet: 'yes' | 'no';
}

export const Container = styled(SafeAreaView)<Props>`
    flex: 1;
    padding-top: 42px;
    background-color: ${({theme, onDiet}) => onDiet === 'yes' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`
export const MealDetailsView = styled.View`
    flex: 1;
    flex-direction: column;
    margin-top: 24px;
    padding: 24px;
    background-color: ${({theme}) => theme.COLORS.WHITE};
`
export const MealName = styled.Text`
    ${({theme}) => css`
        font-size: ${theme.FONT_SIZE.LG};
        color: ${theme.COLORS.GRAY_1};
        font-family: ${theme.FONT_FAMILY.BOLD};
    `};
    margin-bottom: 8px;
`
export const MealDescription = styled.Text`
    ${({theme}) => css`
        font-size: ${theme.FONT_SIZE.MD};
        color: ${theme.COLORS.GRAY_2};
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `};
    margin-bottom: 24px;
`
export const LabelDate = styled.Text`
    ${({theme}) => css`
        font-size: ${theme.FONT_SIZE.XS};
        color: ${theme.COLORS.GRAY_1};
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `};
`
export const MealDate = styled.Text`
    ${({theme}) => css`
        font-size: ${theme.FONT_SIZE.MD};
        color: ${theme.COLORS.GRAY_2};
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `};
    margin-bottom: 24px;
`
export const MealOnDiet = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px 16px;
    gap: 8px;
    background-color: ${({theme}) => theme.COLORS.GRAY_6};
`
export const StatusWrapper = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 8px;
    background-color: ${({theme}) => theme.COLORS.GRAY_6};
    border-radius: 8px;
    padding: 8px 16px;
    align-self: flex-start;
`
export const Status = styled.Text<Props>`
    width: 14px;
    height: 14px;
    border-radius: 14px;
    opacity: 0.5;
    background-color: ${({theme, onDiet}) => onDiet === 'yes' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`
export const StatusText = styled.Text<Props>`
    ${({theme}) => css`
        font-size: ${theme.FONT_SIZE.SM};
        color: ${theme.COLORS.GRAY_1};
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `};
`
export const Buttons = styled.View`
    margin-top: auto;
    flex-direction: column;
    gap: 8px;
`