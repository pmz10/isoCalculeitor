import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CalculatorScreen = () => {
    return (
        <View style={styles.container}>
            <Text>CalculatorScreen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CalculatorScreen;