import React, { useState } from "react";
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity } from "react-native";
import { globalStyles } from '../styles/global';
import Stack from "../routes/homeStack";


export default function Home({ navigation }) {

    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
    ]);

    return (
        <View style={globalStyles.container}>
            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Text style={globalStyles.titleText}>{item.title}</Text>
                    </TouchableOpacity>
                )} />
        </View>
    );


    {/* <View style={globalStyles.redirectBtn}>
                <Button
                    title="Go to ReviewDetail"
                    onPress={() => navigation.navigate('ReviewDetails')}
                />
            </View>

            <Button
                title="Go to About"
                onPress={() => navigation.navigate('About')}
            /> */}


};
