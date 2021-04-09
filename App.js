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
import { View } from 'react-native';
import { Tab } from 'native-base';
const Stack = createStackNavigator();
const Tab1 = createBottomTabNavigator();

  
function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
			{/*<Tab1.Navigator
			tabBar={()=><View/>}>
					<Tab1.Screen name="Home2"
						component={LoginApp}
						options={{
							title: 'Đăng nhập'
						}}/>
						<Tab1.Screen name="signup"
						component={signup}
						options={{
							title: 'Đăng ký tài khoản'
						}}/>
						<Tab1.Screen name="Main"
						component={Mainn}
						options={{
							title: 'Trang chính'
						}}/>
						<Tab1.Screen name="Home"
						component={HomeScreen}
						options={{
							title: 'Trình theo dõi chi phí'
						}}/>
						<Tab1.Screen name="Add"
						component={AddTransaction}
						options={{
							title: "Thêm chi phí"
						}}/>
					</Tab1.Navigator>*/}
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
						name="Home"
						component={HomeScreen}
						options={{
							title: 'Trình theo dõi chi phí'
						}}
					/>
					<Stack.Screen
						name="Accountinformatio"
						component={Accountinformatio}
						options={{
							title: 'Accountinformatio'
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