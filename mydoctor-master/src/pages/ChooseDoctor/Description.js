import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from '../../components/atoms'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
const Description = ({itemCategory}) => {
    return(
    <View>
        <View>
        <Text style={styles.text}>{itemCategory.category}</Text>
        </View>
        <View style={styles.action}>
        <Button title="Beli"/>
        </View>
        {/* // <Tab.Navigator>
        //    <Tab.Screen name="Home" component={HomeScreen} />
        //    <Tab.Screen name="Settings" component={SettingsScreen} />
        // </Tab.Navigator> */}
    </View>
    ) 
}
export default Description


const styles = StyleSheet.create({
    text: {
        marginHorizontal: 20,
        marginTop: 20,
        fontSize: 17,
        fontWeight: 'bold'
    },
    button: {
        width: 100,
        height: 150
    },
    action: {
        paddingHorizontal: 43,
        paddingTop: 23
    }
})