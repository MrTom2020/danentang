import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput,FlatList, Alert, ScrollView} from 'react-native';
import {Button, Form,Item, Input, Label} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch} from 'react-redux';
import {firebaseApp} from '../firebase.js';
const signup = ({navigation}) => 
{
  /* hoten, quequan, ngaysinh,diachi,sdt,cmnd*/
    const dispatch = useDispatch();
    const [hoten, sethoten] = useState('');
    const [quequan, setquequan] = useState('');
    const [ngaysinh, setngaysinh] = useState('');
    const [diachi, setdiachi] = useState('');
    const [sdt, setsdt] = useState('');
    const [cmnd, setcmnd] = useState('');
    const [matkhau, setmatkhau] = useState('');

   
    const onSubmit = () => 
    {
      if(!hoten || !quequan || !ngaysinh || !diachi || !sdt || !cmnd || !matkhau)
      {
        return alert("Xin vui lòng điền đầy đủ thông tin");
      }
    };
    const extitt = () => 
    {
        return navigation.navigate('Home2');
    };
    return (
      <ScrollView>
        <LinearGradient
            colors={['#b1f85f', '#62b403', '#b6f76a']}
            style={styles.Box}>
            <View style={{ width: '100%', alignItems: 'flex-start' }}>
          <Form>
            <Label style={{marginLeft:'35%',fontSize:25,fontStyle:'italic',fontWeight:'bold',paddingBottom:'10%'}}>Đăng ký tài khoản</Label>
          <Item style={{...styles.item}}>
            <Input
              style={{color:'#ffffff'}}
              placeholder="Xin mời nhập tên tài khoản đăng ký"
              onChangeText={(hoten) => sethoten(hoten)}
            />
          </Item>
          <Item style={{...styles.item}}>
            <Input
              style={{color:'#ffffff'}}
              placeholder="Xin mời nhập mật khẩu"
              onChangeText={(quequan) => setmatkhau(hoten)}
            />
          </Item>
          <Item style={{...styles.item}}>
            <Input
             style={{color:'#ffffff'}}
              placeholder="Xin mời nhập ngày sinh"
              onChangeText={(ngaysinh) => setngaysinh(hoten)}
            />
          </Item>
          <Item style={{...styles.item}}>
            <Input
              style={{color:'#ffffff'}}
              placeholder="Xin mời nhập quê quán"
              onChangeText={(diachi) => setdiachi(hoten)}
            />
          </Item>
          <Item style={{...styles.item}}>
            <Input
              style={{color:'#ffffff'}}
              placeholder="Xin mời nhập tên diachi"
              onChangeText={(sdt) => setsdt(hoten)}
            />
          </Item>
          <Item style={{...styles.item}}>
            <Input
              style={{color:'#ffffff'}}
              placeholder="Xin mời nhập số điện thoại"
              onChangeText={(cmnd) => setcmnd(hoten)}
            />
          </Item>
            <Button block onPress={onSubmit} style={{ marginHorizontal: 20,backgroundColor:'#333333' }}>
            <Text style={{color: '#fff', fontWeight: '700', fontSize: 16}}>
             Đồng ý
            </Text>
          </Button>
          <Button block onPress={extitt} style={{ marginHorizontal: 20,backgroundColor:'#333333' }}>
            <Text style={{color: '#fff', fontWeight: '700', fontSize: 16}}>
             Thoát ra
            </Text>
          </Button>
        </Form>
            </View>

     
        </LinearGradient>
        </ScrollView>
    );
    
};

const styles = StyleSheet.create({
        Box: {
            width: '100%',
            height: '100%',
            borderRadius: 15,
            flexDirection: 'row',
            padding: 22,
            marginTop:'26%'
    },
    item: {
        marginVertical: 20,
    width:'100%',
  },
    });
export default signup;