import React from 'react';
import {
    StyleSheet,
    Text
  } from 'react-native';
import * as Constants from '../constants'

const About = () => {
    return (
      <>
        <Text style={styles.title}>{Constants.ABOUT_SCREEN_TITLE}</Text>
        <Text style={styles.title}>{Constants.ABOUT_SCREEN_CONTENT}</Text>
      </>
    );
  }

  const styles = StyleSheet.create({
    title: {
        padding: 10,
        fontSize: 24, 
        fontWeight: '600',
        color: 'black'
    },
    content: {
        padding: 10,
        fontSize: 18,
        fontWeight: '400',
        color: 'black'
    },
  });
  
  export default About;