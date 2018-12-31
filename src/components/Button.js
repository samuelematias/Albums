import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles/ButtonStyles';

const Button = ({ onPress, children }) => {
	const { buttonStyle, buttonTextStyle } = styles;
	return (
		<TouchableOpacity
			style={buttonStyle}
			onPress={() => {
				onPress();
			}}
		>
			<Text style={buttonTextStyle}>{children}</Text>
		</TouchableOpacity>
	);
};

export default Button;
