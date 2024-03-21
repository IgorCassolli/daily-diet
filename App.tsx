import { ActivityIndicator } from 'react-native';
import { ThemeProvider } from 'styled-components';

import Home from './src/screens/Home';

import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold
} from '@expo-google-fonts/nunito';

import theme from './src/theme/theme';

export default function App() {

  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Home /> : <ActivityIndicator />}
    </ThemeProvider>
  )

}
