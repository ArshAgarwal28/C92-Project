import * as React from 'react';
import { View, TouchableOpacity, Text, Dimensions, StyleSheet, Shape } from 'react-native';
import { Header } from 'react-native-elements';
import { Agenda } from 'react-native-calendars';
import { Card, Title, Paragraph, Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';

export default class CalendarScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			today: '',
			items: {},
		};
	}

	formatKey = () => {
		const newItems = {};
		Object.keys(this.state.items).forEach((key) => {
			newItems[key] = this.state.items[key];
		});
		this.setState({
			items: newItems,
		});
	};

	//Function to add items to this.state.items to display
	loadItems = (day) => {
		for (let i = 0; i <= 7; i++) {
			//i = Amount of days prior to or subsequent to the day selected
			var time = day.timestamp + i * 24 * 60 * 60 * 1000;

			//Changes {time} variable into yyyy-mm-dd format
			var strTime = new Date(time).toISOString().split('T')[0];

			if (!this.state.items[strTime]) {
				this.state.items[strTime] = [];
				for (let j = 0; j < 1; j++) {
					this.state.items[strTime].push({
						name: 'Work in brief',
						time: strTime,
					});
				}
			}
		}

		this.formatKey();
	};

	renderItem = (item) => (
		<Card style={{ marginTop: 10, marginRight: 17 }}>
			<Card>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}>
					<View>
						<Title style={{ marginLeft: 10, fontWeight: 'bold' }}>{item.name}</Title>
						<Paragraph style={{ marginLeft: 10, fontSize: 12 }}>{item.time}</Paragraph>
					</View>

					<Avatar.Text label='J' style={{ marginVertical: 10, marginRight: 5 }} />
				</View>
			</Card>
		</Card>
	);

	render() {
		return (
			<View style={{ flex: 1 }}>
				<Header
					backgroundColor='#dc4d3f'
					centerComponent={{ text: 'Calendar', style: { color: 'white', fontSize: RFValue(28, 979) } }}
					leftComponent={
						<Icon
							name='bars'
							style={{
								justifyContent: 'center',
								alignItems: 'center',
								alignSelf: 'flex-start',
								alignItems: 'center',
								color: 'white',
							}}
							size={RFValue(28, 979)}
							onPress={() => {
								this.props.navigation.toggleDrawer();
							}}
						/>
					}
					rightComponent={
						<Icon
							name='plus'
							style={{
								justifyContent: 'center',
								alignItems: 'center',
								alignSelf: 'flex-end',
								alignItems: 'center',
								color: 'white',
							}}
							size={RFValue(28, 979)}
							onPress={() => {
								this.props.navigation.navigate('Reminder');
							}}
						/>
					}
				/>

				<Agenda
					items={this.state.items}
					loadItemsForMonth={this.loadItems}
					renderItem={this.renderItem}
					theme={{
						agendaTodayColor: 'red',
						agendaKnobColor: 'black',
						selectedDayBackgroundColor: '#2ac9c9',
						selectedDayTextColor: 'black',
						textDayHeaderFontSize: 14,
					}}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	buttonStyle: {
		marginVertical: 10,
		paddingVertical: 5,
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		textAlignVertical: 'center',
		width: Dimensions.get('window').width - 10,
		flexDirection: 'row',
	},
});
