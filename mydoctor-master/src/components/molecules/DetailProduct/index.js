import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
} from 'react-native';
import {DrawHorizontal, Button} from '../../atoms';
import Animated from 'react-native-reanimated';

const DetailProduct = ({itemCategory, titleButton, navigation, hideMenu}) => {
  const [y_rotation] = useState(new Animated.Value(1));
  const rotation = y_rotation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 7],
  });
  return (
    <View
      style={{
        backgroundColor: '#272727',
        borderRadius: 20,
      }}>
      <View
        style={{width: 'auto', alignItems: 'flex-end', marginTop: 5}}>
        <TouchableOpacity
          onPress={hideMenu}
          style={{
            backgroundColor: 'white',
            width: 20,
            alignItems: 'center',
            borderRadius: 10,
            borderWidth: 0.5,
            borderColor: '#c4c4c4',
            marginRight: 10,
          }}>
          <Animated.View style={[{transform: [{rotate: rotation}]}]}>
            <Text style={{fontSize: 15, color: '#c4c4c4'}}>+</Text>
          </Animated.View>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View
          style={{
            height: 70,
            width: 150,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <TouchableOpacity style={styles.buttonCart}>
            <Text style={{fontSize: 25}}>-</Text>
          </TouchableOpacity>
          <View
            style={{
              marginTop: 20,
              height: 30,
              width: 40,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 15, color: 'white'}}>20</Text>
          </View>
          <TouchableOpacity style={styles.buttonCart}>
            <Text style={{fontSize: 20}}>+</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: 70,
            width: 200,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: 'white'}}>Total : Rp: 12.000</Text>
        </View>
      </View>
      <View style={{width: '100%', alignItems: 'center'}}>
        <View style={{width: 150, bottom: 5}}>
          <Button title="Beli Sekarang" />
        </View>
      </View>
    </View>
  );
};

export default DetailProduct;

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    bottom: 0,
    position: 'absolute',
    borderTopWidth: 0.2,
    borderTopColor: '#838784',
  },
  buttonCart: {
    marginTop: 20,
    height: 30,
    width: 30,
    borderRadius: 30,
    borderWidth: 0.5,
    borderColor: '#838784',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

{
  /* <View style={{width: '100%', height: 175, marginTop: 10}}>
<TouchableOpacity
  onPress={hideMenu}
  style={{
    marginLeft: 20,
    backgroundColor: 'white',
    width: 20,
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#c4c4c4',
    elevation: 3,
  }}>
  <Animated.View style={[{transform: [{rotate: rotation}]}]}>
    <Text style={{fontSize: 15, color: '#c4c4c4'}}>+</Text>
  </Animated.View>
</TouchableOpacity>
<View
  style={{borderBottomWidth: 0.6, borderColor: '#c4c4c4', height: 10}}
/>
</View> */
}
