import React, {Fragment} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import {Button, Form, Input, Label} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch} from 'react-redux';

const Balance = () =>
{
    /*const dispatch = useDispatch();
    const [username, setusername] = useState('');
    const newTransaction = {
        username
    };*/
  return (
    <LinearGradient
      colors={['#FAAD3D', '#EFC90A', '#F1CB0C']}
      style={styles.Box}>
      <View style={{width: '100%',height:'100%', alignItems: 'flex-start'}}>
              <Form>
                  <Label for="ten">Tên</Label>
                  <TextInput style={{ height: 40,fontSize:20 }}
                  placeholder="Xin vui lòng nhập tên"/>
        </Form>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  Box: {
    width: '100%',
    height: 189,
    borderRadius: 15,
    flexDirection: 'row',
    padding: 22,
  },
});

export default Balance;