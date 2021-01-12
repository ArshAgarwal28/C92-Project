import * as React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import CalendarScreen from '../screens/CalendarScreen';
// import SideBarMenu from './SideBarMenu';
import { StackNav } from './StackReminder';

export const SideMenuContainer = createDrawerNavigator(
	{
		Home: { screen: StackNav },
	},
	{ contentComponent: SideBarMenu },
	{ initialRouteName: 'Home' }
);
