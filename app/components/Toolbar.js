import React from 'react';
import ToolbarAndroid from '@react-native-community/toolbar-android';
import {
  FlatList,
    ScrollView,
    StyleSheet,
    Text,
    View,
  } from 'react-native';
import * as Constants from '../constants'
import Colors from '../colors'
import PlayerCard from '../components/PlayerCard';

const Toolbar = (props) => {
 
    const onActionSelected = (position) => {
        console.log(position)
    }

  return (
    <ToolbarAndroid
      style={styles.toolbar}
      title="FootballPlayersDB"
      actions={[{title: 'Search', icon: require('../assets/search_icon.png'), show: 'always'}]}
      onActionSelected={onActionSelected} />
  );
}

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: Colors.teal,
    height: 50,
  },
});

export default Toolbar;