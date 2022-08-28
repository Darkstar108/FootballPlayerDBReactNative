import React from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import * as Constants from '../constants'
import Colors from '../colors'

const AddPlayer = () => {
  const [name, onChangeName] = React.useState("");
  const [nationality, onChangeNationality] = React.useState("");
  const [age, onChangeAge] = React.useState(0);
  const [position, onChangePosition] = React.useState("");
  const [attack, onChangeAttack] = React.useState(0);
  const [midfield, onChangeMidfield] = React.useState(0);
  const [defence, onChangeDefence] = React.useState(0);
  const [imageUrl, onChangeImageUrl] = React.useState("");
  const editFlag = false;
  var radio_props = [
    {label: 'Forward', value: "Forward" },
    {label: 'Midfielder', value: "Midfielder" },
    {label: 'Defender', value: "Defender" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.addPlayerTitle}>
        {Constants.CUSTOMIZE_PLAYER_DETAILS_TITLE}
      </Text>
      <TextInput
        style={styles.addPlayerInput}
        onChangeText={onChangeName}
        value={name}
        placeholder={Constants.PLAYER_NAME_PLACEHOLDER}
        editable={!editFlag}
        underlineColorAndroid={Colors.teal}
      />
      <TextInput
        style={styles.addPlayerInput}
        onChangeText={onChangeNationality}
        value={nationality}
        placeholder={Constants.PLAYER_NATIONALITY_PLACEHOLDER}
        underlineColorAndroid={Colors.teal}
      />
      <TextInput
        style={styles.addPlayerInput}
        onChangeText={onChangeAge}
        value={age}
        placeholder={Constants.PLAYER_AGE_PLACEHOLDER}
        underlineColorAndroid={Colors.teal}
      />
      <View style={styles.addPlayerPositionContainer}>
      <Text style={styles.addPlayerInput}>
        {Constants.PLAYER_POSITION}
      </Text>
        <RadioForm
          radio_props={radio_props}
          initial={-1}
          buttonColor={Colors.teal}
          onPress={(value) => {onChangePosition(value)}}
        />
      </View>
      <View style={styles.addPlayerStatsContainer}>
        <TextInput
          style={[styles.addPlayerInput, styles.addPlayerStatsInput]}
          onChangeText={onChangeAttack}
          value={attack}
          placeholder={Constants.PLAYER_ATTACK_RATING}
          underlineColorAndroid={Colors.teal}
        />
        <TextInput
          style={[styles.addPlayerInput, styles.addPlayerStatsInput]}
          onChangeText={onChangeMidfield}
          value={midfield}
          placeholder={Constants.PLAYER_MIDFIELD_RATING}
          underlineColorAndroid={Colors.teal}
        />
        <TextInput
          style={[styles.addPlayerInput, styles.addPlayerStatsInput]}
          onChangeText={onChangeDefence}
          value={defence}
          placeholder={Constants.PLAYER_DEFENCE_RATING}
          underlineColorAndroid={Colors.teal}
        />
      </View>
      <TextInput
        style={styles.addPlayerInput}
        onChangeText={onChangeImageUrl}
        value={imageUrl}
        placeholder={Constants.PLAYER_IMAGE_URL_PLACEHOLDER}
        underlineColorAndroid={Colors.teal}
      />
      <View style={styles.submitPlayerButtonView}>
        <Button
          title={Constants.SUBMIT_PLAYER_BUTTON_TITLE}
          onPress={() => Alert.alert('Submit Player Button pressed')}
          color={Colors.teal}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  addPlayerStatsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  addPlayerPositionContainer: {
    margin: 10,
  },
  addPlayerTitle: {
    fontSize: 24, 
    fontWeight: '600',
    color: 'black',
    marginVertical: 20,
    textAlign: "center",
  },
  addPlayerInput: {
    fontSize: 16,
    fontWeight: '400',
    color: 'black',
    // borderBottomColor: Colors.darkGrey,
    // borderBottomWidth: 1,
    margin: 10,
  },
  addPlayerStatsInput: {
  },
  submitPlayerButtonView: {
    marginVertical: 20,
    marginHorizontal: 100
  },
});

export default AddPlayer;