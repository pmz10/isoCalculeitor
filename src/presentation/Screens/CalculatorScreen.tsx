import { View, Text, StyleSheet, Pressable } from 'react-native';
import { colors, styles } from '../../Config/Theme/app-theme';
import CalculeitorButton from '../Components/CalculeitorButton';

const CalculatorScreen = () => {
    return (
        <View style={styles.calculatorContainer}>
            <View style={{paddingHorizontal: 30, marginBottom: 10}}> 
                <Text style={styles.mainResult}>1500</Text>
                <Text style={styles.subResult}>15</Text>
            </View>

            <View style={ styles.row}>
                <CalculeitorButton onPress={ () => console.log('C') } blackText color={colors.lightGary} label="C" />
                <CalculeitorButton onPress={ () => console.log('½') } blackText color={colors.lightGary} label="½" />
                <CalculeitorButton onPress={ () => console.log('%') } blackText color={colors.lightGary} label="%" />
                <CalculeitorButton onPress={ () => console.log('÷') } color={colors.orange} label="÷" />
            </View>
            <View style={ styles.row}>
                <CalculeitorButton onPress={ () => console.log('7') } color={colors.darkGray} label="7" />
                <CalculeitorButton onPress={ () => console.log('8') } color={colors.darkGray} label="8" />
                <CalculeitorButton onPress={ () => console.log('9') } color={colors.darkGray} label="9" />
                <CalculeitorButton onPress={ () => console.log('X') } color={colors.orange} label="X" />
            </View>
            <View style={ styles.row}>
                <CalculeitorButton onPress={ () => console.log('4') } color={colors.darkGray} label="4" />
                <CalculeitorButton onPress={ () => console.log('5') } color={colors.darkGray} label="5" />
                <CalculeitorButton onPress={ () => console.log('6') } color={colors.darkGray} label="6" />
                <CalculeitorButton onPress={ () => console.log('-') } color={colors.orange} label="-" />
            </View>
            <View style={ styles.row}>
                <CalculeitorButton onPress={ () => console.log('1') } color={colors.darkGray} label="1" />
                <CalculeitorButton onPress={ () => console.log('2') } color={colors.darkGray} label="2" />
                <CalculeitorButton onPress={ () => console.log('3') } color={colors.darkGray} label="3" />
                <CalculeitorButton onPress={ () => console.log('+') } color={colors.orange} label="+" />
            </View>
            <View style={ styles.row}>
                <CalculeitorButton onPress={ () => console.log('0') } color={colors.darkGray} label="0" doubleSize />
                <CalculeitorButton onPress={ () => console.log('.') } color={colors.darkGray} label="." />
                <CalculeitorButton onPress={ () => console.log('=') } color={colors.orange} label="=" />
            </View>
        </View>
    );
};

export default CalculatorScreen;