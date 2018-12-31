import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles/ButtonStyles';

const Button = () => {
	const { buttonStyle, buttonTextStyle } = styles;
	return (
		<TouchableOpacity style={buttonStyle}>
			<Text style={buttonTextStyle}>{'Click me!!!'}</Text>
		</TouchableOpacity>
	);
};

export default Button;
