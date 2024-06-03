import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
    flex: 1;
    padding-top: 42px;
    padding-right: 24px;
    padding-left: 24px;
`
export const Form = styled.View`
    margin-top: 56px;
`
export const FormRow = styled.View`
    flex-direction: row;
    gap: 6px;
`
export const InputContainer = styled.View`
    flex: 1;
`