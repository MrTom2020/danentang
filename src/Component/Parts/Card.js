import React,{useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Button,Form,Item, Input, Label} from 'native-base';
import {useSelector} from 'react-redux';
const Balance = (props,{navigation,route}) => {
  const {transactions} = useSelector((state) => state.transactions);
  const [ten,setten] = useState('');
  const [gt,setgt] = useState('');
  const [st,setst] = useState('');
  const them=()=>
  {
    if(!ten || !gt || !st)
    {
      return alert('Xin vui lòng điền đầy đủ thông tin ');
    }
    else
    {
      return props.navigation.navigate('kq',{ten,gt,st}); 
    }
  }
 
  return (
      <View style={styles.Box}>
         <Form>
            <Label style={{marginLeft:'35%',fontSize:30,fontStyle:'italic',fontWeight:'bold',paddingBottom:'10%'}}>Bản kế hoạch</Label>
          <Item style={{...styles.item}}>
            <Input
              style={{backgroundColor:'#ffffff'}}
              placeholder="Xin mời nhập tên kế hoạch"
              onChangeText={(ten) => setten(ten)}
            />
          </Item>
          <Item style={{...styles.item}}>
            <Input
            style={{backgroundColor:'#ffffff',marginBottom:'10%'}}
              placeholder="Xin mời giá trị bạn muốn mong muốn"
              onChangeText={(gt) => setgt(gt)}
              onSubmitEditing={them}
            />
            </Item>
             <Item style={{...styles.item,paddingBottom:'30%'}}>
            <Input
            style={{backgroundColor:'#ffffff',marginBottom:'10%'}}
              placeholder="Xin mời số tháng"
              onChangeText={(st) => setst(st)}
              onSubmitEditing={them}
            />
          </Item>
         
            <Button block onPress={them} style={{ marginHorizontal: 20,backgroundColor:'#333333',marginBottom:'2%'}}>
            <Text style={{color: '#fff', fontWeight: '100', fontSize: 16}}>
             Đồng ý
            </Text>
          </Button>
          <Button block onPress={them} style={{ marginHorizontal: 20,backgroundColor:'#333333' }}>
          <Text style={{color: '#fff', fontWeight: '100', fontSize: 16}}>
             Đăng ký tài khoản
            </Text>
          </Button>
        </Form>
      </View>
  );
};
const styles = StyleSheet.create({
  Box: {
      width: '100%',
      height: 500,
      borderRadius: 15,
      flexDirection: 'row',
      padding: 22,
      marginTop:'26%'
},
item: {
  marginVertical: 20,
width:'90%'
},
});
export default Balance;