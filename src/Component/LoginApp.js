import React from 'react';
import {View, Text, FlatList, Alert,StyleSheet} from 'react-native';
import Animated from 'react-native-reanimated';
import {Container, ListItem, CheckBox, Body, Right} from 'native-base';
import Card2 from './Login/sign';

import {useSelector, useDispatch} from 'react-redux';

const HomeScreen = ({ navigation }) =>
{
  const {transactions} = useSelector((state) => state.transactions);
  
  return (
    
    <Container style={{...styles.backgroundLogin}}>
      <Animated.View
        style={{
          flex: 1,
          alignItems: 'center',
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}>
        <Card2 navigation={navigation} />
      </Animated.View>
    </Container>
  );
};
const styles= StyleSheet.create({
  backgroundLogin:{
    backgroundColor:'#333333'
  }

});
export default HomeScreen;