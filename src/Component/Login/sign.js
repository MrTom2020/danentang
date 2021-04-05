import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput,FlatList} from 'react-native';
import {Button, Form,Item, Input, Label} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import {LoginApp} from '../../store/actions/transactionAction';
import {useDispatch} from 'react-redux';
import {firebaseApp} from '../firebase.js';
const sign = ({navigation}) => 
{
  
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    var ss = firebaseApp.database().ref('lili');
    this.itemRef =  firebaseApp.database().ref('lili');
    this.itemRef.set({
      TaiKhoan:{
        ten:"Lê Thanh Hiệp",
        CMND:"12345",
        gioitinh:"nam",
        sinhnam:"3000",
        hiep:{
          k:"1",
          n:"ok"
        }
      }
    });
   
   
    const onSubmit = () => 
    {
    
    };
   
    return (
        <LinearGradient
            colors={['#89fc03', '#aefb55', '#d9fdb0']}
            style={styles.Box}>
            <View style={{ width: '100%', alignItems: 'flex-start' }}>
          <Form>
            <Label style={{marginLeft:'35%',fontSize:30,fontStyle:'italic',fontWeight:'bold',paddingBottom:'10%'}}>Đăng nhập</Label>
          <Item style={{...styles.item}}>
            <Input
              placeholder="Xin mời nhập tên tài khoản"
              onChangeText={(username) => setUsername(username)}
            />
          </Item>
          <Item style={{...styles.item,paddingBottom:'10%'}}>
            <Input
              placeholder="Xin mời nhập mật khẩu"
              onChangeText={(password) => setPassword(password)}
              onSubmitEditing={onSubmit}
            />
          </Item>
            <Button block onPress={onSubmit} style={{ marginHorizontal: 20,backgroundColor:'#333333' }}>
            <Text style={{color: '#fff', fontWeight: '700', fontSize: 16}}>
             Đồng ý
            </Text>
          </Button>
        </Form>
            </View>

     
        </LinearGradient>
    );
    
};

const styles = StyleSheet.create({
        Box: {
            width: '100%',
            height: 400,
            borderRadius: 15,
            flexDirection: 'row',
            padding: 22,
            marginTop:'26%'
    },
    item: {
        marginVertical: 20,
    width:'100%'
  },
    });
export default sign;