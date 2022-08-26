import React from 'react';
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

const PlayerList = ({route}) => {

  console.log(route.params)

  const renderItem = ({ item }) => (
    <PlayerCard playerDetail={item}/>
  );

  const ItemDivider = () => {
    return (
      <View style={styles.flatListItemSeparator}/>
    );
  }

  return (
    <FlatList
      data={route.params.playerDetails}
      renderItem={renderItem}
      keyExtractor={item => item.name}
      ItemSeparatorComponent={ItemDivider}
    />
  );
}

const styles = StyleSheet.create({
  flatListItemSeparator: {
    height: 1,
    width: "100%",
    backgroundColor: Colors.black,
}
});

export default PlayerList;