// import "react-native-gesture-handler";
// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';

// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import { Text, View } from 'react-native';


// // Tipagem para as rotas
// type RootStackParamList = {
//   Home: undefined;
//   ConferenceEntry: undefined;
//   ConferenceExit: undefined;
//   Separation: undefined;
//   StockMovement: undefined;
//   LabelSplit: undefined;
//   Return: undefined;
//   Details: { screen: string };
// };

// type DrawerParamList = {
//   Main: undefined;
//   ChangeUser: undefined;
//   SelectCompany: undefined;
//   ChangeWebservice: undefined;
// };

// type TabParamList = {
//   TabScreen1: undefined;
//   TabScreen2: undefined;
// };

// // Componentes de exemplo
// const ConferenceEntryScreen = () => <View><Text>Conferência de Entrada</Text></View>;
// const ConferenceExitScreen = () => <View><Text>Conferência de Saída</Text></View>;
// const SeparationScreen = () => <View><Text>Separação</Text></View>;
// const StockMovementScreen = () => <View><Text>Movimentação de Estoque</Text></View>;
// const LabelSplitScreen = () => <View><Text>Desmembramento de Etiquetas</Text></View>;
// const ReturnScreen = () => <View><Text>Devolução</Text></View>;
// const ChangeUserScreen = () => <View><Text>Troca de Usuário</Text></View>;
// const SelectCompanyScreen = () => <View><Text>Seleção de Empresa</Text></View>;
// const ChangeWebserviceScreen = () => <View><Text>Alteração de Webservice</Text></View>;
// const TabScreen1 = () => <View><Text>Tab 1</Text></View>;
// const TabScreen2 = () => <View><Text>Tab 2</Text></View>;

// // Configuração dos Navigators
// const Stack = createStackNavigator<RootStackParamList>();
// const Drawer = createDrawerNavigator<DrawerParamList>();
// const Tab = createBottomTabNavigator<TabParamList>();

// // Bottom Tabs Navigator para telas específicas
// const TabNavigator = () => {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="TabScreen1" component={TabScreen1} />
//       <Tab.Screen name="TabScreen2" component={TabScreen2} />
//     </Tab.Navigator>
//   );
// };

// // Stack Navigator para as telas principais
// const MainStackNavigator = () => {
//   return (
//     <Stack.Navigator initialRouteName="Home">
//       <Stack.Screen 
//         name="Home" 
//         component={HomeScreen} 
//         options={{ headerTitle: 'Menu Principal' }}
//       />
//       <Stack.Screen 
//         name="ConferenceEntry" 
//         component={ConferenceEntryScreen} 
//         options={{ headerTitle: 'Conferência de Entrada' }}
//       />
//       <Stack.Screen 
//         name="ConferenceExit" 
//         component={ConferenceExitScreen} 
//         options={{ headerTitle: 'Conferência de Saída' }}
//       />
//       <Stack.Screen 
//         name="Separation" 
//         component={TabNavigator} // Usando Bottom Tabs em Separação
//         options={{ headerTitle: 'Separação' }}
//       />
//       <Stack.Screen 
//         name="StockMovement" 
//         component={StockMovementScreen} 
//         options={{ headerTitle: 'Movimentação de Estoque' }}
//       />
//       <Stack.Screen 
//         name="LabelSplit" 
//         component={TabNavigator} // Usando Bottom Tabs em Desmembramento
//         options={{ headerTitle: 'Desmembramento de Etiquetas' }}
//       />
//       <Stack.Screen 
//         name="Return" 
//         component={ReturnScreen} 
//         options={{ headerTitle: 'Devolução' }}
//       />
//     </Stack.Navigator>
//   );
// };

// // Home Screen com botões
// const HomeScreen = ({ navigation }: { navigation: any }) => {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text onPress={() => navigation.navigate('ConferenceEntry')}>
//         Conferência de Entrada
//       </Text>
//       <Text onPress={() => navigation.navigate('ConferenceExit')}>
//         Conferência de Saída
//       </Text>
//       <Text onPress={() => navigation.navigate('Separation')}>
//         Separação
//       </Text>
//       <Text onPress={() => navigation.navigate('StockMovement')}>
//         Movimentação de Estoque
//       </Text>
//       <Text onPress={() => navigation.navigate('LabelSplit')}>
//         Desmembramento de Etiquetas
//       </Text>
//       <Text onPress={() => navigation.navigate('Return')}>
//         Devolução
//       </Text>
//     </View>
//   );
// };

// // Drawer Navigator principal
// const DrawerNavigator = () => {
//   return (
//     <Drawer.Navigator initialRouteName="Main">
//       <Drawer.Screen 
//         name="Main" 
//         component={MainStackNavigator} 
//         options={{ drawerLabel: 'Menu Principal' }}
//       />
//       <Drawer.Screen 
//         name="ChangeUser" 
//         component={ChangeUserScreen} 
//         options={{ drawerLabel: 'Troca de Usuário' }}
//       />
//       <Drawer.Screen 
//         name="SelectCompany" 
//         component={SelectCompanyScreen} 
//         options={{ drawerLabel: 'Seleção de Empresa' }}
//       />
//       <Drawer.Screen 
//         name="ChangeWebservice" 
//         component={ChangeWebserviceScreen} 
//         options={{ drawerLabel: 'Alteração de Webservice' }}
//       />
//     </Drawer.Navigator>
//   );
// };

// // Componente principal
// export default function App() {
//   return (
//     <NavigationContainer>
//       <DrawerNavigator />
//     </NavigationContainer>
//   );
// }