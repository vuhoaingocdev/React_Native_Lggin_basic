import React, {Component, useState, useEffect, useRef} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import {scrollTo} from 'react-native-reanimated';

//const {width: screenwidth} = Dimensions.get('window'); //lấy ra kích thước của màn hình
const DanhSachHinhAnh = () => {
  const [hinhAnh, setHinhAnh] = useState([]);
  const [viTriHinhAnh, setViTriHinhAnh] = useState(0);
  var wei = Dimensions.get('window').width;
  const buocNhay = useRef(null);
  //Load data từ server
  useEffect(() => {
    const data = [
      {
        image: (
          <Image
            //key={'1'}
            source={require('../images/slider/image1.png')}
            resizeMode="stretch"
            style={{width: wei, height: '100%'}}
          />
        ),
        type: 'png',
        camera: 'sony',
      },
      {
        image: (
          <Image
            //key={'2'}
            source={require('../images/slider/image2.png')}
            resizeMode="stretch"
            style={{width: wei, height: '100%'}}
          />
        ),
        type: 'png',
        camera: 'sony',
      },
      {
        image: (
          <Image
            //key={'3'}
            source={require('../images/slider/image3.png')}
            resizeMode="stretch"
            style={{width: wei, height: '100%'}}
          />
        ),
        type: 'png',
        camera: 'sony',
      },
      {
        image: (
          <Image
            //key={'4'}
            source={require('../images/slider/image4.png')}
            resizeMode="stretch"
            style={{width: wei, height: '100%'}}
          />
        ),
        type: 'png',
        camera: 'sony',
      },
      {
        image: (
          <Image
            //key={'5'}
            source={require('../images/slider/image5.png')}
            resizeMode="stretch"
            style={{width: wei, height: '100%'}}
          />
        ),
        type: 'png',
        camera: 'sony',
      },
      {
        image: (
          <Image
            //key={'6'}
            source={require('../images/slider/image6.png')}
            resizeMode="stretch"
            style={{width: wei, height: '100%'}}
          />
        ),
        type: 'png',
        camera: 'sony',
      },
      {
        image: (
          <Image
            //key={'7'}
            source={require('../images/slider/image7.png')}
            resizeMode="stretch"
            style={{width: wei, height: '100%'}}
          />
        ),
        type: 'png',
        camera: 'sony',
      },
      {
        image: (
          <Image
            //key={'8'}
            source={require('../images/slider/image8.png')}
            resizeMode="stretch"
            style={{width: wei, height: '100%'}}
          />
        ),
        type: 'png',
        camera: 'sony',
      },
      {
        image: (
          <Image
            //key={'9'}
            source={require('../images/slider/image9.png')}
            resizeMode="stretch"
            style={{width: wei, height: '100%'}}
          />
        ),
        type: 'png',
        camera: 'sony',
      },
    ];

    //2.Cập nhật trạng thái của trang
    setHinhAnh(data);
  }, []);

  //   useEffect(() => {
  //     if (hinhAnh.length > 0) {
  //       let vitri = 0;
  //       setInterval(() => {
  //         buocNhay.current.scrollTo({x: vitri * wei, y: 0, animated: true});
  //         vitri += 1;
  //         if (vitri === hinhAnh.length) {
  //           vitri = 0;
  //         }
  //       }, 3000);
  //     }
  //   }, hinhAnh);

  //Hàm bắt vị trí của ảnh hiên tại
  const handleScroll = e => {
    if (!e) {
      return;
    }
    const {nativeEvent} = e;
    if (nativeEvent && nativeEvent.contentOffset) {
      const viTriOffset = nativeEvent.contentOffset.x;
      let viTriAnh = 0;
      if (viTriOffset > 0) {
        viTriAnh = Math.floor((viTriOffset + wei / 2) / wei);
        setViTriHinhAnh(viTriAnh);
      }
    }
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text style={{fontSize: 20, color: 'black'}}> Danh sách hình ảnh</Text>

        {/**contentContainerStyle: css tổng kích thước chưa nội dung */}
        <View style={{width: wei, height: 200}}>
          <ScrollView
            horizontal
            //pagingEnabled: dừng lại một hình nhất định

            //Lướt tới hình nào thì hiện thông tin hình đó ra
            onScroll={handleScroll}
            scrollEventThrottle={16} // lúc scroll sẽ ko bị giật
            //ref={buocNhay}
            contentContainerStyle={{
              width: wei * hinhAnh.length,
              height: 200,
            }}>
            {hinhAnh.map((e, index) => (
              <View key={index.toString()}>{e.image}</View>
            ))}
          </ScrollView>
        </View>

        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginTop: 30,
            color: 'black',
          }}>
          Vi tri: {viTriHinhAnh}
        </Text>
      </View>
    </SafeAreaView>
  );
};
export default DanhSachHinhAnh;
