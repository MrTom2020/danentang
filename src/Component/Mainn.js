import React from 'react';
import {View, Text, FlatList, Alert} from 'react-native';
import Animated from 'react-native-reanimated';
import {Container, ListItem, CheckBox, Body, Right} from 'native-base';
import Card from './Main/main';
import Empty from './Parts/Empty';
import {useSelector, useDispatch} from 'react-redux';
import {deleteTransaction} from '../store/actions/transactionAction';



const Mainn = ({ navigation }) =>
{
  const {transactions} = useSelector((state) => state.transactions);
  
  return (
    
    <Container style={{backgroundColor:'#333333'}}>
      <Animated.View
        style={{
          flex: 1,
          alignItems: 'center',
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}>
        <Card navigation={navigation} />
      </Animated.View>
    </Container>
  );
};

export default Mainn;