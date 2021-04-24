import React, {useState} from 'react';
import {StyleSheet, View, Text,  Alert,ImageBackground } from 'react-native';
import {Button, Form,Item, Input, Label} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import {LoginApp} from '../../store/actions/transactionAction';

import {useDispatch} from 'react-redux';
import {firebaseApp} from '../firebase.js';
import auth from '@react-native-firebase/auth';
const sign = ({navigation,route}) => 
{
  
    const dispatch = useDispatch();
    const [username, setUsername] = useState('t@gmail.com');
    const [password, setPassword] = useState('123456789');
    const [userid,setuserid] = useState('');
    const [userd, setuserd] = useState('');
    var ss = firebaseApp.database().ref('lili');
    const onSubmit = () => 
    {
      if(!username || !password)
      {
        return alert("Xin vui lòng điền đầy đủ thông tin");
      }
      else
      {
        firebaseApp
        .auth().signInWithEmailAndPassword(username, password).then((currentUser) => 
        {
          var userd;
          userd = firebaseApp.auth().currentUser.uid;
          setuserid(userd);
          const newTransaction = {
            username,
            password,
            userid,
          };
          dispatch(LoginApp({...newTransaction}));
         navigation.navigate('Main',{userd,username});
        }).catch((e)=> {
          Alert.alert('Thong bao', e.toString())
        })
      }
    };
   const dktaikhoan =()=>
   {
    return navigation.navigate('signup');
   };
    return (
      <ImageBackground source={require('../../../image/bbd.jpg')} style={{width:'110%',height:'100%',flexDirection:'row',alignItems:'center',justifyContent:'center',display:'flex'}}>
            <View style={{ width: '100%', alignItems: 'flex-start' }}>
          <Form>
            <Label style={{marginLeft:'35%',fontSize:30,fontStyle:'italic',fontWeight:'bold',paddingBottom:'10%'}}>Đăng nhập</Label>
          <Item style={{...styles.item}}>
            <Input
              style={{backgroundColor:'#ffffff'}}
              placeholder="Xin mời nhập tên tài khoản"
              onChangeText={(username) => setUsername(username)}
            />
          </Item>
          <Item style={{...styles.item,paddingBottom:'30%'}}>
            <Input
            style={{backgroundColor:'#ffffff',marginBottom:'10%'}}
              placeholder="Xin mời nhập mật khẩu"
              onChangeText={(password) => setPassword(password)}
              onSubmitEditing={onSubmit}
            />
          </Item>
            <Button block onPress={onSubmit} style={{ marginHorizontal: 20,backgroundColor:'#333333',marginBottom:'2%'}}>
            <Text style={{color: '#fff', fontWeight: '100', fontSize: 16}}>
             Đồng ý
            </Text>
          </Button>
          <Button block onPress={dktaikhoan} style={{ marginHorizontal: 20,backgroundColor:'#333333' }}>
          <Text style={{color: '#fff', fontWeight: '100', fontSize: 16}}>
             Đăng ký tài khoản
            </Text>
          </Button>
        </Form>
            </View> 
        </ImageBackground>
    );
    
};

const styles = StyleSheet.create({
        Box: {
            width: '100%',
            height: 500,
            borderRadius: 15,
            flexDirection: 'row',
            padding: 22,
            marginTop:'26%'
    },
    item: {
        marginVertical: 20,
    width:'90%'
  },
    });
export default sign;