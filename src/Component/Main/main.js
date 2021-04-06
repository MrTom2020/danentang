import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import {Button, Form,Item, Input, Label} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch} from 'react-redux';
const main = ({navigation}) => {
    const dispatch = useDispatch();
    return (
        <LinearGradient
            colors={['#89fc03', '#aefb55', '#d9fdb0']}
            style={styles.Box}>
            <View style={{ width: '100%', alignItems: 'flex-start' }}>
          <Form style={{flexDirection:'row', flexWrap:'wrap'}}>
          
            <Button block onPress={onSubmit} style={{ marginHorizontal: 15,backgroundColor:'#333333', borderRadius: 15 }}>
            <Text style={{color: '#fff', fontWeight: '500', fontSize: 14}}>
             Trang Chủ
            </Text>
          </Button>
          <Button block onPress={onSubmit} style={{ marginHorizontal: 15,backgroundColor:'#333333',borderRadius: 15  }}>
            <Text style={{color: '#fff', fontWeight: '500', fontSize: 14}}>
             Tài Khoản
            </Text>
          </Button>
          <Button block onPress={onSubmit} style={{ marginHorizontal: 15,backgroundColor:'#333333' ,borderRadius: 15 }}>
            <Text style={{color: '#fff', fontWeight: '500', fontSize: 14}}>
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
            marginTop:'130%'
    },
    item: {
        marginVertical: 20,
    width:'100%'
  },
    });
export default main;