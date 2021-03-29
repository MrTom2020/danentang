import React, {Fragment} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import {Button, Form, Input, Label} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch} from 'react-redux';

const Balance = () =>
{
    const dispatch = useDispatch();
  const [username, setusername] = useState('');
   const [password, setpassword] = useState('');
  const onSubmit = () =>
  {
    if (!username || !password)
    {
      
    }  
  }
    const newTransaction = {
        username
    };
  return (
    <LinearGradient
      colors={['#FAAD3D', '#EFC90A', '#F1CB0C']}
      style={styles.Box}>
      <View style={{width: '100%',height:'100%', alignItems: 'flex-start'}}>
              <Form>
                  <Label style={{marginLeft:'30%',fontSize:20,marginBottom:'10%'}}>ĐĂNG NHẬP</Label>
                  <Label for="ten">Tên</Label>
                  <TextInput name="ten" style={{ height: 40,fontSize:20 }}
                      placeholder="Xin vui lòng nhập tên" />
                   <Label for="matkhau">Mật khẩu</Label>
                  <TextInput name="ten" style={{ height: 40,fontSize:20 }}
            placeholder="Xin vui lòng nhập mật khẩu" />
          <Button title="Đăng Nhập"/>
        </Form>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  Box: {
    width: '100%',
    height: 300,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems:'center',
    padding: 22,
  },
});

export default Balance;