import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import StackNav from './StackReminder';

const Drawer = createDrawerNavigator();

export default function SideBarMenu() {
	return (
		<NavigationContainer>
			<Drawer.Navigator initialRouteName='Home'>
				<Drawer.Screen name='Home' component={StackNav} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
}
