import React, {useState} from 'react';
import {StyleSheet, View, Text,  Alert,ImageBackground } from 'react-native';
import {Button, Form,Item, Input, Label} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import {LoginApp} from '../../store/actions/transactionAction';

import {useDispatch} from 'react-redux';
import {firebaseApp} from '../firebase.js';
import auth from '@react-native-firebase/auth';
const chitietkhoanchi = (props,{navigation}) => 
{
  
    const dispatch = useDispatch();
    const [username, setUsername] = useState('t@gmail.com');
    const [password, setPassword] = useState('123456789');
    const [userid,setuserid] = useState('');
    const [userd, setuserd] = useState(props.dataFromParent);
    var ss = firebaseApp.database().ref('lili');
    const [tienchi,settienchi] = useState(props.k1);
    const [t,sett] = useState('');
    const Them=()=>
    {
    var tienTV;
    var cc = '';
    var tienn;
     var ref= firebaseApp.database().ref('users/' + userd + '/k3').child('Khoanchi');
     ref.on('child_added',(snapshot)=>
     {
       var child = snapshot.key;
       var child2 = snapshot.val().Tenkc;
       var child3 = snapshot.val().Thoigiangd;
       var child4 = snapshot.val().Vitien;
        cc +=child2;
       Alert.alert(child2.toString());
       var child2= firebaseApp.database().ref('users/' + userd +'/k3/Khoanchi/' + child).child('Giatri');
      child2.once('child_added',(snapshot2)=>
       {
         var c = snapshot2.val();
       });
     });
     sett(cc);
     return null;
   }
   const dktaikhoan =()=>
   {
    return navigation.navigate('signup');
   };
    return (
      <ImageBackground source={require('../../../image/bbd.jpg')} style={{width:'110%',height:'100%',flexDirection:'row',alignItems:'center',justifyContent:'center',display:'flex'}}>
       <Text><Them/>{t}</Text>    
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
export default chitietkhoanchi;