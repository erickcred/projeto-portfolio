import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { DashboardScreen } from './src/screens/DashboardScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { GithubScreen } from './src/screens/stack/GithubScreen';
import { AboutScreen } from './src/screens/AboutScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator()

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="dashboard">
      <Stack.Screen 
        name="dashboard"
        component={DashboardScreen}
        options={{ headerTitle: 'Dashboard', headerShown: true }}
      />
      <Stack.Screen 
        name="github"
        component={GithubScreen}
        options={{ headerTitle: 'Git Hub', headerShown: true }}
      />
    </Stack.Navigator>
  )
}


export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          component={StackNavigator}
          options={{ headerShown: false}}
        />

        <Drawer.Screen
          name="Sobre"
          component={AboutScreen}
          options={{ headerShown: true}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

