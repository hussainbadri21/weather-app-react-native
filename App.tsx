import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import WeatherView from "./components/weather";

export default function App() {
    const [isLoading, setIsLoading] = useState(false);
    return (
        <View style={styles.container}>
            {isLoading ?
                <Text style={styles.text}>Fetching ye weather, mate!</Text>
                :
                <WeatherView/>}
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center'
    }
});
