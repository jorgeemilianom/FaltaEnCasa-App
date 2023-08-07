import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import MyTab from './app/shared/MyTab';
import { useTheme } from '@react-navigation/native'; // Importa useTheme para acceder al tema


const Stack = createNativeStackNavigator();

export default function App() {
  const theme = useTheme(); // Obtén el tema actual
  console.log(theme.colors.background);
  return (
    <NavigationContainer >
      {/* <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}  />
      </Stack.Navigator> */}
      <MyTab />
    </NavigationContainer>
  );
}


