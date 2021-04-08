import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput,FlatList, Alert, ScrollView} from 'react-native';
import {Button, Form,Item, Input, Label} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch} from 'react-redux';
import {firebaseApp} from '../firebase.js';
const User = ({navigation}) => 
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
      else
      {
        firebaseApp.auth().createUserWithEmailAndPassword(hoten, matkhau)
            .then(function (currentUser) 
            {
             this.itemRef = firebaseApp.database().ref('/users/' + firebaseApp.auth().currentUser.uid);
             this.itemRef.set({
              k1:{
                thongtincn:{
                Ten:hoten.toString(),
                Quequan:quequan.toString(),
                Ngaysinh:ngaysinh.toString(),
                Diachi:diachi.toString(),
                Sdt:sdt.toString(),
                Cmnd:cmnd.toString(),
                Matkhau:matkhau.toString()
                }
              }
            })
            Alert.alert("Đăng ký tài khoản thành công");
            }
            )
            .catch(function (error) 
            {
              Alert.alert('Thong bao', error.toString())
            });
            navigation.navigate('Home2');
           // Alert.alert(k);
      }
    };
    const extitt = () => 
    {
        return navigation.navigate('Home2');
    };
    return (
      <ScrollView>
        <LinearGradient
            colors={['#81FBB8', '#28C76F']}
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
              onChangeText={(matkhau) => setmatkhau(matkhau)}
            />
          </Item>
          <Item style={{...styles.item}}>
            <Input
             style={{color:'#ffffff'}}
              placeholder="Xin mời nhập ngày sinh"
              onChangeText={(ngaysinh) => setngaysinh(ngaysinh)}
            />
          </Item>
          <Item style={{...styles.item}}>
            <Input
              style={{color:'#ffffff'}}
              placeholder="Xin mời nhập quê quán"
              onChangeText={(quequan) => setquequan(quequan)}
            />
          </Item>
          <Item style={{...styles.item}}>
            <Input
              style={{color:'#ffffff'}}
              placeholder="Xin mời nhập địa chỉ"
              onChangeText={(diachi) => setdiachi(diachi)}
            />
          </Item>
          <Item style={{...styles.item}}>
            <Input
              style={{color:'#ffffff'}}
              placeholder="Xin mời nhập số điện thoại"
              onChangeText={(sdt) => setsdt(sdt)}
            />
          </Item>
          <Item style={{...styles.item}}>
            <Input
              style={{color:'#ffffff'}}
              placeholder="Xin mời nhập số cmnd"
              onChangeText={(cmnd) => setcmnd(cmnd)}
            />
          </Item>
            <Button block onPress={onSubmit} style={{ marginHorizontal: 20,backgroundColor:'#333333' }}>
            <Text style={{color: '#fff', fontWeight: '100', fontSize: 16}}>
             Đồng ý
            </Text>
          </Button>
          <Button block onPress={extitt} style={{ marginHorizontal: 20,backgroundColor:'#333333' }}>
            <Text style={{color: '#fff', fontWeight: '100', fontSize: 16}}>
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
export default User;