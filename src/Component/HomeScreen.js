import React,{useState} from 'react';
import {View, Text, FlatList, Alert} from 'react-native';
import Animated from 'react-native-reanimated';
import {Container, ListItem, CheckBox, Body, Right,Left} from 'native-base';
import Card from './Parts/Card';
import Empty from './Parts/Empty';
import {useSelector, useDispatch} from 'react-redux';
import {deleteTransaction,LoginApp} from '../store/actions/transactionAction';
import {
  NavigationContainer,
  DarkTheme,
  DrawerActions
} from '@react-navigation/native';

function Item({title,price,id})
 {
  const dispatch = useDispatch();
  return (
    <View
      style={{
        marginVertical: 3,
        paddingHorizontal: 30,
        paddingVertical: 15,
      }}>
      <ListItem>
        <CheckBox
          onPress={() => {
            dispatch(deleteTransaction(id));
          }}
          color="#ff4500"
          checked={true}
        />

        <Left>
          <Text style={{fontSize: 17, fontWeight: '700', marginLeft: 20}}>
            {title}
          </Text>
        </Left>

        <Right>
          <Text
            style={{fontSize: 12, fontWeight: '700', marginLeft: -100,
              color: price > 0 ? '#009BFC' : '#ff4500',
            }}>
            {price > 0 ? `${price}VNĐ` : `${Math.abs(price)}VNĐ`}
          </Text>
        </Right>
      </ListItem>
    </View>
  );
}

const HomeScreen = ({ navigation,route }) =>
{
  const {transactions} = useSelector((state) => state.transactions);
  const [password, setPassword] = useState('123456789');
  const [username, setUsername] = useState('t@gmail.com');
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
        <Card dataFromParent={userd}k1={username} navigation={navigation}  />
      </Animated.View>

      <View style={{flex: 1, marginTop: -150}}>
        {transactions.length > 0 ? (
          <FlatList
            data={transactions}
            renderItem={({item}) => (
              <Item key={item.id} title={item.title} price={item.price} id={item.id} />
            )}
            keyExtractor={(item) => item.id}
          />
        ) : (
            <Empty />
        )}
      </View>
    </Container>
  );
};

export default HomeScreen;