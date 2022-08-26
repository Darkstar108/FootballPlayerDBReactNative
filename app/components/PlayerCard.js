import React from 'react';
import {
    Button,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
  } from 'react-native';
import * as Constants from '../constants'
import Colors from '../colors'

const PlayerCard = (props) => {
    return (
        <View style={styles.card}>
            <View style={styles.infoContainer}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.playerImage}
                        source={{uri: props.playerDetail.imageUrl,}}
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.playerNameText}>
                        {props.playerDetail.name}
                    </Text>
                    <Text style={styles.playerInfoText}>
                        {props.playerDetail.nationality}
                    </Text>
                    <View style={styles.ageAndPositionContainer}>
                        <View style={styles.ageContainer}>
                            <Text style={styles.playerInfoTextTitle}>
                                {Constants.PLAYER_CARD_AGE}
                            </Text>
                            <Text style={styles.playerInfoText}>
                                {props.playerDetail.age}
                            </Text>
                        </View>
                        <View style={styles.positionContainer}>
                            <Text style={styles.playerInfoTextTitle}>
                                {Constants.PLAYER_CARD_POSITION}
                            </Text>
                            <Text style={styles.playerInfoText}>
                                {props.playerDetail.position}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.statsContainer}>
                        <View style={styles.attackContainer}>
                            <Text style={styles.playerInfoTextTitle}>
                                {Constants.PLAYER_CARD_ATTACK}
                            </Text>
                            <Text style={styles.playerInfoText}>
                                {props.playerDetail.attack}
                            </Text>
                        </View>
                        <View style={styles.midfieldContainer}>
                            <Text style={styles.playerInfoTextTitle}>
                                {Constants.PLAYER_CARD_MIDFIELD}
                            </Text>
                            <Text style={styles.playerInfoText}>
                                {props.playerDetail.midfield}
                            </Text>                            
                        </View>
                        <View style={styles.defenderContainer}>
                            <Text style={styles.playerInfoTextTitle}>
                                {Constants.PLAYER_CARD_DEFENCE}
                            </Text>
                            <Text style={styles.playerInfoText}>
                                {props.playerDetail.defence}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title={Constants.EDIT_PLAYER_BUTTON_TITLE}
                    onPress={() => Alert.alert('Edit Player Button pressed')}
                    color={Colors.teal}
                />
                <Button
                    title={Constants.DELETE_PLAYER_BUTTON_TITLE}
                    onPress={() => Alert.alert('Delete Player Button pressed')}
                    color={Colors.teal}
                />
            </View>
        </View>
    );
  }

  const styles = StyleSheet.create({
    card: {
        padding: 10,
        marginVertical: 10,
        marginHorizontal: 20,
        minHeight: 200,
        flexDirection: "column",
        backgroundColor: Colors.lightGrey,
    },
    infoContainer: {
        // backgroundColor: "blue",
        flexDirection: "row",
    },
    imageContainer: {
        // backgroundColor: "red",
        width: "40%",
        alignItems: "center",
    },
    textContainer: {
        // backgroundColor: "orange",
        width: "60%",
        padding: 10,
        flexDirection: "column"
    },
    buttonContainer: {
        // backgroundColor: "yellow",
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    ageAndPositionContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    ageContainer: {
        flexDirection: "column",
    },
    positionContainer: {
        flexDirection: "column",
    },
    statsContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    attackContainer: {
        flexDirection: "column",
    },
    midfieldContainer: {
        flexDirection: "column",
    },
    defenderContainer: {
        flexDirection: "column",
    },
    playerImage: {
        width: 150,
        height: 150,
    },
    playerNameText: {
        fontSize: 20,
        fontWeight: "800",
        color: Colors.black,
    },
    playerInfoTextTitle: {
        fontSize: 16,
        fontWeight: '800',
        color: Colors.black,
    },
    playerInfoText: {
        fontSize: 16,
        fontWeight: '400',
        color: Colors.black,
    },
  });
  
  export default PlayerCard;