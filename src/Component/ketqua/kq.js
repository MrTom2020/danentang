import React, {useState} from 'react';
import {StyleSheet, View, Text,  Alert,ImageBackground, ScrollView } from 'react-native';
import {useDispatch} from 'react-redux';
import {firebaseApp} from '../firebase.js';
import {Button} from 'native-base';
const kq = (props,{navigation,route}) => 
{
  
    const dispatch = useDispatch();
    const [ten,setten] = useState(props.k1);
     const [gt,setgt] = useState(props.k2);
     const [st,setst] = useState(props.k3);
     const [d,setd] = useState('');
    const Them=()=>
    {
        var sotien = (Number(gt)/Number(st)).toFixed(3);
        setd(sotien);
        return null;
   }
   const ctkc=()=>
    {
        var sotien = (Number(gt)/Number(st)).toFixed(3);
        setd(sotien);
        return null;
   }
    return (
        <ScrollView style={styles.sc}>
      <ImageBackground source={require('../../../image/bbd.jpg')} style={{width:'110%',height:800,flexDirection:'row',alignItems:'center',justifyContent:'center',display:'flex'}}>
         <View style={styles.Box}>
             <Text><Them/>Tên kế hoạch : {ten}{"\nSố tháng tiết kiệm: "}{st}{"\nSố tiền của bạn phải tiết kiệm là : "}{d}VNĐ</Text>
             <Button block onPress={ctkc} style={{...styles.button}}>
            <Text style={{color: '#fff', fontWeight: '450', fontSize: 14}}>
              Kế hoạch nâng cao
            </Text>
          </Button>
       </View>
        </ImageBackground>
        </ScrollView>
    );
    
};

const styles = StyleSheet.create({
        Box: {
            width: '90%',
            height: 200,
            borderRadius: 10,
            flexDirection: 'row',
            marginLeft:'-8%',
            marginTop:'-60%',
            backgroundColor:'#ffffff'
    },
  sc:{
      width: 380,
      height: 800
  },
  button:{
    marginTop:'22%',
    marginLeft:'-40%',
    marginHorizontal: 2,
    backgroundColor:'#333333',
     borderRadius: 15,
     width:160 ,
     height:40,
     zIndex:1000
  }
  
    });
export default kq;