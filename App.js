import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { LoginScreen } from './components/LoginSwitchNav';
import StackNav from './components/StackReminder';
import SideBarMenu from './components/SideBarMenu';

export default class App extends React.Component {
	render() {
		return (
			<View style={{ flex: 1, backgroundColor: 'white' }}>
				<ScreenNavContainer />
			</View>
		);
	}
}

const ScreenNav = createSwitchNavigator({
	LoginScreen: LoginScreen,
	Drawer: { screen: SideBarMenu },
});

const ScreenNavContainer = createAppContainer(ScreenNav);
