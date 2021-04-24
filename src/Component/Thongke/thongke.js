import React,{useState} from 'react';
import {StyleSheet,ImageBackground, View,Text, Alert} from 'react-native';
import {Button} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';
import {firebaseApp} from '../firebase';
import {VictoryChart,VictoryGroup,VictoryBar, VictoryLegend} from 'victory-native';
const thongke = (props,{navigation}) => {
  const {transactions} = useSelector((state) => state.transactions);
  const [userd,setuserd] = useState(props.dataFromParent);
   const [tt,settt] = useState('');
   const [thu,setthu] = useState('');
   const [tientv,settientv] = useState('');
   const [ttt,setttt] = useState('');
   const [conlai,setconlai] = useState('');
   const data = {
     planned:[null,{x:'kk1',y:10}],
     actual:[
       {x:'kk4',y:10},
       {x:'kk2',y:20},
       {x:'kk3',y:20}
     ]
   };
   const Them=()=>
   {
   var tienTV;
   var cc = 0;
   var cc2 = 0;
   var pt;
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
    var tienn = tientv + cc;
   // settientv(tienn);
     pt =(Number(cc) / Number(tienn) * 100).toFixed(3);
     var cl = 100 - Number(pt);
     setconlai("\nTiền còn lại trong ví là " + tientv + " Chiếm " + cl + "%");
     setttt("\nSố chi của bạn chiếm :" +pt.toString() + "%");
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
      });
    });
    return null;
  }
 

  return (
    // <ImageBackground source={require('../../../image/bbd.jpg')} style={{width:'110%',height:'100%',flexDirection:'row',alignItems:'center',justifyContent:'center',display:'flex'}}>
    //   <View style={{...styles.Box}}>
    //   <Text><Them/>{tt}{thu}{ttt}{conlai}</Text>
    //   </View>
      
    // </ImageBackground>
    <View>
      <VictoryChart>
        <VictoryGroup offset={10}>
        <VictoryBar
          data={data.actual}
          style={{
            data:{
              fill:'blue'}}}/>
          <VictoryBar
          data={data.planned}
          style={{
            data:{
              fill:'blue'}}}/>
              
        </VictoryGroup>
        <VictoryLegend
        data={[
          {
            name:'ook',
            symbol:{
              fill:'blue'
            },
          },
          {
            name:'ok',
            symbol:{
              fill:'#333333'
            }
          }
        ]}/>
      </VictoryChart>
    </View>
    
  );
};

const styles = StyleSheet.create({
  Box: {
    width: '90%',
    height: 400,
    borderRadius: 15,
    backgroundColor:'#ffffff',
    flexDirection: 'row',
    padding: 22,
  },
});

export default thongke;