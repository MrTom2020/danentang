import React,{useState} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {Button,Form,Item, Input, Label} from 'native-base';
import {useSelector} from 'react-redux';
const Balance = (props,{navigation,route}) => {
  const {transactions} = useSelector((state) => state.transactions);
  const [ten,setten] = useState('');
  const [gt,setgt] = useState('');
  const [st,setst] = useState('');
  const [csgd,setcsgd] = useState('');
  const [yte,setyte] = useState('');
  const [anuong,setanuong]  = useState('');
  const [dilai,setdilai] = useState('');
  const [khac,setkhac] = useState('');
  const them=()=>
  {
    if(!ten || !gt || !st || !csgd || !yte || !anuong || !dilai || !khac)
    {
      return alert('Xin vui lòng điền đầy đủ thông tin ');
    }
    else
    {
      if(Number(gt) < st)
      {
      var d = Number(csgd) + Number(yte) +  Number(anuong) +Number(dilai) +Number(khac);
      if(d >= 100)
      {
        return alert('Bạn không thể tiết kiệm khi đã không còn dư % ');
      }
      else
      {
        return props.navigation.navigate('kq',{ten,gt,st,csgd,yte,anuong,dilai,khac}); 
      }
    }
    else
    {
      return alert('Bạn không cần phải tiết kiệm khi đã hoàn thành kế hoạch ');
    }
    }
  }
  const thoat=()=>
  {
    return props.navigation.goBack();
  }
 
  return (
    <ScrollView style={styles.b2}>
      <View style={styles.Box}>
         <Form>
            <Label style={{marginLeft:'35%',fontSize:30,fontStyle:'italic',fontWeight:'bold',paddingBottom:'5%'}}>Bản kế hoạch</Label>
          <Item style={{...styles.item}}>
            <Input
              style={{backgroundColor:'#ffffff',marginBottom:'5%'}}
              placeholder="Xin mời nhập tên kế hoạch"
              onChangeText={(ten) => setten(ten)}
            />
          </Item>
          <Item style={{...styles.item}}>
            <Input
            style={{backgroundColor:'#ffffff',marginBottom:'5%'}}
              placeholder="Xin mời tiền lương"
              onChangeText={(gt) => setgt(gt)}
              onSubmitEditing={them}
            />
            </Item>
             <Item style={{...styles.item}}>
            <Input
            style={{backgroundColor:'#ffffff',marginBottom:'5%'}}
              placeholder="Xin mời nhập số tiền muốn có"
              onChangeText={(st) => setst(st)}
              onSubmitEditing={them}
            />
          </Item>
          <Item style={{...styles.item}}>
            <Input
            style={{backgroundColor:'#ffffff',marginBottom:'5%'}}
              placeholder="Xin mời % kinh tế bạn giành cho gia đình"
              onChangeText={(csgd) => setcsgd(csgd)}
              onSubmitEditing={them}
            />
          </Item>
          <Item style={{...styles.item}}>
            <Input
            style={{backgroundColor:'#ffffff',marginBottom:'5%'}}
              placeholder="Xin mời % kinh tế bạn giành cho y tế"
              onChangeText={(yte) => setyte(yte)}
              onSubmitEditing={them}
            />
          </Item>
          <Item style={{...styles.item}}>
            <Input
            style={{backgroundColor:'#ffffff',marginBottom:'5%'}}
              placeholder="Xin mời % kinh tế bạn giành cho ăn uống"
              onChangeText={(anuong) => setanuong(anuong)}
              onSubmitEditing={them}
            />
          </Item>
          <Item style={{...styles.item}}>
            <Input
            style={{backgroundColor:'#ffffff',marginBottom:'5%'}}
              placeholder="Xin mời % kinh tế bạn giành cho đi lại"
              onChangeText={(dilai) => setdilai(dilai)}
              onSubmitEditing={them}
            />
          </Item>
          <Item style={{...styles.item}}>
            <Input
            style={{backgroundColor:'#ffffff',marginBottom:'5%'}}
              placeholder="Xin mời % kinh tế bạn giành cho thứ khác"
              onChangeText={(khac) => setkhac(khac)}
              onSubmitEditing={them}
            />
          </Item>
            <Button block onPress={them} style={{ marginHorizontal: 20,backgroundColor:'#333333',marginBottom:'2%'}}>
            <Text style={{color: '#fff', fontWeight: '100', fontSize: 16}}>
             Đồng ý
            </Text>
          </Button>
          <Button block onPress={thoat} style={{ marginHorizontal: 20,backgroundColor:'#333333' }}>
          <Text style={{color: '#fff', fontWeight: '100', fontSize: 16}}>
             Thoát
            </Text>
          </Button>
        </Form>
      </View>
      </ScrollView>
  );
};
const styles = StyleSheet.create({
  Box: {
      width: '100%',
      height: '100%',
      borderRadius: 15,
      flexDirection: 'row',
      padding: 22,
      marginTop:'6%',
      backgroundColor:'#ffffab'
},
b2: {
  width: '100%',
  height: '100%',
},
item: {
  marginVertical: 10,
width:'115%',
marginLeft:'-5%'
},
});
export default Balance;