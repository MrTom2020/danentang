import React, {useState} from 'react';
import {StyleSheet, View, Text, Alert, ScrollView} from 'react-native';
import {Button, Form,Item, Input, Label, CheckBox} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import DateTimePicker from '@react-native-community/datetimepicker';
import {useDispatch} from 'react-redux';
import {firebaseApp} from '../firebase.js';
const khoanthuchi = (props,{navigation}) => 
{
  /* hoten, quequan, ngaysinh,diachi,sdt,cmnd*/
    const dispatch = useDispatch();
    const [hoten, sethoten] = useState(props.k2);
    const [tenkhoanthuchi, settenkhoanthuchi] = useState('');
    const [tien,setvitien] = useState(props.k1);
    const [thoigiangd, setthoigiangd] = useState('');
    const [date, setDate] = useState(new Date());
    const [giatri,setgiatri] = useState('');
    const [mode, setMode] = useState('date');
    const [thoigiangdd, setthoigiangdd] = useState(date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear());
     const [show, setShow] = useState(false);
     const [mand,setmand] = useState(props.k3);
     const [checked,setchecked] = useState(false);
     var dd = new Date();
     const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);
    };
     const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
    };
    const showDatepicker = () => 
    {
      showMode('date');
    };
  
    const showTimepicker = () => {
      showMode('time');
    };
    const showTimepicker2 = () => {
     setchecked(!checked);
     Alert.alert(checked.toString());

    };
    const onSubmit = () => 
    {
      if(!hoten || !tenkhoanthuchi || !tien)
      {
        return alert("Xin vui lòng điền đầy đủ thông tin");
      }
      else
      {
            var loaitt = checked === true ? "Khoanchi":"khoanthu";
            var tientt = checked === true ? tru(tien,giatri):tinh(tien,giatri);
             this.itemRef = firebaseApp.database().ref('users/' + mand + '/k3/' + loaitt + '/' + Date.now());
             this.itemRef.set({
                  Hoten:hoten,
                  Vitien:tientt,
                  Tenkc:tenkhoanthuchi,
                  Giatri:{
                   Tien:giatri},
                  Thoigiangd:thoigiangdd
            })
            firebaseApp.database().ref('users/' + mand +'/k3/k/ViTien').set(tientt);
            setvitien(tientt);
            Alert.alert("Tạo khoản chi thành công");
            props.navigation.navigate('Main');
           // Alert.alert(k);
      }
    };
    const extitt = () => 
    {
        return props.navigation.goBack();
    };
    return (
      <ScrollView>
        <LinearGradient
            colors={['#81FBB8', '#28C76F']}
            style={styles.Box}>
            <View style={{ width: '100%', alignItems: 'flex-start' }}>
          <Form>
            <Label style={{marginLeft:'35%',fontSize:25,fontStyle:'italic',fontWeight:'bold',paddingBottom:'10%'}}>Thêm giao dịch</Label>
          <Item style={{...styles.item}}>
           <Text>Họ tên </Text>
          </Item>
          <Item style={{...styles.item,backgroundColor:'#333333',height:50,borderRadius:10,marginTop:'-5%',padding:'5%'}}>
           <Text style={{fontStyle:'italic',color:'#ffffff',textAlign:'center'}}>{hoten}</Text>
          </Item>
          <Item style={{...styles.item}}>
           <Text>Tiền trong ví </Text>
          </Item>
          <Item style={{...styles.item,backgroundColor:'#333333',height:50,borderRadius:10,marginTop:'-5%',padding:'5%'}}>
           <Text style={{fontStyle:'italic',color:'#ffffff',textAlign:'center'}}>{tien}</Text>
          </Item>
          <Item style={{...styles.item}}>
           <Text>Loại :</Text>
           <CheckBox value={checked}
           onPress={() => showTimepicker2()}/>
           <Text>        {checked ===true ? "Loại chi " : "Loại thu"}</Text>
          </Item>
          <Item style={{...styles.item}}>
           <Text>Tên khoản thu hoặc chi </Text>
          </Item>
          <Item style={{...styles.item,backgroundColor:'#333333',height:50,borderRadius:10,marginTop:'-5%',padding:'5%'}}>
          <Input
              style={{color:'#ffffff'}}
              placeholder="Xin mời nhập tên khoản thu chi"
              onChangeText={(tenkhoanthuchi) => settenkhoanthuchi(tenkhoanthuchi)}
            />
          </Item>
          <Item style={{...styles.item}}>
           <Text>giá trị giao dịch</Text>
          </Item>
          <Item style={{...styles.item,backgroundColor:'#333333',height:50,borderRadius:10,marginTop:'-5%',padding:'5%'}}>
          <Input
              style={{color:'#ffffff'}}
              placeholder="Xin mời nhập giá trị giao dịch"
              onChangeText={(giatri) => setgiatri(giatri)}
            />
          </Item>
          <Item style={{...styles.item,height:50,borderRadius:10,marginTop:'-5%',padding:'5%'}}>
          <Text>Thời gian giao dịch</Text>
          </Item>
          <Item style={{...styles.item}}>
          <Button onPress={showDatepicker} title="Show date picker!" style={{...styles.item,backgroundColor:'#ffffff',height:50,borderRadius:10,marginTop:'-5%',padding:'5%',color:'#ffffff'}} ><Text>{date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear()}</Text></Button>
           {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
     
          </Item>
            <Button block onPress={onSubmit} style={{ marginHorizontal: 20,backgroundColor:'#333333',marginBottom:'10%'}}>
            <Text style={{color: '#fff', fontWeight: '100', fontSize: 16}}>
             Đồng ý
            </Text>
          </Button>
          <Button block onPress={extitt} style={{ marginHorizontal: 20,backgroundColor:'#333333' }}>
            <Text style={{color: '#fff', fontWeight: '100', fontSize: 16}}>
             Thoát ra
            </Text>
          </Button>
        </Form>
            </View>
        </LinearGradient>
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
            marginTop:'26%'
    },
    item: {
        marginVertical: 20,
    width:300,
  },
  checkbox:{
    alignSelf:"center",
    zIndex:1000
  }
    });
function tinh(a,b)
{
  return Number(a) + Number(b);
}
function tru(a,b)
{
  return Number(a) - Number(b);
}
export default khoanthuchi;