import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import Navigation from './src/Navigation/Navigation';
import { store } from './src/Redux/Index';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </Provider>
  );
}
