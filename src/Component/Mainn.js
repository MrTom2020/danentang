import React, {useState} from 'react';
import {View, Text, FlatList, Alert,Image, ImageBackground,StyleSheet} from 'react-native';
import Animated from 'react-native-reanimated';
import {Container, ListItem, CheckBox, Body, Right,Button, Form,Item, Input, Label} from 'native-base';
import Empty from './Parts/Empty';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector, useDispatch} from 'react-redux';
import {deleteTransaction,LoginApp} from '../store/actions/transactionAction';
import { NavigationContainer } from '@react-navigation/native';
import Transaction from '../store/reducers/Transaction';
const Mainn = ({ navigation,route }) =>
{
  
  const {transactions} = useSelector((state) => state.transactions);
  const [username, setUsername] = useState('');
  const {password} = transactions.map((LoginApp)=>LoginApp.password);
  const userid = transactions.map((LoginApp)=>LoginApp.userid);
  const [userd,setuserd] = useState(route.params.userd);
  const onSubmit=()=>
    {

     // setPassword(transactions.password);
      //return alert(password);
      return navigation.navigate('Home',{userd});
    }
    const taikhoan=()=>
    {
      return navigation.navigate('Accountinformatio',{userd});
    }
    const thongke=()=>
    {
      return navigation.navigate('Home',{userd});
    }
  return (
    <Container style={{backgroundColor:'#333333'}}>
      <Image source={require('../../image/ddep.jpg')} style={{width:'100%',height:'80%',flexDirection:'row',alignItems:'center',justifyContent:'center'}}/>
      <Animated.View
        style={{
          flex: 1,
          alignItems: 'center',
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}>
        <LinearGradient
            colors={['#81FBB8', '#28C76F']}
            style={styles.Box}>
            <View style={{ width: '100%', alignItems: 'flex-start' }}>
          <Form style={{flexDirection:'row', flexWrap:'wrap'}}>
          
            <Button block onPress={onSubmit} style={{ marginHorizontal: 2,backgroundColor:'#333333', borderRadius: 15,width:90 }}>
            <Text style={{color: '#fff', fontWeight: '100', fontSize: 14}}>
             Trang Chủ{password}
            </Text>
          </Button>
          <Button block onPress={taikhoan} style={{ marginHorizontal: 2,backgroundColor:'#333333',borderRadius: 15,width:90  }}>
            <Text style={{color: '#fff', fontWeight: '100', fontSize: 14}}>
             Tài Khoản
            </Text>
          </Button>
          <Button block onPress={thongke} style={{ marginHorizontal: 2,backgroundColor:'#333333' ,borderRadius: 15,width:90 }}>
            <Text style={{color: '#fff', fontWeight: '100', fontSize: 14}}>
            Thống kê
            </Text>
          </Button>
        </Form>
            </View>
        </LinearGradient>
        
      </Animated.View>
    </Container>
  );
};
const styles = StyleSheet.create({
  Box: {
      width: '100%',
      height: 90,
      borderRadius: 15,
      flexDirection: 'row',
      padding: 22,
      marginTop:'-1%',
      zIndex:100

},
});
export default Mainn;