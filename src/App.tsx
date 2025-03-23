import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { CalculatorScreen } from './presentation/Screens/CalculatorScreen';
import { styles } from './Config/Theme/app-theme';

const App = () => {
  return (
    <View style={styles.background}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'black'}
      />
      <CalculatorScreen />
    </View>
  );
};

export default App;