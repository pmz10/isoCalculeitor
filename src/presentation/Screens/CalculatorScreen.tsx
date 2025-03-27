import { View, Text, StyleSheet, Pressable } from 'react-native';
import { colors, styles } from '../../Config/Theme/app-theme';
import CalculeitorButton from '../Components/CalculeitorButton';
import { useCalculeitor } from '../Hooks/useCalculeitor';

export const CalculatorScreen = () => {

    const {
        formula,
        number,
        prevNumber,
        buildNumber,
        toggleSign,
        clean,
        deleteOperation,
        divideOperation,
        multiplyOperation,
        subtractOperation,
        addOperation,
        calculateResult,
    } = useCalculeitor();

    return (
        <View style={styles.calculatorContainer}>
            <View style={{ paddingHorizontal: 30, marginBottom: 10 }}>
                <Text style={styles.mainResult}
                    adjustsFontSizeToFit
                    numberOfLines={1}
                >{formula}</Text>
                <Text adjustsFontSizeToFit
                    numberOfLines={1}
                    style={styles.subResult}>
                    {(prevNumber === '0') ? '' : prevNumber}
                </Text>
            </View>

            <View style={styles.row}>
                <CalculeitorButton onPress={clean} blackText color={colors.lightGary} label="C" />
                <CalculeitorButton onPress={toggleSign} blackText color={colors.lightGary} label="-/+" />
                <CalculeitorButton onPress={deleteOperation} blackText color={colors.lightGary} label="del" />
                <CalculeitorButton onPress={divideOperation} color={colors.orange} label="÷" />
            </View>
            <View style={styles.row}>
                <CalculeitorButton onPress={() => buildNumber('7')} color={colors.darkGray} label="7" />
                <CalculeitorButton onPress={() => buildNumber('8')} color={colors.darkGray} label="8" />
                <CalculeitorButton onPress={() => buildNumber('9')} color={colors.darkGray} label="9" />
                <CalculeitorButton onPress={multiplyOperation} color={colors.orange} label="X" />
            </View>
            <View style={styles.row}>
                <CalculeitorButton onPress={() => buildNumber('4')} color={colors.darkGray} label="4" />
                <CalculeitorButton onPress={() => buildNumber('5')} color={colors.darkGray} label="5" />
                <CalculeitorButton onPress={() => buildNumber('6')} color={colors.darkGray} label="6" />
                <CalculeitorButton onPress={subtractOperation} color={colors.orange} label="-" />
            </View>
            <View style={styles.row}>
                <CalculeitorButton onPress={() => buildNumber('1')} color={colors.darkGray} label="1" />
                <CalculeitorButton onPress={() => buildNumber('2')} color={colors.darkGray} label="2" />
                <CalculeitorButton onPress={() => buildNumber('3')} color={colors.darkGray} label="3" />
                <CalculeitorButton onPress={addOperation} color={colors.orange} label="+" />
            </View>
            <View style={styles.row}>
                <CalculeitorButton onPress={() => buildNumber('0')} color={colors.darkGray} label="0" doubleSize />
                <CalculeitorButton onPress={() => buildNumber('.')} color={colors.darkGray} label="." />
                <CalculeitorButton onPress={ calculateResult } color={colors.orange} label="=" />
            </View>
        </View>
    );
};
