import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles/ButtonStyles';

const Button = () => {
	return (
		<TouchableOpacity>
			<Text>{'Click Me !'}</Text>
		</TouchableOpacity>
	);
};

export default Button;
