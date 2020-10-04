import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const WeatherView = () => {
    return (
        <View>
            <View style={styles.headerContainer}>
                <MaterialCommunityIcons size={48} name="weather-sunny" color={'#000'} />
                <Text>40</Text>
            </View>
            <View style={styles.bodyContainer}>
                <Text>Wow, it is sunny mate</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {},
    bodyContainer: {},
})

export default WeatherView;

