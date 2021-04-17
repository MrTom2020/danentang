import React, {useState} from 'react';
import {StyleSheet, View, Text,  Alert, ScrollView} from 'react-native';
import {Button, Form,Item, Input, Label} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import {LoginApp} from '../../store/actions/transactionAction';

import {useDispatch} from 'react-redux';
import {firebaseApp} from '../firebase.js';
import auth from '@react-native-firebase/auth';
const sign = (props,{navigation}) => 
{
    const dispatch = useDispatch();
    const [hoten,sethoten] = useState(props.k2);
    const [tien,setvitien] = useState('');
    const [tenvi,settenvi] = useState('');
    const [motavi,setmotavi] = useState('');
    const [mand,setmavi] = useState(props.k1);
    const onSubmit = () => 
    {
      if(!tien || !tenvi || !motavi)
      {
        return alert("Xin vui lòng điền đầy đủ thông tin");
      }
      else
      {
        this.itemRef = firebaseApp.database().ref('users/' + mand +'/k3');
        this.itemRef.set({
          k:{
            Hoten:hoten,
            Mand:mand,
           Tenvi:tenvi,
           Tien:tien,
           Mota:motavi
          }
        });
        return props.navigation.goBack();
      }

    };
    const exxit = ()=>
    {
        return props.navigation.goBack();
    }
   const senddata=()=>
   {
      
   }
    return (
        <ScrollView>
        <LinearGradient
            colors={['#81FBB8', '#28C76F']}
            style={styles.Box}>
            <View style={{ width: '100%', alignItems: 'flex-start' }}>
          <Form>
            <Label style={{marginLeft:'35%',fontSize:20,fontStyle:'italic',fontWeight:'bold',paddingBottom:'10%'}}>Cập nhật ví tiền</Label>
            <Item style={{...styles.item}}>
            <Text style={{color:'#ffffff'}}>Tên : {hoten}</Text>
          </Item>
            <Item style={{...styles.item}}>
           <Text style={{color:'#ffffff'}}>Mã : {mand}</Text>
          </Item>
            <Item style={{...styles.item}}>
            <Input
              style={{color:'#ffffff'}}
              placeholder="Xin mời nhập tiền"
              onChangeText={(tien) => setvitien(tien)}
            />
          </Item>
          <Item style={{...styles.item}}>
            <Input
              style={{color:'#ffffff'}}
              placeholder="Xin mời nhập tên ví"
              onChangeText={(tenvi) => settenvi(tenvi)}
            />
          </Item>
          <Item style={{...styles.item}}>
            <Input
              style={{color:'#ffffff'}}
              placeholder="Xin mời nhập mô tả ví"
              onChangeText={(motavi) => setmotavi(motavi)}
            />
          </Item>
          <Button block onPress={onSubmit} style={{ marginHorizontal: 20,backgroundColor:'#333333' }}>
            <Text style={{color: '#fff', fontWeight: '100', fontSize: 16}}>
             Đồng ý
            </Text>
          </Button>
          <Button block onPress={exxit} style={{ marginHorizontal: 20,backgroundColor:'#333333',marginTop:'2%' }}>
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
            height: 580,
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