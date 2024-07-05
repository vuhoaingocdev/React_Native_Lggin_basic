import React, {useState, useEffect} from 'react';
import {View, Image, Text, SafeAreaView, TouchableOpacity} from 'react-native';

/////////////////Home
function home({route, navigation}) {
  const [count, setCount] = useState(1);
  const [data, setData] = useState({data: null});

  const DemSo = () => {
    setCount(count + 1);
  };

  //Lắng nghe sự kiện khi bắt đầu vào một màn hình nào đó
  useEffect(() => {
    console.log('Mois vao man hinh');
    return () => {
      console.log('Thoat khoi man hinh');
    };
  }, []);
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
              navigation.goBack();
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

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('setting');
            }}>
            <Image
              style={{width: 35, height: 35, marginLeft: 240}}
              source={require('../images/settings.png')}
            />
          </TouchableOpacity>
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
          Home screen
        </Text>
        <Text
          style={{
            fontSize: 30,
            marginTop: 20,
            color: 'black',
            fontWeight: 'bold',
          }}>
          {count}
        </Text>
        <TouchableOpacity
          onPress={DemSo}
          style={{
            width: '40%',
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20,
            marginTop: 30,
            backgroundColor: 'blue',
          }}>
          <Text
            style={{
              fontSize: 25,
              color: 'white',
              fontWeight: 'bold',
            }}>
            Đếm số
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
export default home;
