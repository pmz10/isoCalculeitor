import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import CalculatorScreen from './presentation/Screens/CalculatorScreen';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'black'}
      />
      <CalculatorScreen />
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

export default App;