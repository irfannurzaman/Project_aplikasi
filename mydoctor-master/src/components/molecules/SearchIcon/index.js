import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {IconSearch} from '../../../assets';

const SearchIcon = ({navigation, auto}) => {
  const onFocusChange = () => {
    <TouchableOpacity onPress={navigation.navigate('MyModalSearch')} />;
  };
  return (
    <View style={styles.searchBar(auto)}>
      {!auto ? (
        <View>
          <TextInput
            placeholder="What do you want to eat?"
            onFocus={onFocusChange}
            style={{
              marginHorizontal: 10,
              position: 'relative'
            }}
          />
          <View
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              justifyContent: 'center',
              alignItems: 'flex-end',
            }}>
            <Image
              source={IconSearch}
              style={{
                width: 20,
                height: 20,
                marginHorizontal: 10,
              }}
            />
          </View>
        </View>
      ) : (
        <View>
          <TextInput
            placeholder="What do you want to eat?"
            autoFocus={true}
            style={{
              marginHorizontal: 10,
              position: 'relative',
            }}
          />
          <View
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              justifyContent: 'center',
              alignItems: 'flex-end',
            }}>
            <Image
              source={IconSearch}
              style={{
                width: 20,
                height: 20,
                marginHorizontal: 10,
              }}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default SearchIcon;

const styles = StyleSheet.create({
  searchBar: auto => ({
    backgroundColor: 'white',
    height: auto ? 40 : 40,
    width: auto? 250 : 300,
    marginHorizontal: 20,
    position: 'absolute',
    borderRadius: 20,
    bottom: auto ? 0 : 15,
    elevation: auto ? 0 : 2,
    borderWidth: 1,
    borderColor: '#dadbd9',
  }),
});
