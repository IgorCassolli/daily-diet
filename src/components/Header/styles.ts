import styled from "styled-components/native"; 
import { ArrowLeft } from 'phosphor-react-native';

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
export const Icon = styled(ArrowLeft).attrs(({theme}) => ({
    size: 24,
    color: theme.COLORS.GRAY_2
}))`
    justify-self: start;
`
export const Title = styled.Text`
    flex: 1;
    font-size: 18px;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.GRAY_2};
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD}; 
`