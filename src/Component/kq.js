import React,{useState} from 'react';
import {View, Text, FlatList, Alert} from 'react-native';
import Animated from 'react-native-reanimated';
import {Container, ListItem, CheckBox, Body, Right,Left} from 'native-base';
import Card from './ketqua/kq';
import {useSelector, useDispatch} from 'react-redux';

const kq = ({ navigation,route }) =>
{
  const {transactions} = useSelector((state) => state.transactions);
  const [ten,setten] = useState(route.params.ten);
  const [gt,setgt] = useState(route.params.gt);
  const [st,setst] = useState(route.params.st);
  const [userd,setuserd] = useState(route.params.userd);
  return (
    
    <Container>
      <Animated.View
        style={{
          flex: 1,
          alignItems: 'center',
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}>
        <Card dataFromParent={userd}k1={ten}k2={gt}k3={st}navigation={navigation}  />
      </Animated.View>

    </Container>
  );
};

export default kq;