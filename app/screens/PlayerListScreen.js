import React from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { FloatingAction } from "react-native-floating-action";
import { useSelector, useDispatch } from 'react-redux'
import * as Constants from '../constants'
import Colors from '../colors'
import PlayerCard from '../components/PlayerCard';
import Ionicons from 'react-native-vector-icons/Ionicons';

const PlayerList = ({route}) => {
  const playerDetails = useSelector((state) => state.playerDetails)

  const renderItem = ({ item }) => (
    <PlayerCard playerDetail={item}/>
  );

  const ItemDivider = () => {
    return (
      <View style={styles.flatListItemSeparator}/>
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
    <View>
      <FlatList
        data={route.params.playerDetails}
        renderItem={renderItem}
        keyExtractor={item => item.name}
        ItemSeparatorComponent={ItemDivider}
      />
      <View style={styles.addPlayerFABView}>
        <Text style={styles.example}>Floating Action example</Text>
        <FloatingAction
          actions={actions}
          onPressItem={name => {
            console.log(`selected button: ${name}`);
          }}
          color={Colors.teal}
          overrideWithAction={true}
          distanceToEdge={{ vertical: 30, horizontal: 10 }}
        />
      </View>
    </View>
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