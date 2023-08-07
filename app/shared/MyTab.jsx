import { Text, View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed!</Text>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

const MyTab = () => {
  return (
    <Tab.Navigator
      shifting={true} // Esta propiedad activa el efecto de cambio de color de fondo
      sceneAnimationEnabled={true} // Opcional: Desactiva la animación de cambio de escena para un cambio más rápido
      activeColor="#fff" // El color de fondo activo del TabBar
      inactiveColor="#f2f2f2" // El color de fondo inactivo del TabBar
      barStyle={{ 
        backgroundColor: '#410FA3',
        padding: 0,
        margin: 0,
      }} // Color de fondo del TabBar
      screenOptions={{ headerStyle: { backgroundColor: 'papayawhip' } }}
    >
      <Tab.Screen
        name="Lista"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Lista',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="format-list-checks" color={'#fff'} size={30} />
          ),
          tabBarBadge: 2
        }}
      />
      <Tab.Screen
        name="Agregar"
        component={Feed}
        options={{
          tabBarLabel: 'Agregar',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="plus" color={color} size={30} />
          ),
        }}
        
      />
    </Tab.Navigator>
  );
}

export default MyTab;
