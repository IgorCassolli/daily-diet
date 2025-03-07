import styled, { css } from "styled-components/native"; 
import { ArrowLeft } from 'phosphor-react-native';

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
`
export const ReturnButton = styled.TouchableOpacity`
    position: absolute;
    left: 24px;
    z-index: 88; 
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