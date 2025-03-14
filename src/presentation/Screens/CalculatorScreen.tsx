import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { styles } from '../../Config/Theme/app-theme';

const CalculatorScreen = () => {
    return (
        <View style={styles.calculatorContainer}>
            <View style={{paddingHorizontal: 30, marginBottom: 10}}> 
                <Text style={styles.mainResult}>1500</Text>
                <Text style={styles.subResult}>15</Text>
            </View>
        </View>
    );
};

export default CalculatorScreen;