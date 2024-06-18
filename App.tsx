import { ActivityIndicator } from 'react-native';
import { ThemeProvider } from 'styled-components';

import theme from './src/theme/theme';

import Home from './src/screens/Home';

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
      {fontsLoaded ? <Home /> : <ActivityIndicator style={{ flex: 1 }} />}
    </ThemeProvider>
  )

}
