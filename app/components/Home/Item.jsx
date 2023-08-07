import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Divider } from '@react-native-material/core';

const Item = ({ data }) => {
  
  const { name, id } = data;
  return (
    <View style={styles.container} >
      <BouncyCheckbox
        onPress={() => { console.log('check'); }}
        text={name}
        textStyle={styles.text}
      />
      <Divider style={{ marginTop: 10 }} leadingInset={16} color="#fff" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10
  },
  text: {
    color: 'white',
    fontSize: 16
  }
});


export default Item