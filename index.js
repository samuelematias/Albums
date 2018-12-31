import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
import OfflineNotice from './src/components/OfflineNotice';

const App = () => (
	<View style={{ flex: 1 }}>
		<Header headerText={'Albums'} />
		<OfflineNotice />
		<AlbumList />
	</View>
);

AppRegistry.registerComponent('albums', () => App);
