import React, {useState} from 'react';
import {View, Text, Image,StyleSheet} from 'react-native';
import Animated from 'react-native-reanimated';
import {Container, Button, Form} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';
const Mainn = ({ navigation,route }) =>
{
  
  const {transactions} = useSelector((state) => state.transactions);
  const [username, setUsername] = useState(route.params.username);
  const {password} = transactions.map((LoginApp)=>LoginApp.password);
  const userid = transactions.map((LoginApp)=>LoginApp.userid);
  const [userd,setuserd] = useState(route.params.userd);
  const onSubmit=()=>
    {
      return navigation.navigate('Home',{userd});
    }
    const taikhoan=()=>
    {
      return navigation.navigate('Accountinformatio',{userd});
    }
    const thongke=()=>
    {
      return navigation.navigate('Home',{userd});
    }
    const qltk=()=>
    {
      return navigation.navigate('walletaccountinformation',{userd,username});
    }
    const taikhoann=()=>
    {
      return navigation.navigate('taikhoan',{userd,username});
    }
  return (
    <Container style={{backgroundColor:'#333333'}}>
      <Image source={require('../../image/ddep.jpg')} style={{width:'100%',height:'80%',flexDirection:'row',alignItems:'center',justifyContent:'center'}}/>
      <Animated.View
        style={{
          flex: 1,
          alignItems: 'center',
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}>
        <LinearGradient
            colors={['#81FBB8', '#28C76F']}
            style={styles.Box}>
            <View style={{ width: '100%', alignItems: 'flex-start' }}>
          <Form style={{flexDirection:'row', flexWrap:'wrap'}}>
          
            <Button block onPress={onSubmit} style={{ marginHorizontal: 2,backgroundColor:'#333333', borderRadius: 15,width:90 }}>
            <Text style={{color: '#fff', fontWeight: '100', fontSize: 14}}>
            Lập kế hoạch
            </Text>
          </Button>
          <Button block onPress={taikhoan} style={{ marginHorizontal: 2,backgroundColor:'#333333',borderRadius: 15,width:90  }}>
            <Text style={{color: '#fff', fontWeight: '100', fontSize: 14}}>
             Thông tin cá nhân
            </Text>
          </Button>
          <Button block onPress={thongke} style={{ marginHorizontal: 2,backgroundColor:'#333333' ,borderRadius: 15,width:90 }}>
            <Text style={{color: '#fff', fontWeight: '100', fontSize: 14}}>
            Thống kê
            </Text>
          </Button>
          <Button block onPress={qltk} style={{ marginHorizontal: 2,backgroundColor:'#333333' ,borderRadius: 15,width:90 ,marginTop:'2%'}}>
            <Text style={{color: '#fff', fontWeight: '100', fontSize: 14}}>
            Tạo ví
            </Text>
          </Button>
          <Button block onPress={taikhoann} style={{ marginHorizontal: 2,backgroundColor:'#333333' ,borderRadius: 15,width:90 ,marginTop:'2%'}}>
            <Text style={{color: '#fff', fontWeight: '100', fontSize: 14}}>
            Tài khỏan
            </Text>
          </Button>
          <Button block onPress={qltk} style={{ marginHorizontal: 2,backgroundColor:'#333333' ,borderRadius: 15,width:90 ,marginTop:'2%'}}>
            <Text style={{color: '#fff', fontWeight: '100', fontSize: 14}}>
            Thu chi
            </Text>
          </Button>
        </Form>
            </View>
        </LinearGradient>
        
      </Animated.View>
    </Container>
  );
};
const styles = StyleSheet.create({
  Box: {
      width: '100%',
      height: 125,
      borderRadius: 15,
      flexDirection: 'row',
      padding: 22,
      marginTop:'-1%',
      zIndex:100

},
});
export default Mainn;