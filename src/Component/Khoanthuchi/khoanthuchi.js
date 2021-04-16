import React, {useState} from 'react';
import {StyleSheet, View, Text, Alert, ScrollView} from 'react-native';
import {Button, Form,Item, Input, Label} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch} from 'react-redux';
import {firebaseApp} from '../firebase.js';
const khoanthuchi = (props,{navigation}) => 
{
  /* hoten, quequan, ngaysinh,diachi,sdt,cmnd*/
    const dispatch = useDispatch();
    const [hoten, sethoten] = useState(props.k2);
    const [tenkhoanthuchi, setquequan] = useState('');
    const [tien,setvitien] = useState(props.k1);
    const [giatri, setngaysinh] = useState('');
    const [thoigiangd, setdiachi] = useState('');
    const onSubmit = () => 
    {
      if(!hoten || !tenkhoanthuchi || !giatri)
      {
        return alert("Xin vui lòng điền đầy đủ thông tin");
      }
      else
      {
        firebaseApp.auth().createUserWithEmailAndPassword(hoten, matkhau)
            .then(function (currentUser) 
            {
             this.itemRef = firebaseApp.database().ref('users/' + firebaseApp.auth().currentUser.uid + '/k2');
             this.itemRef.set({
              k:{
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
           <Text>Họ tên </Text>
          </Item>
          <Item style={{...styles.item,backgroundColor:'#333333',height:50,borderRadius:10,marginTop:'-5%',padding:'5%'}}>
           <Text style={{fontStyle:'italic',color:'#ffffff',textAlign:'center'}}>{hoten}</Text>
          </Item>
          <Item style={{...styles.item}}>
           <Text>Tiền trong ví </Text>
          </Item>
          <Item style={{...styles.item,backgroundColor:'#333333',height:50,borderRadius:10,marginTop:'-5%',padding:'5%'}}>
           <Text style={{fontStyle:'italic',color:'#ffffff',textAlign:'center'}}>{tien}</Text>
          </Item>
          <Item style={{...styles.item}}>
           <Text>Họ tên </Text>
          </Item>
          <Item style={{...styles.item,backgroundColor:'#333333',height:50,borderRadius:10,marginTop:'-5%',padding:'5%'}}>
           <Text style={{fontStyle:'italic',color:'#ffffff',textAlign:'center'}}>{hoten}</Text>
          </Item>
          <Item style={{...styles.item}}>
           <Text>Họ tên </Text>
          </Item>
          <Item style={{...styles.item,backgroundColor:'#333333',height:50,borderRadius:10,marginTop:'-5%',padding:'5%'}}>
           <Text style={{fontStyle:'italic',color:'#ffffff',textAlign:'center'}}>{hoten}</Text>
          </Item>
          <Item style={{...styles.item}}>
           <Text>Họ tên </Text>
          </Item>
          <Item style={{...styles.item,backgroundColor:'#333333',height:50,borderRadius:10,marginTop:'-5%',padding:'5%'}}>
           <Text style={{fontStyle:'italic',color:'#ffffff',textAlign:'center'}}>{hoten}</Text>
          </Item>
            <Button block onPress={onSubmit} style={{ marginHorizontal: 20,backgroundColor:'#333333',marginBottom:'10%'}}>
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
    width:300,
  },
    });
export default khoanthuchi;