import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import DropDownPicker from 'react-native-dropdown-picker';
import db from '../config';
import firebase from 'firebase';

export default class SignUpScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: this.props.navigation.getParam('details')['firstName'],
			secondName: this.props.navigation.getParam('details')['secondName'],
			emailId: this.props.navigation.getParam('details')['emailId'],
			password: this.props.navigation.getParam('details')['password'],
			confirmPassword: this.props.navigation.getParam('details')['confirmPassword'],
			phoneNumber: '',
			Dob: '',
			Mob: '',
			Yob: '',
			userDob: '',
			gender: '',
		};

		console.log(this.state.firstName);
	}

	submitPressed = () => {
		var fullDOB = this.state.Dob + '/' + this.state.Mob + '/' + this.state.Yob;
		console.log(fullDOB);
		this.setState(
			{
				userDob: fullDOB,
			},
			() => {
				for (var i in this.state) {
					if (this.state[i].length === 0) {
						alert('Please fill all the inputs!');
						break;
					} else {
						this.addUser();
						break;
					}
				}
			}
		);
	};

	addUser = async () => {
		var condition = true;

		try {
			await firebase
				.auth()
				.createUserWithEmailAndPassword(this.state.emailId, this.state.password)
				.then(() => {
					this.props.navigation.navigate('HomePage');
				});
		} catch (err) {
			alert(err.message);
			condition = false;
		}

		if (condition) {
			db.collection('users').add({
				firstName: this.state.firstName,
				secondName: this.state.secondName,
				emailId: this.state.emailId,
				password: this.state.password,
				phoneNumber: this.state.phoneNumber,
				userDob: this.state.userDob,
				gender: this.state.gender,
			});
		}
	};
	render() {
		return (
			<View style={{ flex: 1, alignItems: 'center' }}>
				<Input
					placeholder='Phone Number'
					containerStyle={[styles.formInputRow, { width: 640, marginTop: 100 }]}
					onChangeText={(text) => {
						this.setState({
							phoneNumber: text,
						});
					}}
					leftIcon={<Icon name='phone' size={20} color='#87756b' />}
					leftIconContainerStyle={{ paddingTop: 15, paddingRight: 10 }}
					inputStyle={{ paddingTop: 15 }}
					value={this.state.phoneNumber}
					label='Your Phone Number'
					labelStyle={{ color: '#87756b', position: 'absolute', fontSize: 18, top: -7 }}
				/>

				<View style={{ flexDirection: 'row', display: 'flex', marginTop: 20 }}>
					<Input
						placeholder='Date of Birth'
						containerStyle={styles.formInputRow}
						onChangeText={(text) => {
							this.setState({
								Dob: text,
							});
						}}
						leftIcon={<Icon name='calendar' size={20} color='#87756b' />}
						leftIconContainerStyle={{ paddingTop: 15, paddingRight: 10 }}
						inputStyle={{ paddingTop: 15 }}
						label='Date of Birth'
						labelStyle={{ color: '#87756b', position: 'absolute', fontSize: 18, top: -5 }}
						value={this.state.Dob}
					/>
					<Input
						placeholder='Month of Birth'
						containerStyle={styles.formInputRow}
						onChangeText={(text) => {
							this.setState({
								Mob: text,
							});
						}}
						leftIcon={<Icon name='calendar' size={20} color='#87756b' />}
						leftIconContainerStyle={{ paddingTop: 15, paddingRight: 10 }}
						inputStyle={{ paddingTop: 15 }}
						label='Month of Birth'
						labelStyle={{ color: '#87756b', position: 'absolute', fontSize: 18, top: -5 }}
						value={this.state.Mob}
					/>

					<Input
						placeholder='Year of Birth'
						containerStyle={styles.formInputRow}
						onChangeText={(text) => {
							this.setState({
								Yob: text,
							});
						}}
						leftIcon={<Icon name='calendar' size={20} color='#87756b' />}
						leftIconContainerStyle={{ paddingTop: 15, paddingRight: 10 }}
						inputStyle={{ paddingTop: 15 }}
						label='Year of Birth'
						labelStyle={{ color: '#87756b', position: 'absolute', fontSize: 18, top: -5 }}
						value={this.state.Yob}
					/>
				</View>

				<DropDownPicker
					items={[
						{ label: 'Male', value: ' Male' },
						{ label: 'Female', value: 'Female' },
						{ label: 'Rather not say', value: 'Rather not say' },
					]}
					containerStyle={{ width: 620, marginTop: 10 }}
					style={{ backgroundColor: '#e3ac91', borderColor: '#87756b' }}
					dropDownStyle={{ backgroundColor: '#e3ac91', borderColor: '#87756b' }}
					itemStyle={{ justifyContent: 'flex-start' }}
					placeholder='Select your Gender'
					onChangeItem={(item) =>
						this.setState({
							gender: item.value,
						})
					}
				/>

				<TouchableOpacity
					style={styles.formButton}
					onPress={() => {
						this.submitPressed();
					}}>
					<Text style={styles.buttonText}>Submit</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	formInput: {
		justifyContent: 'center',
		alignSelf: 'center',
		// color: '#e3ac91',
		width: 300,
	},

	formInputRow: {
		justifyContent: 'center',
		alignSelf: 'center',
		// color: '#e3ac91',
		width: 200,
		marginHorizontal: 10,
	},

	formButton: {
		borderWidth: 2,
		borderColor: 'black',
		backgroundColor: '#006aff',
		padding: 5,
		marginTop: 10,
		width: 100,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		marginHorizontal: 10,
	},

	buttonText: {
		color: 'white',
		fontWeight: 'bold',
	},
});
