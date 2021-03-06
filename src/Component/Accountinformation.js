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
            <Label style={{marginLeft:'35%',fontSize:25,fontStyle:'italic',fontWeight:'bold',paddingBottom:'10%'}}>Th??ng tin t??i kho???n</Label>
          <Item style={{...styles.item}}>
            <Text>T??n:   {hoten}</Text>
          </Item>
          <Item style={{...styles.item}}>
            <Text>CMND  :{cmnd}</Text>
          </Item>
          <Item style={{...styles.item}}>
            <Text>SDT   :{sdt}</Text>
          </Item>
          <Item style={{...styles.item}}>
            <Text>?????a ch??? :{diachi}</Text>
          </Item>
          <Item style={{...styles.item}}>
            <Text>Ng??y sinh :{ngaysinh}</Text>
          </Item>
          <Item style={{...styles.item}}>
            <Text>Qu?? qu??n   :{quequan}</Text>
          </Item>
          <Item style={{...styles.item}}>
            <Text>M???t kh???u   :{matkhau}</Text>
          </Item>
            <Button block onPress={extitt} style={{ marginHorizontal: 20,backgroundColor:'#333333',width:300 }}>
            <Text style={{color: '#fff', fontWeight: '100', fontSize: 16}}>
             Tho??t ra
            </Text>
          </Button>
          <Button block onPress={readUserdata} style={{ marginHorizontal: 20,backgroundColor:'#333333' ,width:300}}>
            <Text style={{color: '#fff', fontWeight: '100', fontSize: 16}}>
           Hi???n  th??ng tin
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