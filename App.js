/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useRef } from 'react';
import type {Node} from 'react';
import {
  DrawerLayoutAndroid,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
// import ToolbarAndroid from '@react-native-community/toolbar-android';

import Colors from './app/colors'
import About from './app/screens/AboutScreen';
import PlayerCard from './app/components/PlayerCard';
import DrawerNavigation from './app/components/DrawerNavigation'

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const drawer = useRef(null);


  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darkGrey : Colors.lightGrey,
  };

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition="left"
      renderNavigationView={DrawerNavigation}
    >
      <ScrollView>
        <PlayerCard/>
      </ScrollView>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
