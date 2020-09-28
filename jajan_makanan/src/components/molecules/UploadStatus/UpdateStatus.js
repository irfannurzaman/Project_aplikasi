import React, {useState, useEffect} from 'react'
import { View, Animated, StyleSheet} from 'react-native'

const UpdateStatus = ({state}) => {
    const [y_translate, sety_translate] = useState(new Animated.Value(0));
    const [menu_expanded, setmenu_expanded] = useState(false);
  
    const menu_moveY = y_translate.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -330],
    });
  
    useEffect(() => {
      if (state) {
        setmenu_expanded(true);
        Animated.spring(y_translate, {
          toValue: 1,
          friction: 4,
        }).start();
      }
    }, [state]);
  
    const hideMenu = () => {
      setmenu_expanded(false);
      setState('gagal');
      Animated.spring(y_translate, {
        toValue: 0,
        friction: 4,
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
          <View style={{backgroundColor: 'red', flex: 1}}>
            
          </View>
        )}
      </Animated.View>
    )
}
export default UpdateStatus

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
