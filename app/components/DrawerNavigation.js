import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View
  } from 'react-native';
import * as Constants from '../constants'
import Colors from '../colors'

const DrawerNavigation = () => {
    return (
        <View style={[styles.container, styles.navigationContainer]}>
            <Text style={styles.paragraph}>I'm in the Drawer!</Text>
        </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 16
      },
      navigationContainer: {
        backgroundColor: "#ecf0f1"
      },
  });
  
  export default DrawerNavigation;