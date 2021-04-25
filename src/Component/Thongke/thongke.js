import React,{useState} from 'react';
import {StyleSheet,ImageBackground, View,Text, Alert} from 'react-native';
import {Button} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';
import {firebaseApp} from '../firebase';
import {VictoryChart,VictoryGroup,VictoryBar, VictoryLegend,VictoryPie} from 'victory-native';
import { block } from 'react-native-reanimated';
const thongke = (props,{navigation}) => {
  const {transactions} = useSelector((state) => state.transactions);
  const [userd,setuserd] = useState(props.dataFromParent);
   const [tt,settt] = useState('');
   const [thu,setthu] = useState('');
   const [tientv,settientv] = useState('');
   const [ttt,setttt] = useState('');
   const [conlai,setconlai] = useState('');
   const [tiendt,settiendt] = useState('');
   const [ptc,setptc] = useState('');
   const [ptt,setptt] = useState('');
   const [ptcl,setptcl] = useState('');
   const data = {
    actual:[
     { x: 'x', y: 10 }, { x: 'y', y: 12 }, { x: 'z', y: 5 }
    ]
  };
   const Them=()=>
   {
   var tienTV;
   var cc = 0;
   var cc2 = 0;
   var pt,pt2;
   var tienn;
   var ref3= firebaseApp.database().ref('users/' + userd + '/k3/k').child('ViTien');
    ref3.once('value',(snapshot)=>
    {
      tienTV =snapshot.val();
      settientv(tienTV);
    });
    var ref= firebaseApp.database().ref('users/' + userd + '/k3').child('Khoanchi');
    ref.on('child_added',(snapshot)=>
    {
      var child = snapshot.key;
      var child2= firebaseApp.database().ref('users/' + userd +'/k3/Khoanchi/' + child).child('Giatri');
     child2.once('child_added',(snapshot2)=>
      {
        var c = snapshot2.val();
       cc +=Number(c);
        settt("Tổng Khoản chi :"+cc);
      });
    });
    tienn = tientv + cc;
   // settientv(tienn);
     pt =(Number(cc) / Number(tienn) * 100).toFixed(3);
     setttt("\nSố chi của bạn là "+cc.toString() + " chiếm :" +pt.toString() + "%");
    var ref2= firebaseApp.database().ref('users/' + userd + '/k3').child('khoanthu');
    ref2.on('child_added',(snapshot)=>
    {
      var child = snapshot.key;
      var child2= firebaseApp.database().ref('users/' + userd +'/k3/khoanthu/' + child).child('Giatri');
     child2.once('child_added',(snapshot2)=>
      {
        var c = snapshot2.val();
       // Alert.alert(c.toString());
       cc2 +=Number(c);
        setthu("\nTổng Khoản thu :"+cc2);
        pt2 =(Number(cc2) / Number(tienn) * 100).toFixed(3);
        var cl = 100 - Number(pt) - Number(pt2);
        setptcl(cl);
        setptt(pt2);
        setptc(pt);
       setconlai("\nTiền còn lại trong ví là " + tientv + " Chiếm " + cl + "%");
        settiendt("\nTổng Số tiền doanh thu là " + cc2.toString() + " Chiếm " + pt2.toString() + "%");
      });
    });
    return null;
  }
 

  return (
    <ImageBackground source={require('../../../image/bbd.jpg')} style={{width:'110%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center',flexWrap:'wrap'}}>
      <View style={{...styles.Box}}>
      <Them/>
        <VictoryPie
        padding={{top: 35, bottom: 60,left:10}}
        width={350} height={350}
         data={[
        { x: 1, y: ptc},
        { x: 2, y: ptcl },
       { x: 3, y: ptt}
       ]}
          />
      <Text style={{width:'100%',color:'#FAAD3D',backgroundColor:'#333333',borderRadius:10}}>{tt}{thu}{ttt}{conlai}{tiendt}{"\n"}1 : Tiền chi {"\n"}
      2:Tiền trong ví{"\n"}
      3:Tiền doanh thu</Text>
      <Button block onPress={Them} style={{...styles.button}}>
            <Text style={{color: '#fff', fontWeight: '450', fontSize: 14}}>
              Xem chi tiết khoản chi
            </Text>
          </Button>
          <Button block onPress={Them} style={{...styles.button}}>
            <Text style={{color: '#fff', fontWeight: '450', fontSize: 14}}>
              Xem chi tiết khoản thu
            </Text>
          </Button>
      </View>
    </ImageBackground>
    
  );
};

const styles = StyleSheet.create({
  Box: {
    width: '100%',
    height: 550,
    borderRadius: 15,
    backgroundColor:'#ffffff',
    flexDirection: 'row',
    padding: 22,
    flexWrap:'wrap'

  },
  button:{
    marginTop:'12%',
    marginHorizontal: 2,
    backgroundColor:'#333333',
     borderRadius: 15,
     width:160 ,
     height:40
  }
  
});

export default thongke;