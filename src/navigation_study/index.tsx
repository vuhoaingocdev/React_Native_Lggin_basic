import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {View, Text, Image} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import home from './home';
import login_navigation from './login';
import setting from './setting';
import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
{
  /**khai báo biến để tạo ngắn xếp chứa các màn hình */
}
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="home"
        component={home}
        options={{
          tabBarIcon: () => (
            <Image
              style={{width: 30, height: 30}}
              source={require('../images/home.png')}
              resizeMode={'stretch'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="setting"
        component={setting}
        options={{
          tabBarIcon: () => (
            <Image
              style={{height: 30, width: 30}}
              source={require('../images/settings.png')}
              resizeMode="stretch"
            />
          ),
        }}
      />
      {/* <Tab.Screen name="home" component={home} />
      <Tab.Screen name="setting" component={setting} /> */}
    </Tab.Navigator>
  );
}

export default function rootcomponents() {
  return (
    <NavigationContainer>
      {/**Khai báo ngăn xếp chứa các màn hình */}
      <Stack.Navigator
        initialRouteName="login"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="login" component={login_navigation} />
        {/* <Stack.Screen name="home" component={home} />
        <Stack.Screen name="setting" component={setting} /> */}
        <Stack.Screen name="hometab" component={MyTabs} />
      </Stack.Navigator>

      {/* <Drawer.Navigator
        initialRouteName="login"
        screenOptions={{headerShown: false}}>
        <Drawer.Screen name="login" component={login_navigation} />
        <Drawer.Screen name="home" component={home} />
        <Drawer.Screen name="setting" component={setting} />
      </Drawer.Navigator> */}
    </NavigationContainer>
  );
}
