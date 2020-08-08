import React, {useState} from 'react';
import {TouchableOpacity, View, Text, Animated, Image} from 'react-native';
import {Pencile, Camera} from '../../../assets';

const ButtonAddStatus = ({setState, setHeight, navigation}) => {
  const [y_translate] = useState(new Animated.Value(0));
  const [y_translate1, sety_translate1] = useState(new Animated.Value(1));
  const [menu_expanded, setmenu_expanded] = useState(false);
  const menu_moveY = y_translate.interpolate({
    inputRange: [0, 5],
    outputRange: [0, 10],
  });

  const addData = () => {
    if (y_translate1._value === 1) {
      setmenu_expanded(true);
      Animated.sequence([
        Animated.spring(y_translate, {
          toValue: 1,
          friction: 2,
          tension: 10
        }).start(),
      ]);
      sety_translate1(new Animated.Value(0));
      setHeight(170);
    } else {
      setmenu_expanded(false);
      setState(false);
      setHeight(75);
      Animated.spring(y_translate, {
        toValue: 0,
        friction: 2,
        tension: 10
      }).start();
      sety_translate1(new Animated.Value(1));
    }
  };

  const onClickStatus = val => {
    setState(true);
    setHeight(700);
    val.navigate('UploadStatus');
  };

  const rotation = y_translate.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '45deg'],
  });

  return (
    <View>
      <TouchableOpacity
        activeOpacity={1}
        onPress={addData}
        style={{
          marginTop: 30,
          height: 40,
          width: 40,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          borderRadius: 50,
          elevation: 10,
          borderWidth: 0.5,
          borderColor: '#919191',
        }}>
        <Animated.View style={[{transform: [{rotate: rotation}]}]}>
          <Text style={{color: 'black', fontSize: 25, bottom: 2}}>+</Text>
        </Animated.View>
      </TouchableOpacity>
      <Animated.View
        style={[
          {
            height: 120,
            width: 50,
            alignItems: 'center',
          },
          {
            transform: [
              {
                translateY: menu_moveY,
              },
            ],
          },
        ]}>
        {!menu_expanded ? (
          <View />
        ) : (
          <View>
            <TouchableOpacity
              onPress={() => onClickStatus(navigation)}
              style={{
                width: 40,
                height: 40,
                backgroundColor: 'white',
                borderRadius: 20,
                marginRight: 10,
                borderWidth: 0.5,
                borderColor: '#919191',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image style={{height: 20, width: 20}} source={Pencile} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 40,
                height: 40,
                backgroundColor: 'white',
                borderRadius: 20,
                marginRight: 5,
                borderWidth: 0.5,
                borderColor: '#919191',
                marginTop: 2,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image style={{height: 20, width: 20}} source={Camera} />
            </TouchableOpacity>
          </View>
        )}
      </Animated.View>
    </View>
  );
};

export default ButtonAddStatus;
