import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultDetails from './ResultDetails';

const ResultsList = ({ title, results, navigation }) => {
	if (!results.length) return null;

	return (
		<View>
			<Text style={styles.title}>{title}</Text>
			<FlatList
				horizontal
				showsHorizontalScrollIndicator={false}
				data={results}
				keyExtractor={result => result.id}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity
							onPress={() => navigation.navigate('ResultsShow', { id: item.id })}
						>
							<ResultDetails result={item} />
						</TouchableOpacity>
					);
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	title: {
		marginLeft: 15,
		fontSize: 18,
		fontWeight: 'bold'
	}
});

export default withNavigation(ResultsList);
