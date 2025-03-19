import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { styles } from '../../Config/Theme/app-theme';

const CalculatorScreen = () => {
    return (
        <View style={styles.calculatorContainer}>
            <View style={{paddingHorizontal: 30, marginBottom: 10}}> 
                <Text style={styles.mainResult}>1500</Text>
                <Text style={styles.subResult}>15</Text>
            </View>

            <View style={ styles.row}>
            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>1</Text>
            </Pressable>
            
            </View>
        </View>
    );
};

export default CalculatorScreen;