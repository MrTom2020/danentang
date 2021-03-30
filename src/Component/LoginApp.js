import React from 'react';
import {View, Text, FlatList, Alert} from 'react-native';
import Animated from 'react-native-reanimated';
import {Container, ListItem, CheckBox, Body, Right} from 'native-base';
import Card2 from './Login/sign';

import {useSelector, useDispatch} from 'react-redux';

function Loginn({ username, password })
{
  const dispatch = useDispatch();
  return (
    <Body>
           <Text
            style={{
              fontFamily: 'Lato-Bold',
              fontSize: 14,
              fontWeight: '400',
              color: username === '123' ? '#009BFC' : '#ff4500',
            }}>
            {username === '123' ? `ok` : `khong`}
          </Text>
        </Body>
  );
}
const HomeScreen = ({ navigation }) =>
{
  const {transactions} = useSelector((state) => state.transactions);
  
  return (
    
    <Container>
      <Animated.View
        style={{
          flex: 1,
          alignItems: 'center',
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}>
        <Card2 navigation={navigation} />
      </Animated.View>
      <View style={{flex: 1, marginTop: -150}}>
        {transactions.length > 0 ? (
          <FlatList
            data={transactions}
            renderItem={({item}) => (
              <Loginn username={item.username} password={item.password} />
            )}
          />
        ) : (
           <Text>HI</Text>
        )}
      </View>
    </Container>
  );
};

export default HomeScreen;