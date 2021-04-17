import React,{useState} from 'react';
import {StyleSheet} from 'react-native';
import Animated from 'react-native-reanimated';
import {Container} from 'native-base';
import Card2 from './Khoanthuchi/khoanthuchi';

import {useSelector, useDispatch} from 'react-redux';

const khoanthuchi = ({route,navigation }) =>
{
  const {transactions} = useSelector((state) => state.transactions);
  const [hoten, sethoten] = useState(route.params.hoten);
  const [tien,setvitien] = useState(route.params.tien);
  const [mand,setmand] = useState(route.params.mand);
  return (
    
    <Container style={{...styles.backgroundLogin}}>
      <Animated.View
        style={{
          flex: 1,
          alignItems: 'center',
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}>
        <Card2 k1={tien} k2={hoten} k3={mand} navigation={navigation} />
      </Animated.View>
    </Container>
  );
};
const styles= StyleSheet.create({
  backgroundLogin:{
    backgroundColor:'#333333'
  }

});
export default khoanthuchi;