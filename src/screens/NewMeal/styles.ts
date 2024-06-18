import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
    flex: 1;
    padding-top: 42px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_5};
`
export const Form = styled.View`
    flex: 1;
    margin-top: 24px;
    padding: 24px 24px 12px 24px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
`
export const FormRow = styled.View`
    flex-direction: row;
    gap: 6px;
`
export const SelectLabel = styled.Text`
    color: ${({ theme }) => theme.COLORS.GRAY_2};
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    margin-bottom: 4px;
`;

export const InputContainer = styled.View`
    flex: 1;
`