import React from 'react';
import { View, Text, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import styles from './styles/AlbumDetailStyles';

const AlbumDetail = props => {
	const {
		album: { title, artist, thumbnail_image }
	} = props;
	const { thumbnailStyle, wrapperInformations } = styles;
	return (
		<Card>
			<CardSection>
				<View>
					<Image source={{ uri: thumbnail_image }} style={thumbnailStyle} />
				</View>
				<View style={wrapperInformations}>
					<Text>{title}</Text>
					<Text>{artist}</Text>
				</View>
			</CardSection>
		</Card>
	);
};

export default AlbumDetail;
