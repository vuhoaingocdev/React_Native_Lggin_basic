import React, {Component, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  TextInput,
  Image,
} from 'react-native';

const windownWidth = Dimensions.get('window').width;
const windownHeight = Dimensions.get('window').height;
const login_navigation = ({navigation}) => {
  const [getPasswordVisible, setPasswordVisible] = useState(false);
  const [getEmail, setEmail] = useState('');

  return (
    <ImageBackground
      source={require('../images/background.png')}
      resizeMode="cover"
      style={{height: '100%', width: '100%'}}>
      <SafeAreaView style={{flex: 1}}>
        <View
          style={{
            width: '100%',
            height: '20%',
            marginTop: 0.3 * windownHeight,
            alignItems: 'center',
          }}>
          {/**Email */}
          <View
            style={{
              width: '75%',
              height: 45,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>Email</Text>
            <TextInput
              style={{
                height: 40,
                width: '70%',
                borderWidth: 1,
                borderColor: 'white',
                fontSize: 16,
                padding: 10,
                textAlign: 'right',
                color: 'white',
              }}
              value={getEmail}
              onChangeText={setEmail}
              autoCapitalize="none"
            />
          </View>

          {/**Password */}
          <View
            style={{
              width: '75%',
              height: 45,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>Password</Text>
            <TextInput
              style={{
                height: 40,
                width: '70%',
                borderWidth: 1,
                borderColor: 'white',
                fontSize: 16,
                paddingRight: 35,
                textAlign: 'right',
                color: 'white',
              }}
              secureTextEntry={getPasswordVisible ? false : true}
            />
            <TouchableOpacity
              onPress={() => {
                setPasswordVisible(!getPasswordVisible);
              }}
              style={{
                height: 25,
                width: 25,
                backgroundColor: 'white',
                position: 'absolute',
                right: 0,
              }}>
              {getPasswordVisible ? (
                <Image
                  source={require('../images/eye.png')}
                  style={{
                    height: '100%',
                    width: '100%',
                    resizeMode: 'contain',
                  }}
                />
              ) : (
                <Image
                  source={require('../images/eye_visible.png')}
                  style={{
                    height: '100%',
                    width: '100%',
                    resizeMode: 'contain',
                  }}
                />
              )}
            </TouchableOpacity>
          </View>
        </View>
        {/**Button */}
        <View
          style={{
            width: '100%',
            height: '20%',
            marginTop: 0.2 * windownHeight,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('hometab');
            }}
            style={{
              width: '60%',
              height: '30%',
              borderColor: 'white',
              borderWidth: 1,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#00FFFF',
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
              Đăng nhập
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              borderRadius: 20,

              marginTop: 20,
              width: '60%',
              height: '30%',
              borderColor: 'white',
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#FF9900',
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
              Đăng kí
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default login_navigation;
