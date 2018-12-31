import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
import styles from './styles/AlbumDetailStyles';

const AlbumDetail = props => {
	const {
		album: { title, artist, thumbnail_image, image, url }
	} = props;
	const {
		thumbnailStyle,
		wrapperTextInformations,
		wrapperThumbnail,
		textInformationStyle,
		imagelStyle
	} = styles;
	return (
		<Card>
			<CardSection>
				<View style={wrapperThumbnail}>
					<Image source={{ uri: thumbnail_image }} style={thumbnailStyle} />
				</View>
				<View style={wrapperTextInformations}>
					<Text style={textInformationStyle}>{title}</Text>
					<Text>{artist}</Text>
				</View>
			</CardSection>

			<CardSection>
				<Image source={{ uri: image }} style={imagelStyle} />
			</CardSection>

			<CardSection>
				<Button onPress={() => Linking.openURL(url)}>{'Buy Now'}</Button>
			</CardSection>
		</Card>
	);
};

export default AlbumDetail;
