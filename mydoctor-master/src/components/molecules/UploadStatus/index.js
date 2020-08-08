import React from 'react';
import {TextInput, View, Text, TouchableOpacity, Animated} from 'react-native';

const UpdateStatus = ({navigation}) => {
  const [value, onChangeText] = React.useState();
  const [y_rotation] = React.useState(new Animated.Value(1))
  const rotation = y_rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '45deg'],
  })
  return (
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
      <TouchableOpacity onPress={() => navigation.navigate('PageNews')} style={{position: 'absolute'}}>
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
  );
};
export default UpdateStatus;
