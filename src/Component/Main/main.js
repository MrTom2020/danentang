import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import {Button, Form,Item, Input, Label} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch} from 'react-redux';
const main = ({navigation}) => {
    const dispatch = useDispatch();
    const onSubmit=()=>
    {
      return alert("ok");
    }
    const taikhoan=()=>
    {
      return navigation.navigate('Home');
    }
    const thongke=()=>
    {
      return alert('Thông báo','Thống kê');
    }
    return (
      <LinearGradient
            colors={['#81FBB8', '#28C76F']}
            style={styles.Box}>
            <View style={{ width: '100%', alignItems: 'flex-start' }}>
          <Form style={{flexDirection:'row', flexWrap:'wrap'}}>
          
            <Button block onPress={onSubmit} style={{ marginHorizontal: 2,backgroundColor:'#333333', borderRadius: 15,width:90 }}>
            <Text style={{color: '#fff', fontWeight: '100', fontSize: 14}}>
             Trang Chủ
            </Text>
          </Button>
          <Button block onPress={taikhoan} style={{ marginHorizontal: 2,backgroundColor:'#333333',borderRadius: 15,width:90  }}>
            <Text style={{color: '#fff', fontWeight: '100', fontSize: 14}}>
             Tài Khoản
            </Text>
          </Button>
          <Button block onPress={thongke} style={{ marginHorizontal: 2,backgroundColor:'#333333' ,borderRadius: 15,width:90 }}>
            <Text style={{color: '#fff', fontWeight: '100', fontSize: 14}}>
             Thống kê
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
            height: 90,
            borderRadius: 15,
            flexDirection: 'row',
            padding: 22,
            marginTop:'-1%',
            zIndex:100

    },
    });
export default main;