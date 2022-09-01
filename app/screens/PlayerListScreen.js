import React from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { FloatingAction } from "react-native-floating-action";
// import ActionButton from 'react-native-action-button';
import { useSelector, useDispatch } from 'react-redux'
import * as Constants from '../constants'
import Colors from '../colors'
import PlayerCard from '../components/PlayerCard';
import Ionicons from 'react-native-vector-icons/Ionicons';

const PlayerList = ({navigation, route}) => {
  const playerDetails = useSelector((state) => state.playerDetails)

  const renderItem = ({ item }) => (
    <PlayerCard playerDetail={item}/>
  );

  const ItemDivider = () => {
    return (
      <View style={styles.flatListItemSeparator}/>
    );
  }

  const EmptyListView = () => {
    return (
      <View style={styles.emptyListView}>
        <Text style={styles.emptyListText}>
          {Constants.EMPTY_PLAYER_LIST_TEXT}
        </Text>
      </View>
    );
  }

  const actions = [
    {
      text: "Add Player",
      icon: <Ionicons name="add" size={40} color={Colors.white}/>,
      name: "Add Player",
      position: 1
    }
  ];

  return (
    <View style={styles.playerListContainer}>
      <FlatList
        // data={route.params.playerDetails}
        data={playerDetails}
        renderItem={renderItem}
        keyExtractor={item => item.name}
        ItemSeparatorComponent={ItemDivider}
        ListEmptyComponent={EmptyListView}
      />
      <View style={styles.addPlayerFABView}>
        <FloatingAction
          actions={actions}
          onPressItem={name => {
            console.log(`selected button: ${name}`);
            navigation.navigate('Add Player', {playerDetail: null});
          }}
          color={Colors.teal}
          overrideWithAction={true}
          distanceToEdge={{ vertical: 20, horizontal: 20 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  playerListContainer: {
    flex: 1
  },
  flatListItemSeparator: {
    height: 1,
    width: "100%",
    backgroundColor: Colors.black,
  },
  addPlayerFABView: {
    flex: 1,
  },
  emptyListView: {
    margin: 20,
    alignItems: "center"
  },
  emptyListText: {
    fontSize: 16,
    fontWeight: '400',
    color: Colors.black,
  },
});

export default PlayerList;