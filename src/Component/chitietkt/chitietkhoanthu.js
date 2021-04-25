import React, {useState} from 'react';
import {StyleSheet, View, Text,  Alert,ImageBackground, ScrollView } from 'react-native';
import {Button, Form,Item, Input, Label} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import {LoginApp} from '../../store/actions/transactionAction';

import {useDispatch} from 'react-redux';
import {firebaseApp} from '../firebase.js';
import auth from '@react-native-firebase/auth';
const chitietkhoanthu = (props,{navigation}) => 
{
  
    const dispatch = useDispatch();
    const [username, setUsername] = useState('t@gmail.com');
    const [password, setPassword] = useState('123456789');
    const [userid,setuserid] = useState('');
    const [userd, setuserd] = useState(props.dataFromParent);
    const [tienthu,settienthu] = useState(props.k1);
    const [t,sett] = useState('');
    const Them=()=>
    {
    var tienTV;
    var cc = '';
    var tienn;
     var ref= firebaseApp.database().ref('users/' + userd + '/k3').child('khoanthu');
     ref.on('child_added',(snapshot)=>
     {
       var child = snapshot.key;
       var child2 = snapshot.val().Tenkc;
       var child3 = snapshot.val().Thoigiangd;
       var child4 = snapshot.val().Vitien;
        cc +="\nTên giao dịch : "+child2.toString() + "\nThời gian : " + child3.toString() ;
       var child5= firebaseApp.database().ref('users/' + userd +'/k3/khoanthu/' + child).child('Giatri');
      child5.on('child_added',(snapshot2)=>
       {
         var c = snapshot2.val();
         var pt = (Number(c)/Number(tienthu) * 100).toFixed(3);
         cc+="\n Giá trị : " + c+ " VNĐ\nChiếm : " + pt + "% \n";
         sett(cc);
         for(var k =0; k < 28;k++)
         {
             cc+="---";
         }
       });
     });
     cc+="\n";
     sett(cc);
     return null;
   }
   const dktaikhoan =()=>
   {
    return navigation.navigate('signup');
   };
    return (
        <ScrollView style={styles.sc}>
      <ImageBackground source={require('../../../image/bbd.jpg')} style={{width:'110%',height:'100%',flexDirection:'row',alignItems:'center',justifyContent:'center',display:'flex'}}>
         <View style={styles.Box}>
       <Text><Them/>{t}</Text> 
       </View>
        </ImageBackground>
        </ScrollView>
    );
    
};

const styles = StyleSheet.create({
        Box: {
            width: '90%',
            height: 600,
            borderRadius: 10,
            flexDirection: 'row',
            marginLeft:'-8%',
            marginTop:'20%',
            backgroundColor:'#ffffff'
    },
  sc:{
      width: 380
  }
  
    });
export default chitietkhoanthu;