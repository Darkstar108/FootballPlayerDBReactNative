import React from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { useDispatch } from 'react-redux'
import RadioForm from 'react-native-simple-radio-button';
import * as Constants from '../constants'
import Colors from '../colors'
import {store} from '../redux/Store';

const EditPlayer = ({navigation, route}) => {
  const dispatch = useDispatch()
  const [name, onChangeName] = React.useState(route.params.playerDetail.name);
  const [nationality, onChangeNationality] = React.useState(route.params.playerDetail.nationality);
  const [age, onChangeAge] = React.useState(route.params.playerDetail.age);
  const [position, onChangePosition] = React.useState(route.params.playerDetail.position);
  const [attack, onChangeAttack] = React.useState(route.params.playerDetail.attack);
  const [midfield, onChangeMidfield] = React.useState(route.params.playerDetail.midfield);
  const [defence, onChangeDefence] = React.useState(route.params.playerDetail.defence);
  const [imageUrl, onChangeImageUrl] = React.useState(route.params.playerDetail.imageUrl);
  let radio_props = [
    {label: Constants.FORWARD, value: Constants.FORWARD},
    {label: Constants.MIDFIELDER, value: Constants.MIDFIELDER},
    {label: Constants.DEFENDER, value: Constants.DEFENDER},
  ];
  let initial = -1;
  if(position === Constants.FORWARD) 
    initial = 0
  else if(position === Constants.MIDFIELDER)
    initial = 1
  else
    initial = 2

  const onClickSubmitPlayerButton = () => {
    let playerDetail = {
      "name": name,
      "nationality": nationality,
      "position": position,
      "age": age,
      "imageUrl": imageUrl,
      "attack": attack,
      "midfield": midfield,
      "defence": defence
    }
    console.log(playerDetail)
    dispatch({type: Constants.PLAYER_LIST_EDIT_PLAYER_ACTION, payload: playerDetail})
    console.log(store.getState())
    navigation.navigate('Player List')
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.editPlayerTitle}>
        {Constants.CUSTOMIZE_PLAYER_DETAILS_TITLE}
      </Text>
      <TextInput
        style={styles.editPlayerInput}
        onChangeText={onChangeName}
        value={name}
        placeholder={Constants.PLAYER_NAME_PLACEHOLDER}
        editable={false}
        underlineColorAndroid={Colors.teal}
      />
      <TextInput
        style={styles.editPlayerInput}
        onChangeText={onChangeNationality}
        value={nationality}
        placeholder={Constants.PLAYER_NATIONALITY_PLACEHOLDER}
        underlineColorAndroid={Colors.teal}
      />
      <TextInput
        style={styles.editPlayerInput}
        onChangeText={onChangeAge}
        value={age}
        placeholder={Constants.PLAYER_AGE_PLACEHOLDER}
        underlineColorAndroid={Colors.teal}
        keyboardType="numeric"
      />
      <View style={styles.editPlayerPositionContainer}>
      <Text style={styles.editPlayerInput}>
        {Constants.PLAYER_POSITION}
      </Text>
        <RadioForm
          radio_props={radio_props}
          initial={initial}
          buttonColor={Colors.teal}
          onPress={(value) => {onChangePosition(value)}}
        />
      </View>
      <View style={styles.editPlayerStatsContainer}>
        <TextInput
          style={[styles.editPlayerInput, styles.editPlayerStatsInput]}
          onChangeText={onChangeAttack}
          value={attack}
          placeholder={Constants.PLAYER_ATTACK_RATING}
          underlineColorAndroid={Colors.teal}
          keyboardType="numeric"
        />
        <TextInput
          style={[styles.editPlayerInput, styles.editPlayerStatsInput]}
          onChangeText={onChangeMidfield}
          value={midfield}
          placeholder={Constants.PLAYER_MIDFIELD_RATING}
          underlineColorAndroid={Colors.teal}
          keyboardType="numeric"
        />
        <TextInput
          style={[styles.editPlayerInput, styles.editPlayerStatsInput]}
          onChangeText={onChangeDefence}
          value={defence}
          placeholder={Constants.PLAYER_DEFENCE_RATING}
          underlineColorAndroid={Colors.teal}
          keyboardType="numeric"
        />
      </View>
      <TextInput
        style={styles.editPlayerInput}
        onChangeText={onChangeImageUrl}
        value={imageUrl}
        placeholder={Constants.PLAYER_IMAGE_URL_PLACEHOLDER}
        underlineColorAndroid={Colors.teal}
        keyboardType="url"
      />
      <View style={styles.submitPlayerButtonView}>
        <Button
          title={Constants.SUBMIT_PLAYER_BUTTON_TITLE}
          onPress={onClickSubmitPlayerButton}
          color={Colors.teal}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  editPlayerStatsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  editPlayerPositionContainer: {
    margin: 10,
  },
  editPlayerTitle: {
    fontSize: 24, 
    fontWeight: '600',
    color: 'black',
    marginVertical: 20,
    textAlign: "center",
  },
  editPlayerInput: {
    fontSize: 16,
    fontWeight: '400',
    color: Colors.black,
    margin: 10,
  },
  editPlayerStatsInput: {
  },
  submitPlayerButtonView: {
    marginVertical: 20,
    marginHorizontal: 100
  },
});

export default EditPlayer;