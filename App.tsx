import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

import RootStack from './src/navigation';

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={styles.flex}>
        <NavigationContainer>
          <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.flex}>
              <BottomSheetModalProvider>
                <RootStack />
              </BottomSheetModalProvider>
            </View>
          </SafeAreaView>
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
});

export default App;
