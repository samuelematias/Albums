import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles/ButtonStyles';

const Button = ({ onPress }) => {
	const { buttonStyle, buttonTextStyle } = styles;
	return (
		<TouchableOpacity
			style={buttonStyle}
			onPress={() => {
				onPress();
			}}
		>
			<Text style={buttonTextStyle}>{'Click me!!!'}</Text>
		</TouchableOpacity>
	);
};

export default Button;
