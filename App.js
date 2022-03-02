import React from 'react';
import {Button, Text, TouchableOpacity, TextInput, Image} from 'react-native';
import {useState} from 'react';
import {View} from 'react-native';

import CheckBox from '@react-native-community/checkbox';

function MyCheckBox() {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <CheckBox
      disabled={false}
      value={toggleCheckBox}
      onValueChange={newValue => setToggleCheckBox(newValue)}
    />
  );
}

function Malik() {
  return (
    <>
      <View
        style={{
          paddingHorizontal: 20,
          width: '100%',
          height: '15%',
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View
          style={{fontWeight: 'bold', fontSize: 20, justifyContent: 'center'}}>
          <Image source={require('./assets/images/image.png')} />
        </View>
        <Text style={{fontWeight: '600', fontSize: 30, color: '#000000'}}>
          Sign Up
        </Text>
        <TouchableOpacity style={{width: '15%'}}>
          <Text style={{fontSize: 16, fontWeight: '500', color: '#5DB075'}}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{paddingHorizontal: 20, width: '100%', height: 60}}>
        <TextInput
          style={{
            paddingHorizontal: 16,
            width: '100%',
            height: 50,
            borderRadius: 10,
            color: 'white',
            fontSize: 16,
            backgroundColor: '#F6F6F6',
          }}
          placeholder="Name"
          placeholderTextColor={'#BDBDBD'}
        />
      </View>
      <View style={{paddingHorizontal: 20, width: '100%', height: 60}}>
        <TextInput
          style={{
            paddingHorizontal: 16,
            width: '100%',
            height: 50,
            borderRadius: 10,
            color: 'white',
            fontSize: 16,
            backgroundColor: '#F6F6F6',
          }}
          placeholder="Email"
          placeholderTextColor={'#BDBDBD'}
        />
      </View>
      <View style={{paddingHorizontal: 20, width: '100%', height: 60}}>
        <TextInput
          style={{
            paddingHorizontal: 16,
            width: '100%',
            height: 50,
            borderRadius: 10,
            color: 'white',
            fontSize: 16,
            backgroundColor: '#F6F6F6',
          }}
          placeholder="Password"
          placeholderTextColor={'#BDBDBD'}
        />
      </View>
      <MyCheckBox />

      {/* <View
        style={{
          width: '100%',
          height: '33.3%',
          backgroundColor: 'white',
          justifyContent: 'space-between',
        }}>
        <View
          style={{width: '20%', height: '20%', backgroundColor: 'red'}}></View>
        <View
          style={{
            width: '20%',
            height: '20%',
            backgroundColor: 'green',
            alignSelf: 'center',
          }}></View>
        <View
          style={{
            width: '20%',
            height: '20%',
            backgroundColor: 'black',
            alignSelf: 'flex-end',
          }}></View>
      </View>
      <View
        style={{
          width: '100%',
          height: '33.3%',
          backgroundColor: 'white',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            width: '20%',
            height: '20%',
            backgroundColor: 'red',
            alignSelf: 'flex-end',
          }}></View>
        <View
          style={{
            width: '20%',
            height: '20%',
            backgroundColor: 'green',
            alignSelf: 'center',
          }}></View>
        <View
          style={{
            width: '20%',
            height: '20%',
            backgroundColor: 'black',
          }}></View>
      </View>
      <View
        style={{
          width: '100%',
          height: '33.3%',
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: '50%',
            height: '50%',
            backgroundColor: 'black',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: '50%',
              height: '50%',
              backgroundColor: 'green',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: '50%',
                height: '50%',
                backgroundColor: 'red',
              }}></View>
          </View>
        </View>
      </View> */}
    </>
  );
}


export default Malik;
