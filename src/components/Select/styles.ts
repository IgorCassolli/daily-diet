import styled from "styled-components/native";

type Props = {
    label: string;
    bg: 'GREEN' | 'RED';
    isSelected: boolean;
}

export const Container = styled.View<Props>`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 12px;
    border-radius: 6px;
    background-color: ${({theme, bg, isSelected}) => isSelected ? (bg === 'RED' ? theme.COLORS.RED_LIGHT : (bg === 'GREEN' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.GRAY_6)) : theme.COLORS.GRAY_6};
    border: ${({theme, bg, isSelected}) => isSelected && (bg === 'RED' || bg === 'GREEN') ? `1px solid ${bg === 'RED' ? theme.COLORS.RED_DARK : theme.COLORS.GREEN_DARK}` : 'none'};
`
export const Label = styled.Text`
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_2};
    font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR}; 
    margin-bottom: 4px;
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
export const Status = styled.View<Props>`
    width: 8px;
    height: 8px;
    border-radius: 8px;
    background-color: ${({theme, bg}) => bg === 'GREEN' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`
