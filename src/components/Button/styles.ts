import styled, { css } from "styled-components/native";
import { TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';


export type ButtonTypeStyleProps = 'DEFAULT' | 'ACTIVE';
type Props = {
    type: ButtonTypeStyleProps
}

export const Container = styled(TouchableOpacity)<Props>`
    flex-direction: row;
    width: 100%;
    padding: 16px 16px;
    border-radius: 6px;
    background-color: ${({theme, type}) => type === 'ACTIVE' ? theme.COLORS.GRAY_2 : theme.COLORS.WHITE};
    border: 1px solid ${({theme, type}) => type === 'ACTIVE' ? theme.COLORS.WHITE : theme.COLORS.GRAY_2};
    justify-content: center;
    align-items: center;
    gap: 12px;
`

export const Title = styled.Text<Props>` 
    color: ${({ theme, type }) => type === 'ACTIVE' ? theme.COLORS.WHITE : theme.COLORS.GRAY_2};
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    font-size: 14px;
`;

export const Icon = styled(AntDesign).attrs<Props>(({ theme, type }) => ({
    size: 18,
    color: type === 'ACTIVE' ? theme.COLORS.WHITE : theme.COLORS.GRAY_2
}))`    

`

