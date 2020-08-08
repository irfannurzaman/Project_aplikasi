import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Animated,
} from 'react-native';
import {DetailProduct} from '../../molecules';

const ButtonSheet = ({state, setState}) => {
  const [y_translate, sety_translate] = useState(new Animated.Value(0));
  const [menu_expanded, setmenu_expanded] = useState(false);

  const menu_moveY = y_translate.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -330],
  });

  useEffect(() => {
    if (state == 'beli') {
      setmenu_expanded(true);
      Animated.spring(y_translate, {
        toValue: 1,
        friction: 4,
        tension: 5
      }).start();
    }
  }, [state]);

  const hideMenu = () => {
    setmenu_expanded(false);
    setState('gagal');
    Animated.spring(y_translate, {
      toValue: 0,
      friction: 4,
      tension: 5
    }).start();
  };

  return (
    <Animated.View
      style={[
        styles.footer_menu,
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
          <DetailProduct hideMenu={hideMenu} />
        </View>
      )}
    </Animated.View>
  );
};

export default ButtonSheet;

const styles = StyleSheet.create({
  footer_menu: {
    position: 'absolute',
    width: '100%',
    height: 300,
    bottom: -300,
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 20,
  },
  button: {
    backgroundColor: '#fff',
  },
  button_label: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
