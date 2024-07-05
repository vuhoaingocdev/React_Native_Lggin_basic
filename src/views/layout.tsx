import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

function layout() {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} backgroundColor={'gray'} />
      <View
        style={{
          width: '100%',
          height: '100%',
          borderWidth: 2,
        }}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            height: '16.6%',
            borderWidth: 1,
          }}>
          {/**ô vuông */}
          <View
            style={{
              height: '100%',
              width: '33%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: '80%',
                height: '80%',
                backgroundColor: 'red',
                borderRadius: 20,
                borderWidth: 1,
              }}></View>
          </View>
          {/**Text */}
          <View
            style={{
              height: '100%',
              width: '67%',
              borderColor: 'black',
              justifyContent: 'center',
              borderLeftWidth: 1,
            }}>
            <Text
              style={{
                color: 'black',
                marginLeft: 20,
                fontWeight: 'bold',
                fontSize: 17,
              }}>
              My name is ReactNative
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            height: '16.6%',
            borderWidth: 1,
            borderTopWidth: 0,
          }}>
          <View
            style={{
              width: '66.6%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              borderRightWidth: 1,
            }}>
            <Text style={{fontSize: 17, fontWeight: 'bold', color: 'black'}}>
              Text center
            </Text>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: 'column',
            }}>
            <View
              style={{
                height: '50%',
                backgroundColor: 'blue',
                width: '100%',
              }}></View>

            <View
              style={{
                borderTopWidth: 1,
                height: '50%',
                backgroundColor: 'green',
                width: '100%',
              }}></View>
          </View>
        </View>

        <View
          style={{
            borderTopWidth: 0,
            height: '16.6%',
            width: '100%',
            flexDirection: 'row',
            borderWidth: 1,
          }}>
          <View
            style={{
              width: '33.3%',
              backgroundColor: 'orange',
              borderRightWidth: 1,
            }}></View>

          <View
            style={{
              width: '33.3%',
              backgroundColor: '#00FFFF',
              borderRightWidth: 1,
            }}></View>

          <View
            style={{
              width: '100%',
              backgroundColor: '#7FFFD4',
              borderRightWidth: 1,
            }}></View>
        </View>

        <View
          style={{
            height: '34%',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: '60%',
              height: '60%',
              backgroundColor: '#8A2BE2',
              borderWidth: 1,
            }}>
            {/**aspectRatio: căn chiều dài và chiều rộng của một hình bằng nhau */}
            <View
              style={{
                backgroundColor: 'red',
                height: '50%',
                aspectRatio: 1,
                position: 'absolute',
                right: -20,
                top: -20,
              }}></View>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: '80%',
              height: '40%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              style={{
                width: '40%',
                height: '100%',
                borderWidth: 2,
                borderColor: '#FF4500',
                backgroundColor: '#C0C0C0',
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: 'bold',
                  color: 'black',
                }}>
                Save
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                width: '40%',
                height: '100%',
                borderWidth: 2,
                borderColor: 'black',
                backgroundColor: 'blue',
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: 'bold',
                  color: 'white',
                }}>
                Cancle
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default layout;
