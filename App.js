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
  const playerDetails = [
    {
      "name": "Lionel Messi",
      "nationality": "Argentina",
      "position": "Forward",
      "age": 33,
      "imageUrl": "https://pesdb.net/pes2021/images/players/7511.png",
      "attack": 99,
      "midfield": 75,
      "defence": 20
    },
    {
      "name": "Kevin De Bruyne",
      "nationality": "Belgium",
      "position": "Midfield",
      "age": 29,
      "imageUrl": "https://pesdb.net/pes2021/images/players/44379.png",
      "attack": 80,
      "midfield": 95,
      "defence": 60
    },
    {
      "name": "Neymar",
      "nationality": "Brazil",
      "position": "Forward",
      "age": 28,
      "imageUrl": "https://pesdb.net/pes2021/images/players/40352.png",
      "attack": 90,
      "midfield": 65,
      "defence": 30
    },
    {
      "name": "Kylian Mbappe",
      "nationality": "France",
      "position": "Forward",
      "age": 22,
      "imageUrl": "https://pesdb.net/pes2021/images/players/110718.png",
      "attack": 95,
      "midfield": 45,
      "defence": 25
    },
    {
      "name": "Cristiano Ronaldo",
      "nationality": "Portugal",
      "position": "Forward",
      "age": 35,
      "imageUrl": "https://pesdb.net/pes2021/images/players/4522.png",
      "attack": 95,
      "midfield": 45,
      "defence": 20
    }
  ]

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
        <PlayerCard playerDetail={playerDetails[0]}/>
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
