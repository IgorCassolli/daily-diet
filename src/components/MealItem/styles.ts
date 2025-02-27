import styled from "styled-components/native";

type Props = {
    onDiet: 'yes' | 'no';
}

export const Container = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    width: 100%;
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};
    padding: 14px 16px 14px 12px;
`

export const Divider = styled.View`
    border: 0.5px solid ${({ theme }) => theme.COLORS.GRAY_4};
    background-color: ${({ theme }) => theme.COLORS.GRAY_4};
    height: 12px;
    content: '';
`

export const MealHours = styled.Text`
    color: ${({ theme }) => theme.COLORS.GRAY_1};
    font-size: ${({ theme }) => theme.FONT_SIZE.XS};
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`

export const MealName = styled.Text`
    flex: 1;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    color: ${({ theme }) => theme.COLORS.GRAY_2};
    font-size: ${({ theme }) => theme.FONT_SIZE.MD};
`

export const Status = styled.View<Props>`
    width: 14px;
    height: 14px;
    border-radius: 14px;
    opacity: 0.5;
    background-color: ${({theme, onDiet}) => onDiet === 'yes' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`