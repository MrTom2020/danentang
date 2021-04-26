import React,{useState} from 'react';
import {View, Text, FlatList, Alert} from 'react-native';
import Animated from 'react-native-reanimated';
import {Container, ListItem, CheckBox, Body, Right,Left} from 'native-base';
import Card from './Parts/Card';
import {useSelector, useDispatch} from 'react-redux';
const HomeScreen = ({ navigation,route }) =>
{
  const {transactions} = useSelector((state) => state.transactions);
  const [password, setPassword] = useState('123456789');
  const [username, setUsername] = useState('t@gmail.com');
  const [userd,setuserd] = useState(route.params.userd);
  return (
    
    <Container style={{backgroundColor:'#333333'}}>
      <Animated.View
        style={{
          flex: 1,
          alignItems: 'center',
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}>
        <Card dataFromParent={userd}k1={username} navigation={navigation}  />
      </Animated.View>

    </Container>
  );
};

export default HomeScreen;