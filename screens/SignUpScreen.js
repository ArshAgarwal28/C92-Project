import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
// import db from '../config';

export default class SignUpScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: '',
			secondName: '',
			emailId: '',
			password: '',
			confirmPassword: '',
		};
	}

	screenNextBttn = () => {
		for (var i in this.state) {
			if (this.state[i].length === 0) {
				alert('Please fill all the inputs!');
				break;
			} else {
				if (this.state.password.length >= 8) {
					if (this.state.password === this.state.confirmPassword) {
						this.props.navigation.navigate('SignUpScreen2', { details: this.state });
						break;
					} else {
						alert('Passwords do not match!');
						break;
					}
				} else {
					alert('Password length is invalid! Please make sure it has more than 7 characters!');
					break;
				}
			}
		}
	};

	render() {
		return (
			<View style={{ flex: 1, alignItems: 'center' }}>
				<View style={{ flexDirection: 'row', display: 'flex', marginTop: 100 }}>
					<Input
						placeholder='First Name'
						containerStyle={styles.formInputRow}
						onChangeText={(text) => {
							this.setState({
								firstName: text,
							});
						}}
						leftIcon={<Icon name='user' size={20} color='#87756b' />}
						leftIconContainerStyle={{ paddingTop: 15, paddingRight: 10 }}
						inputStyle={{ paddingTop: 15 }}
						value={this.state.firstName}
						label='First Name'
						labelStyle={{ color: '#87756b', position: 'absolute', fontSize: 18, top: -5 }}
					/>
					<Input
						placeholder='Second Name'
						containerStyle={styles.formInputRow}
						onChangeText={(text) => {
							this.setState({
								secondName: text,
							});
						}}
						leftIcon={<Icon name='user' size={20} color='#87756b' />}
						leftIconContainerStyle={{ paddingTop: 15, paddingRight: 10 }}
						inputStyle={{ paddingTop: 15 }}
						value={this.state.secondName}
						label='Second Name'
						labelStyle={{ color: '#87756b', position: 'absolute', fontSize: 18, top: -5 }}
					/>
				</View>

				<Input
					placeholder='email@address.com'
					containerStyle={[styles.formInputRow, { width: RFValue(640, 1508), marginTop: 10 }]}
					onChangeText={(text) => {
						this.setState({
							emailId: text,
						});
					}}
					leftIcon={<Icon name='envelope' size={20} color='#87756b' />}
					leftIconContainerStyle={{ paddingTop: 15, paddingRight: 10 }}
					inputStyle={{ paddingTop: 15 }}
					value={this.state.emailId}
					label='Your Email Address'
					labelStyle={{ color: '#87756b', position: 'absolute', fontSize: 18, top: -5 }}
				/>

				<View style={{ flexDirection: 'row', display: 'flex', marginTop: 10 }}>
					<Input
						placeholder='Password'
						containerStyle={styles.formInputRow}
						onChangeText={(text) => {
							this.setState({
								password: text,
							});
						}}
						leftIcon={<Icon name='lock' size={20} color='#87756b' />}
						leftIconContainerStyle={{ paddingTop: 15, paddingRight: 10 }}
						inputStyle={{ paddingTop: 15 }}
						value={this.state.password}
						label='Password'
						labelStyle={{ color: '#87756b', position: 'absolute', fontSize: 18, top: -5 }}
						secureTextEntry
					/>
					<Input
						placeholder='Confirm Password'
						containerStyle={styles.formInputRow}
						onChangeText={(text) => {
							this.setState({
								confirmPassword: text,
							});
						}}
						leftIcon={<Icon name='lock' size={20} color='#87756b' />}
						leftIconContainerStyle={{ paddingTop: 15, paddingRight: 10 }}
						inputStyle={{ paddingTop: 15 }}
						value={this.state.confirmPassword}
						label='Confirm Password'
						labelStyle={{ color: '#87756b', position: 'absolute', fontSize: 18, top: -5 }}
						secureTextEntry
					/>
				</View>
				<View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
					<TouchableOpacity
						style={styles.formButton}
						onPress={() => {
							this.props.navigation.navigate('WelcomeScreen');
						}}>
						<Text style={styles.buttonText}>Back</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={styles.formButton}
						onPress={() => {
							this.screenNextBttn();
						}}>
						<Text style={styles.buttonText}>Next</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	formInputRow: {
		justifyContent: 'center',
		width: RFValue(300, 1508),
		marginHorizontal: 20,
	},

	formButton: {
		borderWidth: 2,
		borderColor: 'black',
		backgroundColor: '#006aff',
		padding: 5,
		width: 100,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		marginHorizontal: 10,
		marginTop: 10,
	},

	buttonText: {
		color: 'white',
		fontWeight: 'bold',
	},
});
