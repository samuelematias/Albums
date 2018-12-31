import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';
/**
 * Functional Component:
 *  Used for presenting static data
 *  Cant handle fetching data
 *  Easy to write
 */
// const AlbumList = () => {
// 	return (
// 		<View>
// 			<Text>{'Album List !!!!'}</Text>
// 		</View>
// 	);
// };

/**
 * Class Component
 *  Used to dynamic sources of data
 *  Handles any data that migth change (fetching data, user events, etc.)
 *  Knows when it gets erendered to the device (useful for data fetching)
 *  More code to write
 */
class AlbumList extends Component {
	constructor(props) {
		super(props);

		this.state = { albums: [] };
	}

	componentDidMount() {
		// console.log('componentDidMount lol');
		// debugger;
		const { albums } = this.state;
		axios
			.get('https://rallycoding.herokuapp.com/api/music_albums')
			.then(response =>
				this.setState({
					albums: response.data
				})
			);
	}

	_renderAlbums = () => {
		const { albums } = this.state;
		//this objects does not have id, so i'm using title to key
		return albums.map(album => <AlbumDetail key={album.title} album={album} />);
	};

	render() {
		console.log(this.state);
		return <View>{this._renderAlbums()}</View>;
	}
}

export default AlbumList;
