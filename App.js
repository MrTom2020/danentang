import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from 'react-redux';
import store from './src/store';
import LoginApp from './src/Component/LoginApp';
import HomeScreen from './src/Component/HomeScreen';
import Mainn from './src/Component/Mainn';
import AddTransaction from './src/Component/AddTransaction';
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