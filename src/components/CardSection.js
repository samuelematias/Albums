import React from 'react';
import { View } from 'react-native';
import styles from './styles/CardSectionStyles';

const CardSection = props => {
	const { children } = props;
	return <View style={styles.containerStyle}>{children}</View>;
};

export default CardSection;
