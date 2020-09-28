import React, {useState} from 'react';
import {View, Image, Dimensions} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Splash,
  GetStarted,
  Register,
  Login,
  UploadPhoto,
  Home,
  Messages,
  Maps,
  ItemsProduct,
  Chatting,
  UserProfile,
  UpdateProfile,
  DoctorProfile,
  PageNews,
  PageSort
} from '../pages';
import {useSelector} from 'react-redux'
import {buttonHome, message, News} from '../assets';
import {Search, UploadStatus, useScreenDimensions} from '../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const IconBottom = props => {
  const screenData = useScreenDimensions()
  console.log('sukses12', screenData)
  const {color, focused} = props.data;
  let colorSelected = focused ? color : '#9c9998';
  return (
    <View
      style={{
        height: 40,
        alignContent: 'center',
        justifyContent: 'center',
        marginTop: screenData.isLandscape? 0 : 10,
      }}>
      <Image
        source={props.image}
        style={{
          width: 30,
          height: props.ky == 'nws' ? 25: 30,
          tintColor: colorSelected,
        }}
      />
    </View>
  );
};

const MainApp = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          height: 45,
          borderRadius: 20,
          position: 'absolute',
          marginBottom: 20,
          marginHorizontal: 20,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        tabBarOptions={{
          style: {
            backgroundColor: 'blue',
            height: 100,
          }
        }}
        options={{
          tabBarIcon: props => (
            <IconBottom data={props} image={buttonHome} ky={'hm'} />
          ),
          title: '',
        }}
      />

      <Tab.Screen
        name="PageNews"
        component={PageNews}
        options={{
          tabBarIcon: props => (
            <IconBottom data={props} image={News} ky={'nws'} />
          ),
          title: '',
        }}
      />

      <Tab.Screen
        name="Messages"
        component={Messages}
        options={{
          tabBarIcon: props => (
            <IconBottom data={props} image={message} ky={'msg'} />
          ),
          title: '',
        }}
      />
  
    </Tab.Navigator>
  );
};

const MyModalSearch = () => {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen
        name="Search"
        component={Search}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UploadPhoto"
        component={UploadPhoto}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ItemsProduct"
        component={ItemsProduct}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Maps"
        component={Maps}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UserProfile"
        component={UserProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UpdateProfile"
        component={UpdateProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DoctorProfile"
        component={DoctorProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Chatting"
        component={Chatting}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MyModalSearch"
        component={MyModalSearch}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UploadStatus"
        component={UploadStatus}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PageSort"
        component={PageSort}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
