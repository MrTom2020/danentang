import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import store from './src/store';
import LoginApp from './src/Component/LoginApp';
import HomeScreen from './src/Component/HomeScreen';
import Mainn from './src/Component/Mainn';
import AddTransaction from './src/Component/AddTransaction';
import Accountinformatio from './src/Component/Accountinformation';
import signup from './src/Component/Signup'; 
import taikhoan from './src/Component/taikhoan';
import walletaccountinformation from './src/Component/walletaccountinformation';
import khoanthuchi from './src/Component/khoanthuchi';
import thongke from './src/Component/thongke';
const Stack = createStackNavigator();

  
function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						name="Home2"
						component={LoginApp}
						options={{
							title: 'Đăng nhập'
						}}
					/>
					<Stack.Screen
						name="signup"
						component={signup}
						options={{
							title: 'Đăng ký tài khoản'
						}}
					/>
					<Stack.Screen
						name="Main"
						component={Mainn}
						options={{
							title: 'Trang chính'
						}}
					/>
					<Stack.Screen
						name="khoanthuchi"
						component={khoanthuchi}
						options={{
							title: 'Tạo khoản khoản thu chi'
						}}
					/>
					<Stack.Screen
						name="taikhoan"
						component={taikhoan}
						options={{
							title: 'Trang tài khoản'
						}}
					/>
					<Stack.Screen
						name="Home"
						component={HomeScreen}
						options={{
							title: 'Xây dựng kế hoạch'
						}}
					/>
					<Stack.Screen
						name="thongke"
						component={thongke}
						options={{
							title: 'Trang thống kê'
						}}
					/>
					<Stack.Screen
						name="Accountinformatio"
						component={Accountinformatio}
						options={{
							title: 'Thông tin cá nhân'
						}}
					/>
					<Stack.Screen
						name="walletaccountinformation"
						component={walletaccountinformation}
						options={{
							title: 'Thông tin tài khoản'
						}}
					/>
					<Stack.Screen
						name="Add"
						component={AddTransaction}
						options={{
							title: "Thêm chi phí"
						}}
					/>
					</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	);
}


export default App;