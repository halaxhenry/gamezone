import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { globalStyles } from '../styles/global';

export default function Home() {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>홈 스크린 입니다</Text>
        </View>
    )
};
