import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import {Button, Form,Item, Input, Label} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import {LoginApp} from '../../store/actions/transactionAction';
import {useDispatch} from 'react-redux';
const sign = ({navigation}) => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = () => {
        if (!username || !password) {
            return alert('Vui lòng điền vào tất cả các ô');
      }
        else
        {
          return navigation.navigate('Home');
          }
        const newTransaction2 = 
        {
          username,
          password
        };
        dispatch(LoginApp({ ...newTransaction2}));
    };
    return (
        <LinearGradient
            colors={['#FAAD3D', '#EFC90A', '#F1CB0C']}
            style={styles.Box}>
            <View style={{ width: '100%', alignItems: 'flex-start' }}>
          <Form>
            <Label style={{marginLeft:'30%',fontSize:20}}>Đăng nhập</Label>
          <Item style={{...styles.item}}>
            <Input
              placeholder="Xin mời nhập tên tài khoản"
              onChangeText={(username) => setUsername(username)}
            />
          </Item>
          <Item style={{...styles.item}}>
            <Input
              placeholder="Xin mời nhập mật khẩu"
              onChangeText={(password) => setPassword(password)}
              onSubmitEditing={onSubmit}
            />
          </Item>
            <Button block onPress={onSubmit} style={{ marginHorizontal: 20 }}>
            <Text style={{color: '#fff', fontWeight: '700', fontSize: 16}}>
             Đồng ý
            </Text>
          </Button>
        </Form>
            </View>

     
        </LinearGradient>
    );
};
const styles = StyleSheet.create({
        Box: {
            width: '100%',
            height: 289,
            borderRadius: 15,
            flexDirection: 'row',
            padding: 22,
    },
    item: {
        marginVertical: 20,
    width:'100%'
  },
    });
export default sign;