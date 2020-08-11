import React, {useEffect} from 'react';
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  Animated,
  Image,
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
  console.log('sukses', updateStatusImage);
  useEffect(() => {
    if (updateStatusImage.params !== '') {
      Image.getSize(updateStatusImage.params.foto.uri, (width, height) => {
        if (width !== undefined && height !== undefined) {
          setWidth({width, height});
        }
      });
    }
  }, [updateStatusImage]);
  return (
    <View>
      {updateStatusImage.params == '' ? (
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
        <View
          style={{
            height: '100%',
            width: '100%',
            backgroundColor: 'black',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{
              height: 200,
              width: 200,
              elevation: 3,
            }}
            source={updateStatusImage.params.foto}
          />
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              marginTop: 30,
              justifyContent: 'center',
            }}>
            <View
              style={{
                width: 'auto',
                height: 'auto',
                backgroundColor: 'white',
                width: 300,
                height: 40,
                marginRight: 10,
                borderRadius: 20,
                alignItems: 'flex-end'
              }}>
              <TextInput
                placeholder={'Add a caption...'}
                placeholderStyle={{
                  fontFamily: 'AnotherFont',
                }}
                selectionColor={'#05c5eb'}
                style={{
                  backgroundColor: 'white',
                  borderRadius: 20,
                  width: 290,
                  
                }}
              />
            </View>

            <TouchableOpacity
              style={{
                width: 40,
                height: 40,
                backgroundColor: 'blue',
                borderRadius: 40,
              }}
            />
          </View>
        </View>
      )}
    </View>
  );
};
export default UpdateStatus;
