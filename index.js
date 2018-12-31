//libs
import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
import OfflineNotice from './src/components/OfflineNotice';

//components
const App = () => (
	<View>
		<Header headerText={'Albums'} />
		<OfflineNotice />
		<AlbumList />
	</View>
);

//render
AppRegistry.registerComponent('albums', () => App);
