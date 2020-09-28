import React from 'react';
import {ScrollView,StyleSheet,Text,View,YellowBox} from 'react-native';
import {useDispatch} from 'react-redux';
import {ILLogo} from '../../assets';
import {Button,Gap,Input,Link} from '../../components';
import {Fire} from '../../config';
import {colors,fonts,showError,storeData,useForm} from '../../utils';

const Login = ({navigation}) => {
  const [form, setForm] = useForm({
    email: '',
    password: ''
  });
  const dispatch = useDispatch();

  const login = () => {
    dispatch({
      type: 'SET_LOADING',
      value: true
    });
    Fire.auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then(res => {
        dispatch({
          type: 'SET_LOADING',
          value: false
        });
        navigation.replace('MainApp');
        Fire.database()
          .ref(`users/${res.user.uid}/`)
          .once('value')
          .then(resDB => {
            if (resDB.val()) {
              storeData('user', resDB.val());
            }
          });
      })
      .catch(err => {
        dispatch({
          type: 'SET_LOADING',
          value: false
        });
        showError(err.message);
      });
  };

  return ( 
  <View style={styles.page}>
      <Gap height={40}/> 
      <ILLogo/>
      <Text style={styles.title}> Masuk Untuk Pesan </Text>
      <Input 
      label="Email Address"
      value={form.email}
      onChangeText={value => setForm('email', value)}/> 
      <Gap height={24}/> 
      <Input 
      label="Password"
      value={form.password}
      onChangeText={value => setForm('password', value)}
      secureTextEntry/>
      <Gap height={10}/> 
      <Link title="Forgot My Password"size={12}/> 
      <Gap height={40}/> 
      <Button 
      title="Sign in"
      onPress={login}/> 
      <Gap height = {30}/> 
      <Link 
      title = "Create New Account"
      size = {16}
      align = "center"
      onPress = {() => navigation.navigate('Register')}/> 
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 40,
    flex: 1,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 40,
    marginBottom: 40,
    maxWidth: 230,
    marginLeft: -10
  },
});