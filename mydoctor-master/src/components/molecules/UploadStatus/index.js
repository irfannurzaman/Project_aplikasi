import React, {useEffect} from 'react';
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  Animated,
  Image,
  ImageBackground,
} from 'react-native';

const UpdateStatus = ({navigation, route}) => {
  const updateStatusImage = route;
  const [value, onChangeText] = React.useState();
  const [y_rotation] = React.useState(new Animated.Value(1));
  const [_width, setWidth] = React.useState();
  const rotation = y_rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '45deg'],
  });
  console.log('sukses', _width)
  useEffect(() => {
    Image.getSize(updateStatusImage.params.foto.uri, (width, height) => {
      if (width !== undefined && height !== undefined) {
        setWidth({width, height});
      }
    });
  }, [updateStatusImage]);
  return (
    <View>
      {updateStatusImage.params.foto == undefined ? (
        <View>
          <TextInput
            autoFocus={true}
            value={value}
            onChangeText={text => onChangeText(text)}
            defaultValue={value}
            placeholder={'Ketik Status'}
            placeholderTextColor={'white'}
            textAlign={'center'}
            multiline={true}
            maxLength={100}
            selectionColor={'white'}
            style={{
              backgroundColor: 'grey',
              width: '100%',
              height: '100%',
              fontSize: 25,
            }}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate('PageNews')}
            style={{position: 'absolute'}}>
            <Animated.View style={[{transform: [{rotate: rotation}]}]}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 35,
                  marginHorizontal: 15,
                  marginTop: 15,
                }}>
                +
              </Text>
            </Animated.View>
          </TouchableOpacity>
        </View>
      ) : (
        <ImageBackground
          source={updateStatusImage.params.foto}
          style={{height: '100%', width: '100%'}}>
          <View
            style={{
              backgroundColor: 'black',
              width: '100%',
              height: '100%',
              opacity: 0.5,
            }}
          />
          <View
            style={{
              backgroundColor: 'transparent',
              width: 370,
              height: 500,
              marginTop: 50,
              marginHorizontal: 20,
              borderRadius: 10,
              elevation: 2,
              position: 'absolute',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <Image
              style={{
                height: 200,
                width: 200,
                borderRadius: 10,
                elevation: 3,
              }}
              source={updateStatusImage.params.foto}
            />
            <TextInput
            placeholder={'Apa yang anda fikirkan?'}
            selectionColor={'#05c5eb'}
            underlineColorAndroid={'#05c5eb'}
              style={{
                backgroundColor: 'white',
                width: 300,
                height: 150,
                marginTop: -50,
                borderRadius: 10,
                opacity: 0.4,
              }}
            />
          </View>
        </ImageBackground>
      )}
    </View>
  );
};
export default UpdateStatus;
