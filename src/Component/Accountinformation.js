import React,{useState} from 'react';
import {View, Text,StyleSheet,ScrollView} from 'react-native';
import Animated from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import {Container,Label, Form,Item,Input,Button} from 'native-base';
import {firebaseApp} from './firebase.js';
import {useSelector, useDispatch} from 'react-redux';

const Accountinformation = ({ navigation,route }) =>
{
  const {transactions} = useSelector((state) => state.transactions);
  const dispatch = useDispatch();
    const [hoten, sethoten] = useState('******************');
    const [quequan, setquequan] = useState('******************');
    const [ngaysinh, setngaysinh] = useState('******************');
    const [diachi, setdiachi] = useState('******************');
    const [sdt, setsdt] = useState('******************');
    const [cmnd, setcmnd] = useState('******************');
    const [matkhau, setmatkhau] = useState('******************');
    const [userd,setuserd] = useState(route.params.userd);
    const extitt = () => 
    {
        return navigation.navigate('Home2');
    };
    const readUserdata=()=>
    {
      firebaseApp.database().ref('users/' + userd +'/k2/k/thongtincn').on('value',function(snapshot)
      {
      // console.log(snapshot.child('Diachi').val());
      sethoten(snapshot.child('Ten').val());
      setquequan(snapshot.child('Quequan').val());
      setngaysinh(snapshot.child('Ngaysinh').val());
      setdiachi(snapshot.child('Diachi').val());
      setsdt(snapshot.child('Sdt').val());
      setcmnd(snapshot.child('Cmnd').val());
      setmatkhau(snapshot.child('Matkhau').val());
      })
    }
  return (
    
    <Container style={{backgroundColor:'#333333'}}>
      <Animated.View
        style={{
          flex: 1,
          alignItems: 'center',
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}>
        <ScrollView>
        <LinearGradient
            colors={['#81FBB8', '#28C76F']}
            style={styles.Box}>
            <View style={{ width: '100%', alignItems: 'flex-start' }}>
          <Form>
            <Label style={{marginLeft:'35%',fontSize:25,fontStyle:'italic',fontWeight:'bold',paddingBottom:'10%'}}>Thông tin tài khoản</Label>
          <Item style={{...styles.item}}>
            <Text>Tên:   {hoten}</Text>
          </Item>
          <Item style={{...styles.item}}>
            <Text>CMND  :{cmnd}</Text>
          </Item>
          <Item style={{...styles.item}}>
            <Text>SDT   :{sdt}</Text>
          </Item>
          <Item style={{...styles.item}}>
            <Text>Địa chỉ :{diachi}</Text>
          </Item>
          <Item style={{...styles.item}}>
            <Text>Ngày sinh :{ngaysinh}</Text>
          </Item>
          <Item style={{...styles.item}}>
            <Text>Quê quán   :{quequan}</Text>
          </Item>
          <Item style={{...styles.item}}>
            <Text>Mật khẩu   :{matkhau}</Text>
          </Item>
            <Button block onPress={extitt} style={{ marginHorizontal: 20,backgroundColor:'#333333',width:300 }}>
            <Text style={{color: '#fff', fontWeight: '100', fontSize: 16}}>
             Thoát ra
            </Text>
          </Button>
          <Button block onPress={readUserdata} style={{ marginHorizontal: 20,backgroundColor:'#333333' ,width:300}}>
            <Text style={{color: '#fff', fontWeight: '100', fontSize: 16}}>
           Hiện  thông tin
            </Text>
          </Button>
        </Form>
            </View>

     
        </LinearGradient>
        </ScrollView>
      </Animated.View>
    </Container>
  );
};
 function readUserdata(userd,hoten)
{
}
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
width:'100%',
},
});
export default Accountinformation;