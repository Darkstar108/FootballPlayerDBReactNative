import 'react-native-gesture-handler';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useEffect} from 'react';
import type {Node} from 'react';
import {
  Alert,
  BackHandler,
  StyleSheet,
  Text,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import {store, persistor} from './app/redux/Store';
import {PersistGate} from 'redux-persist/integration/react';

import DrawerNavigator from './app/components/DrawerNavigator';
import AddPlayer from './app/screens/AddPlayerScreen';
import EditPlayer from './app/screens/EditPlayerScreen';

const Stack = createNativeStackNavigator();

const App: () => Node = () => {

  useEffect(() => {
    const backAction = () => {
      Alert.alert("Hold on!", "Are you sure you want to exit?", [
        {
          text: "No",
          onPress: () => null,
          style: "cancel"
        },
        { text: "YES", onPress: () => BackHandler.exitApp() }
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen
                name="Drawer Navigator"
                component={DrawerNavigator}
                options={{
                  headerShown: false
                }} 
              />
              <Stack.Screen
                name="Add Player"
                component={AddPlayer}
                options={{
                  headerShown: false
                }} 
              />
              <Stack.Screen
                name="Edit Player"
                component={EditPlayer}
                options={{
                  headerShown: false
                }} 
              />
            </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
});

export default App;
