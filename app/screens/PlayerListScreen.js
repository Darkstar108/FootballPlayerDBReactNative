import React, {useEffect, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { FloatingAction } from "react-native-floating-action";
import { useSelector } from 'react-redux'
import * as Constants from '../constants'
import Colors from '../colors'
import PlayerCard from '../components/PlayerCard';
import Ionicons from 'react-native-vector-icons/Ionicons';

const PlayerList = ({navigation, route}) => {
  const playerDetails = useSelector((state) => state.playerDetails)
  const [searchText, onChangeSearchText] = useState('');
  const [filteredPlayerDetails, onChangeFilteredPlayerDetails] = useState(playerDetails);

  useEffect(() => {
    // dispatch({type: Constants.PLAYER_LIST_EMPTY_LIST})
    // dispatch({type: Constants.PLAYER_LIST_ADD_PLAYER_ACTION, payload: Constants.playerDetails[1]})
  });

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <View style={styles.searchBarView}>
            <TextInput
              style={styles.searchBarInput}
              onChangeText={(query) => handleSearch(query)}
              value={searchText}
              placeholder={Constants.SEARCH_INPUT_PLACEHOLDER}
            />
          </View>
        );
      },
    });
  });

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      handleSearch("")
    });
    return unsubscribe;
  }, [navigation]);

  const handleSearch = (query) => {
    onChangeSearchText(query)
    const tempPlayerDetails = playerDetails.filter((playerDetail) => {
      return playerDetail.name.toLowerCase().includes(query.toLowerCase())
    })
    onChangeFilteredPlayerDetails(tempPlayerDetails)
    console.log("Filtered Player Details with query: " + query)
    console.log(filteredPlayerDetails)
  }

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
        data={searchText.length == 0 ? playerDetails : filteredPlayerDetails}
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
  searchBarView: {
    marginHorizontal: 10,
    justifyContent: "center"
  },
  searchBarInput: {
    height: "80%",
    fontSize: 14,
    fontWeight: '400',
    color: Colors.black,
    backgroundColor: Colors.white,
    // borderBottomColor: Colors.darkGrey,
    // borderBottomWidth: 1,
  },
});

export default PlayerList;