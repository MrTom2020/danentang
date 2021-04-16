import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Button} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';
const Balance = (props,{navigation}) => {
  const {transactions} = useSelector((state) => state.transactions);

  const prices = transactions.map((transaction) => transaction.price);
  const totalPrice = prices.reduce((prev, cur) => (prev += cur),0).toFixed(3);
  const them=()=>
  {
   //return navigation.navigate('Add'); 
  }
  const expense =
    prices
      .filter((price) => price < 0)
      .reduce((prev, cur) => (prev += cur), 0)
      .toFixed(3) * -1;

  return (
    <LinearGradient
      colors={['#FAAD3D', '#EFC90A', '#F1CB0C']}
      style={styles.Box}>
      <View style={{width: '70%', alignItems: 'flex-start'}}>
        <Text
          style={{
            fontSize: 15,
            color: '#fff',
            fontFamily: 'Lato-Regular',
            fontWeight: '700',
          }}>
          Thu nhập
        </Text>
        <Text
          style={{
            fontFamily: 'Lato-Medium',
            fontSize: 32,
            color: '#fff',
            fontWeight: '700',
          }}>
          {totalPrice}VNĐ
        </Text>

        <Text
          style={{
            marginTop: 67,
            color: '#fff',
            fontFamily: 'Lato-Regular',
            fontSize: 12,
            fontWeight: '700',
          }}>
          Mã: {'************'+"\n"}
          Tên: {props.k1}
        </Text>
      </View>

      <View
        style={{
          alignItems: 'flex-end',
          width: '30%',
        }}>
        <Text style={{fontSize: 18, color: '#fff', fontWeight: '700'}}>
          VNĐ
        </Text>
        <View style={{flex: 1}}>
          <Button
            rounded
            light
            style={{
              padding: 10,
              marginTop: 32,
              borderWidth: 3,
              borderColor: '#fff',
              backgroundColor: '#E10C62',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => {
             props.navigation.navigate('Add');
            }}>
            <Text style={{color: '#fff', fontWeight: '700', fontSize: 12}}>
              Thêm vào
            </Text>
          </Button>

          <Text
            style={{
              marginTop: 17,
              marginLeft:10,
              color: '#fff',
              fontSize: 12,
              fontWeight: '700',
            }}>
              Chi phí
          </Text>
          <Text
            style={{
              color: '#fff',
              fontSize: 12,
              marginLeft:10,
              fontWeight: '700',
            }}>
            {expense}VNĐ
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  Box: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    flexDirection: 'row',
    padding: 22,
  },
});

export default Balance;