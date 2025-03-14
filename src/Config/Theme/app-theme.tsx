import { StyleSheet } from "react-native";


export  const colors = {
    darkGray: '#2D2D2D',
    lightGary: '#9B9B9B',
    orange:'#FF9427',

    textPrimary: 'white',
    texSecondary: '#666666',
    backgroundPrimary: '#000000',
}

export const styles = StyleSheet.create({
    background: {
        flex: 1, 
        backgroundColor: colors.backgroundPrimary
    },

    calculatorContainer: {
       flex: 1, 
       padding: 20,
       justifyContent: 'flex-end',
    },

    mainResult: {
        color: colors.textPrimary,
        fontSize: 70,
        textAlign: 'right',
        marginBottom: 10,
        fontWeight: '400',

    },

    subResult: {
        color: colors.texSecondary,
        fontSize: 40,
         textAlign: 'right',
        // marginBottom: 10,
         fontWeight: '300',
    }
});