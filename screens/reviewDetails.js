
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ReviewDetails({ route, navigation }) {

    console.log(route.params)
    const title = route.params.title;
    const body = route.params.body;
    const rating = route.params.rating;

    return (
        <View style={globalStyles.container}>
            <Text>{title}</Text>
            <Text>{body}</Text>
            <Text>{rating}</Text>

        </View>
    );
}