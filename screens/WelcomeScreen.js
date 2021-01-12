import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import db from '../config';
import firebase from 'firebase';

export default class WelcomeScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			emailId: 'arsh@gmail.com',
			password: 'arshagarwal',
		};
	}

	userSignIn = async () => {
		var condition = true;
		if (this.state.emailId.length !== 0 && this.state.password.length !== 0) {
			try {
				await firebase.auth().signInWithEmailAndPassword(this.state.emailId, this.state.password);
			} catch (err) {
				alert(err.message);
				condition = false;
			}
		} else {
			alert('Please fill all the inputs!');
			condition = false;
		}

		if (condition) {
			this.props.navigation.navigate('Drawer');
		}
	};

	render() {
		return (
			<View style={{ flex: 1 }}>
				<View style={{ alignSelf: 'center', marginTop: 200 }}>
					<Input
						inputContainerStyle={[styles.formInput, { marginBottom: 20 }]}
						placeholder='email@address.com'
						onChangeText={(text) => {
							this.setState({
								emailId: text,
							});
						}}
						leftIcon={<Icon name='envelope' size={20} />}
						leftIconContainerStyle={{ paddingTop: 15, paddingRight: 10 }}
						inputStyle={{ paddingTop: 15 }}
						value={this.state.emailId}
						label='Your Email Address'
						labelStyle={{ color: 'black', fontSize: 18 }}
					/>
				</View>

				<View style={{ alignSelf: 'center' }}>
					<Input
						inputContainerStyle={styles.formInput}
						placeholder='Password'
						onChangeText={(text) => {
							this.setState({
								password: text,
							});
						}}
						leftIcon={<Icon name='lock' size={20} />}
						leftIconContainerStyle={{ paddingTop: 15, paddingRight: 10 }}
						inputStyle={{ paddingTop: 15 }}
						value={this.state.password}
						secureTextEntry
						label='Password'
						labelStyle={{ color: 'black', fontSize: 18 }}
					/>
				</View>

				<View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
					<TouchableOpacity
						style={styles.formButton}
						onPress={() => {
							this.userSignIn();
						}}>
						<Text style={styles.buttonText}>Log In</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={styles.formButton}
						onPress={() => {
							this.props.navigation.navigate('SignUpScreen');
						}}>
						<Text style={styles.buttonText}>Sign Up</Text>
					</TouchableOpacity>
				</View>
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
	},

	buttonText: {
		color: 'white',
		fontWeight: 'bold',
	},
});
