import React from 'react';
import {View, Image, Animated} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Splash, 
GetStarted, 
Register, 
Login, 
UploadPhoto, 
Doctor, 
Messages, 
Hospitals, 
ChooseDoctor,
Chatting, 
UserProfile, 
UpdateProfile, 
DoctorProfile } from '../pages';
import { colors } from '../utils';
import {buttonHome, message, News, cart} from '../assets'
import { BottomNavigator } from '../components';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const IconBottom = (props) => {
    console.log('sukses', props)
    const { color, focused} = props.data
    let colorSelected = focused ? color : '#0f0f0f'
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10
        }}>
            <View style ={{
                height: 20,
                backgroundColor: focused ? colors.white : 'transparent',
                elevation: focused ? 8 : 0,
                borderRadius: 60,
                width: 50,
                height: 50,
                borderWidth: focused ? 0.2 : 0,
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: '#cccbc8'
            }}>
                <Image 
                source={props.image} 
                style={{ 
                width: 30, 
                height: props.image == 'news.png' ? 25 : 30, 
                tintColor: colorSelected
             }}
                 />
            </View>
        </View>
    )
}

const MainApp = () => {
    return (
        <Tab.Navigator
        tabBarOptions={{
            style: {
                height: 60,
                backgroundColor: '#fcfafa',
                borderRadius: 20,
                position: 'absolute',
                marginBottom: 20,
                marginHorizontal: 20
            },
            
        }}
        >
            <Tab.Screen 
            name="Home" 
            component={Doctor}
            options={{
                tabBarIcon: (props) => <IconBottom data={props} image={buttonHome}/>,
                title: ''
            }}
            />

            <Tab.Screen 
            name="Hospitals" 
            component={Hospitals}
            options={{
                tabBarIcon: (props) => <IconBottom data={props} image={News}/>,
                title: ''
            }}
            />


            <Tab.Screen 
            name="Messages" 
            component={Messages} 
            options={{
                tabBarIcon: (props) => <IconBottom data={props} image={message}/>,
                title: ''
            }}
            />
        </Tab.Navigator>
    )
}

const Router = () => {
    return (
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen name="Splash" component={Splash}  options={{headerShown: false}}/>
            <Stack.Screen name="GetStarted" component={GetStarted} options={{headerShown: false}}/>
            <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>
            <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
            <Stack.Screen name="UploadPhoto" component={UploadPhoto} options={{headerShown: false}}/>
            <Stack.Screen name="MainApp" component={MainApp} options={{headerShown: false}}/>
            <Stack.Screen name="ChooseDoctor" component={ChooseDoctor} options={{headerShown: false}}/>
            <Stack.Screen name="Chatting" component={Chatting} options={{headerShown: false}}/>
            <Stack.Screen name="UserProfile" component={UserProfile} options={{headerShown: false}}/>
            <Stack.Screen name="UpdateProfile" component={UpdateProfile} options={{headerShown: false}}/>
            <Stack.Screen name="DoctorProfile" component={DoctorProfile} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}

export default Router