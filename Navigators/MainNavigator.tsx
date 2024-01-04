import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from '../screens/WelcomeScreen';
import UsuarioScreen from '../screens/UsuarioScreen';
import EmpleadoScreen from '../screens/EmpleadoScreen';
import AlmacenaminetoScreen from '../screens/AlmacenaminetoScreen';
import EditarEliminarScreen from '../screens/EditarEliminarScreen';

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();


function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Usuario" component={UsuarioScreen} />
      <Tab.Screen name="Empleado" component={EmpleadoScreen}/>
      <Tab.Screen name="Almacenado" component={AlmacenaminetoScreen}/>
      <Tab.Screen name="EditarEliminar" component={EditarEliminarScreen}/>
    </Tab.Navigator>
  );
}

function MyStack() {
    return (
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name="Tabs" component={MyTabs} />
        <Stack.Screen name='Welcome' component={WelcomeScreen}/>
      </Stack.Navigator>
    );
  }


export default function TopTabNavigator(){
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}
