import { ActivityIndicator } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { Routes } from './src/routes';

import theme from './src/theme/theme';

import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold
} from '@expo-google-fonts/nunito';



export default function App() {

  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Routes /> : <ActivityIndicator style={{ flex: 1 }} />}
    </ThemeProvider>
  )

}
