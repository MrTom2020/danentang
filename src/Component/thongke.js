import React,{useState} from 'react';
import {View, Text, FlatList, Alert} from 'react-native';
import Animated from 'react-native-reanimated';
import {Container, ListItem, CheckBox, Body, Right,Left} from 'native-base';
import Card from './Parts/Card';
import Empty from './Parts/Empty';
import {useSelector, useDispatch} from 'react-redux';
import {deleteTransaction} from '../store/actions/transactionAction';
import {getDatabase,firebaseApp,ref, onChildAdded, onChildChanged, onChildRemoved} from './firebase';
function Item({title})
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
      </ListItem>
    </View>
  );
}
function Ddl(Data)
{
    var t = firebaseApp.database().ref('users/' + 'V5pqBxpkMHaEytfn7kaM5Dq63vf1' + '/k3/' + 'k');
    t.once('value',(snapshot) =>{
      
        snapshot.forEach((childSnapshot)=>{
            let item = {
                id: childSnapshot.key,
                value: childSnapshot.val(),
            }
            //arr.push(item);
            var childData = childSnapshot.val();
             Alert.alert(item.value.toString());      
            Data.push(childData);
        });
        //return setData(Data);
    });
    //const db = getDatabase();
}
const thongke = ({ navigation,route }) =>
{
  const {transactions} = useSelector((state) => state.transactions);
  const [password, setPassword] = useState('123456789');
  const [username, setUsername] = useState('t@gmail.com');
  const [userd,setuserd] = useState(route.params.userd);
  const [Data,setData] = useState([]);
  //arr=[];

  
  Ddl(Data);
  //setData(Data);
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
        {Data.length > 0 ? (
          <FlatList
            data={Data}
            renderItem={({item}) => (
              <Item key={item.id} title={item.value} />
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

export default thongke;