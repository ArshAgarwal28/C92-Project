import * as React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import SignUpScreen from '../screens/SignUpScreen';
import SignUpScreen2 from '../screens/SignUpScreen2';
import WelcomeScreen from '../screens/WelcomeScreen';

const ScreenNav = createSwitchNavigator(
	{
		WelcomeScreen: WelcomeScreen,
		SignUpScreen: SignUpScreen,
		SignUpScreen2: SignUpScreen2,
	},
	{ initialRouteName: 'WelcomeScreen' }
);

export const LoginScreen = createAppContainer(ScreenNav);
