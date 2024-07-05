import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DanhSachHinhAnh from '../banner/hinhAnh';
const Stack = createNativeStackNavigator();

export default function banner_scrollview() {
  return (
    <NavigationContainer>
      {/**Khai báo ngăn xếp chứa các màn hình */}
      <Stack.Navigator
        initialRouteName="DanhSachHinhAnh"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="DanhSachHinhAnh" component={DanhSachHinhAnh} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
