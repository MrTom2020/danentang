import React,{useState} from 'react';
import {StyleSheet} from 'react-native';
import Animated from 'react-native-reanimated';
import {Container} from 'native-base';
import Card2 from './Taikhoan/taikhoan';

import {useSelector, useDispatch} from 'react-redux';

const taikhoan = ({ navigation,route }) =>
{
  const {transactions} = useSelector((state) => state.transactions);
  const [userd,setuserd] = useState(route.params.userd);
  const [username,setUsername] = useState(route.params.username);
  return (
    
    <Container style={{...styles.backgroundLogin}}>
      <Animated.View
        style={{
          flex: 1,
          alignItems: 'center',
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}>
        <Card2 k1={userd} k2={username}  navigation={navigation} />
      </Animated.View>
    </Container>
  );
};
const styles= StyleSheet.create({
  backgroundLogin:{
    backgroundColor:'#333333'
  }

});
export default taikhoan;