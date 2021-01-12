import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import CalendarScreen from '../screens/CalendarScreen';
import AddReminder from '../screens/AddReminderScreen';

const Stack = createStackNavigator();

export default function StackNav() {
	return (
		// <NavigationContainer>
		<Stack.Navigator initialRouteName='Calendar' headerMode='none'>
			<Stack.Screen name='Calendar' component={CalendarScreen} />
			<Stack.Screen name='Reminder' component={AddReminder} />
		</Stack.Navigator>
		//  </NavigationContainer>
	);
}
