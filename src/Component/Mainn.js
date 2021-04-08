import React, {useState} from 'react';
import {View, Text, FlatList, Alert,Image, ImageBackground} from 'react-native';
import Animated from 'react-native-reanimated';
import {Container, ListItem, CheckBox, Body, Right} from 'native-base';
import Card from './Main/main';
import Empty from './Parts/Empty';
import {useSelector, useDispatch} from 'react-redux';
import {deleteTransaction} from '../store/actions/transactionAction';
import { NavigationContainer } from '@react-navigation/native';
const Mainn = ({ navigation,route }) =>
{
  const {transactions} = useSelector((state) => state.transactions);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userid,setuserid] = useState('');
  const [userd,setuserd] = useState(route.params.userd);
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
        <Card navigation={navigation} />
        
      </Animated.View>
      <View><Text>123{userd}</Text></View>
    </Container>
  );
};

export default Mainn;