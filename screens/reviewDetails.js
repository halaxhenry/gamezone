
import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { globalStyles, images } from '../styles/global';
import Card from '../shared/card';
import { NavigationActions } from 'react-navigation';

export default function ReviewDetails({ route }) {
    // console.log(route.params)
    const title = route.params.title;
    const body = route.params.body;
    const rating = route.params.rating;
    const ratingImg = '../assets/rating-' + rating + '.png';

    console.log(ratingImg)

    return (
        <View style={globalStyles.container}>
            <Card>
                <Text>{title}</Text>
                <Text>{body}</Text>
                <View style={styles.rating}>
                    {/* <Text>{rating}</Text> */}
                    <Text>GameZone rating: </Text>
                    <Image source={images.ratings[rating]} />
                </View>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    }
})