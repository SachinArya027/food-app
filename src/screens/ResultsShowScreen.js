import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
	const [result, setResult] = useState(null);
	const getResult = async () => {
		const response = await yelp.get(`/${navigation.getParam('id')}`);
		setResult(response.data);
	};

	useEffect(() => {
		getResult();
	}, []);

	if (!result) return null;

	return (
		<View>
			<Text>{result.name}</Text>
			<FlatList
				horizontal
				showsHorizontalScrollIndicator={false}
				data={result.photos}
				keyExtractor={photo => photo}
				renderItem={({ item }) => <Image source={{ uri: item }} style={styles.image} />}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	image: {
		width: 250,
		height: 150,
		borderRadius: 4,
		marginLeft: 10
	}
});

export default ResultsShowScreen;
