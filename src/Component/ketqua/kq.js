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
     const [csgd,setcsgd] = useState(props.k4);
     const [yte,setyte] = useState(props.k5);
     const [anuong,setanuong]  = useState(props.k6);
     const [dilai,setdilai] = useState(props.k7);
     const [khac,setkhac] = useState(props.k8);
     const [tien,settien] = useState('');
     const [thangtc,setthangtc] = useState('');
     const [thangbt,setthangbt] = useState('');
     const [thangtn,setthangtn] = useState('');
     const [tthangtc,settthangtc] = useState('');
     const [tthangbt,settthangbt] = useState('');
     const [tthangtn,settthangtn] = useState('');
     const [userd,setuserd] = useState(props.dataFromParent);
   
     const [d,setd] = useState('');
    const Them=()=>
    {
        var stgd = (Number(csgd)/100 * gt).toFixed(1);
        var yt  = (Number(yte)/100 * gt).toFixed(1);
        var au  = (Number(anuong)/100 * gt).toFixed(1);
        var dl  = (Number(dilai)/100 * gt).toFixed(1);
        var k  = (Number(khac)/100 * gt).toFixed(1);
        var tienconlai =Number(gt) - Number(stgd) + Number(yt) + Number(au) + Number(dl) + Number(k);
        settien(tienconlai);
        var sothang = Math.round((Number(st) / Number(tienconlai)));
        var sotn = Math.round(Number(sothang) - (Number(sothang) * 10 /100));
        var sotbt = Number(sothang);
        var sott = Math.round(Number(sothang) + (Number(sothang) * 10 /100));
        var tsothang =(Number(st) / Number(sotn)).toFixed(1);
        var tsotn = (Number(st) / Number(sotbt)).toFixed(1);
        var tsotbt = (Number(st) / Number(sott)).toFixed(1);
        setthangtc(sotn);
        setthangbt(sotbt);
        setthangtn(sott);
        settthangtc(tsothang);
        settthangbt(tsotn);
        settthangtn(tsotbt);
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
             <Text><Them/>Tên kế hoạch : {ten}
             {"\nSố tiền bạn phải tiết kiệm là : "}{st}
             {"\nSố tháng tiết kiệm theo điều kiện tốt nhất: "}{thangtc}{"\n"}{tthangtc}{"/tháng"}
             {"\nSố tháng tiết kiệm theo điều kiện bình thường: "}{thangbt}{"\n"}{tthangbt}{"/tháng"}
             {"\nSố tháng tiết kiệm theo điều kiện tồi tệ nhất: "}{thangtn}{"\n"}{tthangtn}{"/tháng"}
             {"\n\n\n*Số liệu dựa theo điều kiện kin tế khó khăn kinh tế trong mùa dịch "}
             </Text>
       </View>
        </ImageBackground>
        </ScrollView>
    );
    
};

const styles = StyleSheet.create({
        Box: {
            width: '90%',
            height: 240,
            borderRadius: 10,
            flexDirection: 'row',
            marginLeft:'-8%',
            marginTop:'-60%',
            backgroundColor:'#ffffff'
    },
  sc:{
      width: 380,
      height: 800
  }
  
    });
export default kq;