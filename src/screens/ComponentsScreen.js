import React from 'react';
import {Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const name = 'Mohammed';
    return (
        <View>
            <Text style={styles.tesxtStyle}>Getting started with react native!</Text>
    <Text style={styles.subStyle}>My name is {name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    tesxtStyle: {
        fontSize: 45
    },
    subStyle: {
        fontSize: 20
    }
});

export default ComponentsScreen;