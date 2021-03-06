import React, {useState} from 'react';
import {View, Text, Image,StyleSheet, ImageBackground} from 'react-native';
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
      return navigation.navigate('khoanthuchi',{userd,username});;
    }
    const taikhoann=()=>
    {
      return navigation.navigate('taikhoan',{userd,username});
    }
    const thongKe=()=>
    {
      return navigation.navigate('thongke',{userd,username});
    }
    const qlv=()=>
    {
      return navigation.navigate('walletaccountinformation',{userd,username});
    }
  return (
    <Container style={{backgroundColor:'#333333'}}>
      <ImageBackground source={require('../../image/ddep.jpg')} style={{width:'100%',height:'100%',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
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
            <View style={{ width: '100%', alignItems:'center' }}>
          <Form style={{flexDirection:'row', flexWrap:'wrap'}}>
          
            <Button block onPress={onSubmit} style={{ marginHorizontal: 2,backgroundColor:'#333333', borderRadius: 15,width:90 ,height:90}}>
            <Text style={{color: '#fff', fontWeight: '100', fontSize: 14}}>
            L???p k??? ho???ch
            </Text>
          </Button>
          <Button block onPress={taikhoan} style={{ marginHorizontal: 2,backgroundColor:'#333333',borderRadius: 15,width:90,height:90  }}>
            <Text style={{color: '#fff', fontWeight: '100', fontSize: 14}}>
              C?? nh??n
            </Text>
          </Button>
          <Button block onPress={thongKe} style={{ marginHorizontal: 2,backgroundColor:'#333333' ,borderRadius: 15,width:90,height:90 }}>
            <Text style={{color: '#fff', fontWeight: '100', fontSize: 14}}>
            Th???ng k??
            </Text>
          </Button>
          <Button block onPress={qlv} style={{ marginHorizontal: 2,backgroundColor:'#333333' ,borderRadius: 15,width:90 ,marginTop:'15%',height:90}}>
            <Text style={{color: '#fff', fontWeight: '100', fontSize: 14}}>
            C???p nh???t v??
            </Text>
          </Button>
          <Button block onPress={taikhoann} style={{ marginHorizontal: 2,backgroundColor:'#333333' ,borderRadius: 15,width:90 ,marginTop:'15%',height:90}}>
            <Text style={{color: '#fff', fontWeight: '100', fontSize: 14}}>
            T??i kho???n
            </Text>
          </Button>
          <Button block onPress={qltk} style={{ marginHorizontal: 2,backgroundColor:'#333333' ,borderRadius: 15,width:90 ,marginTop:'15%',height:90}}>
            <Text style={{color: '#fff', fontWeight: '100', fontSize: 14}}>
            H?????ng d???n s??? d???ng
            </Text>
          </Button>
        </Form>
            </View>
        </LinearGradient>
        
      </Animated.View>
      </ImageBackground>
    </Container>
  );
};
const styles = StyleSheet.create({
  Box: {
      width: '100%',
      height: 500,
      borderRadius: 15,
      flexDirection: 'row',
      padding: 22,
      // marginTop:'-1%',
      marginBottom:150,
      zIndex:100

},
});
export default Mainn;