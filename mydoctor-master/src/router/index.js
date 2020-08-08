import React from 'react';
import {View, Image, Animated, Text} from 'react-native';
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
} from '../pages';
import {useSelector} from 'react-redux'
import {buttonHome, message, News} from '../assets';
import {Search, UploadStatus} from '../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const IconBottom = props => {
  const {color, focused} = props.data;
  let colorSelected = focused ? color : '#9c9998';
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
      }}>
      <Image
        source={props.image}
        style={{
          width: 30,
          height: props.ky == 'nws' ? 25 : 30,
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
          height: 60,
          // backgroundColor: '#272727',
          borderRadius: 20,
          position: 'absolute',
          marginBottom: 20,
          marginHorizontal: 20,
          borderWidth: 0.5,
          borderColor: '#272727'
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
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
    </Stack.Navigator>
  );
};

export default Router;
