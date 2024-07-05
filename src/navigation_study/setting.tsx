import React from 'react';
import {View, Image, Text, SafeAreaView, TouchableOpacity} from 'react-native';

function setting(navigation) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          height: '10%',
          width: '100%',
          justifyContent: 'center',
        }}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('home');
            }}>
            <Image
              style={{width: 35, height: 35, marginLeft: 10}}
              source={require('../images/back.png')}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              color: 'black',
              marginLeft: 20,
            }}>
            Back
          </Text>
        </View>
      </View>

      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: 300,
        }}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: 'black',
            marginLeft: 20,
          }}>
          Setting
        </Text>

        <TouchableOpacity
          onPress={() => {
            navigation.popToTop();
          }}
          style={{
            borderWidth: 1,
            marginTop: 30,
            width: 130,
            borderRadius: 20,
            backgroundColor: 'blue',
          }}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              color: 'black',
              textAlign: 'center',
              padding: 10,
            }}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
export default setting;
