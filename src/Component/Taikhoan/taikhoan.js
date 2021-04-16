import React, {useState} from 'react';
import {StyleSheet, View, Text, Alert, ScrollView} from 'react-native';
import {Button, Form,Item, Input, Label} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch} from 'react-redux';
import {firebaseApp} from '../firebase.js';
const taikhoan = (props,{navigation}) => 
{
  /* hoten, quequan, ngaysinh,diachi,sdt,cmnd*/
    const dispatch = useDispatch();
    const [hoten, sethoten] = useState(props.k2);
    const [mand,setmand] = useState(props.k1);
    const [mota,setmota] = useState('');
    const [tien,settien] = useState('*******');
    const [tenvitien,settenvitien] = useState('******');
    
   var startt = firebaseApp.database().ref('users/' + mand +'/k3/k');
   startt.once('value',function(snapshot)
      {
      // console.log(snapshot.child('Diachi').val());
     sethoten(snapshot.child('Hoten').val());
     setmand(snapshot.child('Mand').val());
       setmota(snapshot.child('Mota').val());
      settenvitien(snapshot.child('Tenvi').val());
      settien(snapshot.child('Tien').val());
      });
    const extitt = () => 
    {
        return props.navigation.goBack();
    };
    const khoanthu =()=>
    {
      return props.navigation.navigate('khoanthuchi',{mand,tien,hoten});
    }
    return (
      <ScrollView>
        <LinearGradient
            colors={['#81FBB8', '#28C76F']}
            style={styles.Box}>
            <View style={{ width: '100%', alignItems: 'flex-start' }}>
          <Form>
            <Label style={{marginLeft:'35%',fontSize:25,fontStyle:'italic',fontWeight:'bold',paddingBottom:'10%'}}>Tài khoản ví</Label>
          <Item style={{...styles.item}}>
           <Text  style={{fontStyle:'italic',color:'#ffffff'}}>Tên người sở hữu:</Text>
          </Item>
          <Item style={{...styles.item,backgroundColor:'#333333',height:50,borderRadius:10,marginTop:'-5%',padding:'5%'}}>
           <Text  style={{fontStyle:'italic',color:'#ffffff',textAlign:'center'}}>{hoten}</Text>
          </Item>
          <Item style={{...styles.item}}>
           <Text  style={{fontStyle:'italic',color:'#ffffff'}}>Mã người sở hữu</Text>
          </Item>
          <Item style={{...styles.item,backgroundColor:'#333333',height:50,borderRadius:10,marginTop:'-5%',padding:'5%'}}>
           <Text  style={{fontStyle:'italic',color:'#ffffff',textAlign:'center'}}>{mand}</Text>
          </Item>
          <Item style={{...styles.item}}>
           <Text  style={{fontStyle:'italic',color:'#ffffff'}}>Tên ví tiền </Text>
          </Item>
          <Item style={{...styles.item,backgroundColor:'#333333',height:50,borderRadius:10,marginTop:'-5%',padding:'5%'}}>
           <Text  style={{fontStyle:'italic',color:'#ffffff',textAlign:'center'}}>{tenvitien}</Text>
          </Item>
          <Item style={{...styles.item}}>
           <Text  style={{fontStyle:'italic',color:'#ffffff'}}>Tiền trong ví </Text>
          </Item>
          <Item style={{...styles.item,backgroundColor:'#333333',height:50,borderRadius:10,marginTop:'-5%',padding:'5%'}}>
           <Text  style={{fontStyle:'italic',color:'#ffffff',textAlign:'center'}}>{tien}</Text>
          </Item> 
          <Item style={{...styles.item}}>
           <Text  style={{fontStyle:'italic',color:'#ffffff'}}>Mô tả về ví </Text>
          </Item>
          <Item style={{...styles.item,backgroundColor:'#333333',height:50,borderRadius:10,marginTop:'-5%',padding:'5%'}}>
           <Text  style={{fontStyle:'italic',color:'#ffffff',textAlign:'center'}}>{mota}</Text>
          </Item>
          <Button block onPress={khoanthu} style={{ marginHorizontal: 20,backgroundColor:'#333333',width:300,marginLeft:'2%',marginBottom:'7%'}}>
            <Text style={{color: '#fff', fontWeight: '100', fontSize: 16}}>
             Thêm khoản thu chi
            </Text>
          </Button>
          <Button block onPress={extitt} style={{ marginHorizontal: 20,backgroundColor:'#333333',width:300,marginLeft:'2%' }}>
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
            marginTop:'10%'
    },
    item: {
        marginVertical: 20,
    width:300,
  },
    });
export default taikhoan;